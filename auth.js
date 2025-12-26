import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.js';

export function authRoutes({ db, jwtSecret, logEvent }) {
  const router = express.Router();

  router.post('/register', async (req, res) => {
    const { username, password, role = 'user' } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Datos incompletos' });
    const existing = await UserModel.findByUsername(db, username);
    if (existing) return res.status(409).json({ error: 'Usuario ya existe' });

    const password_hash = await bcrypt.hash(password, 12);
    const user = await UserModel.create(db, { username, password_hash, role });

    logEvent({ user: username, action: 'REGISTER_USER', details: { role } });
    res.status(201).json({ id: user.id, username: user.username, role: user.role });
  });

  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findByUsername(db, username);
    if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'Credenciales inválidas' });

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      jwtSecret,
      { expiresIn: '8h' }
    );

    logEvent({ user: username, action: 'LOGIN', details: { user_id: user.id } });
    res.json({ token });
  });

  return router;
}
