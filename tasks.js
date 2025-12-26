import express from 'express';
import { TaskModel } from '../models/task.js';
import { requireAuth } from '../middleware/auth.js';

export function taskRoutes({ db, jwtSecret, logEvent }) {
  const router = express.Router();

  router.use(requireAuth(jwtSecret));

  router.get('/', async (req, res) => {
    const tasks = await TaskModel.listByUser(db, req.user.id);
    res.json(tasks);
  });

  router.post('/', async (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Título requerido' });
    const task = await TaskModel.create(db, { title, user_id: req.user.id });
    logEvent({ user: req.user.username, action: 'CREATE_TASK', details: { task_id: task.id, title } });
    res.status(201).json(task);
  });

  router.put('/:id', async (req, res) => {
    const { title, completed } = req.body;
    const id = Number(req.params.id);
    const updated = await TaskModel.update(db, { id, title, completed, user_id: req.user.id });
    if (!updated) return res.status(404).json({ error: 'Tarea no encontrada' });
    logEvent({ user: req.user.username, action: 'UPDATE_TASK', details: { task_id: id, title, completed } });
    res.json(updated);
  });

  router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const result = await TaskModel.remove(db, { id, user_id: req.user.id });
    if (result.changes === 0) return res.status(404).json({ error: 'Tarea no encontrada' });
    logEvent({ user: req.user.username, action: 'DELETE_TASK', details: { task_id: id } });
    res.status(204).send();
  });

  return router;
}
