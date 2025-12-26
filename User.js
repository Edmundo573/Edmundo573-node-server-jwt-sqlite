export const UserModel = {
  async findByUsername(db, username) {
    return db.get('SELECT * FROM users WHERE username = ?', username);
  },
  async create(db, { username, password_hash, role }) {
    const created_at = new Date().toISOString();
    const res = await db.run(
      'INSERT INTO users (username, password_hash, role, created_at) VALUES (?, ?, ?, ?)',
      username, password_hash, role, created_at
    );
    return db.get('SELECT * FROM users WHERE id = ?', res.lastID);
  }
};
