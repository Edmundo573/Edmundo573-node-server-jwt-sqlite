import express from 'express';
import dotenv from 'dotenv';
import { initDB } from './db.js';
import { createLogger } from './audit/logger.js';
import { authRoutes } from './routes/auth.js';
import { taskRoutes } from './routes/tasks.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;
const DATABASE_FILE = process.env.DATABASE_FILE || './data/app.db';
const LOGS_DIR = process.env.LOGS_DIR || './logs';

if (!JWT_SECRET) {
  console.error('Falta JWT_SECRET en .env');
  process.exit(1);
}

const app = express();
app.use(express.json());

const logEvent = createLogger(LOGS_DIR);

const db = await initDB(DATABASE_FILE);

app.use('/auth', authRoutes({ db, jwtSecret: JWT_SECRET, logEvent }));
app.use('/tasks', taskRoutes({ db, jwtSecret: JWT_SECRET, logEvent }));

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Ritual del Servidor con Llave y Memoria' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
