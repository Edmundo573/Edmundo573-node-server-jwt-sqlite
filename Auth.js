import jwt from 'jsonwebtoken';

export function requireAuth(jwtSecret) {
  return (req, res, next) => {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;
    if (!token) return res.status(401).json({ error: 'Token requerido' });

    try {
      const payload = jwt.verify(token, jwtSecret);
      req.user = payload; // { id, username, role }
      next();
    } catch {
      res.status(401).json({ error: 'Token inválido' });
    }
  };
}

export function requireRole(role) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: 'No autenticado' });
    if (req.user.role !== role) return res.status(403).json({ error: 'Permiso denegado' });
    next();
  };
}
