# Edmundo573-node-server-jwt-sqlite
# 🛡️ Node-Server-JWT-SQLite  
**El Ritual del Servidor con Llave y Memoria**

Bienvenido al templo digital de autenticación y persistencia.  
Este proyecto no es solo código: es legado ceremonial. Cada usuario entra con su **llave secreta (JWT)** y sus tareas se graban en **piedra digital (SQLite)**, bajo la custodia de los **Tres Guardianes del Respaldo**.

---

## 🚀 Visión de CEO
Este servidor representa más que un stack técnico:
- **Autenticación ética** → nadie entra sin llave.  
- **Persistencia confiable** → cada tarea queda inscrita en piedra.  
- **Redundancia ceremonial** → Outlook, OneDrive y Gmail vigilan como centinelas.  
- **Escalabilidad comunitaria** → pensado para crecer y compartirse como legado.  

---

## 📂 Estructura del proyecto
- `index.js` → corazón del servidor Express.  
- `routes/` → rutas de **auth** y **tasks**.  
- `models/` → usuarios y tareas.  
- `middleware/auth.js` → verificación de tokens JWT.  
- `db.js` → inicialización de SQLite.  
- `.env.example` → variables de entorno (JWT_SECRET, PORT, DATABASE_FILE).  
- `README.md` → guía ceremonial.  
- `.gitignore` → exclusiones (`node_modules`, `.env`, `data/`).  

---

## ⚙️ Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Edmundo573/node-server-jwt-sqlite.git

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Iniciar servidor en modo desarrollo
npm run dev
