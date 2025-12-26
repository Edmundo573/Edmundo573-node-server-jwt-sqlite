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
🛣️ Roadmap hacia la versión 2.0.0 — El Camino de la Escalabilidad Comunitaria
🚀 Objetivos técnicos
Microservicios → separar autenticación, tareas y auditoría en servicios independientes para mayor modularidad.

API pública → documentación con Swagger/OpenAPI para que otros puedan integrarse fácilmente.

Base de datos avanzada → migración opcional de SQLite a PostgreSQL para proyectos de mayor escala.

Gestión de usuarios → roles extendidos (admin, editor, lector) y permisos granulares.

Auditoría completa → logs con trazabilidad y exportación en JSON/CSV.

Integración comunitaria → endpoints para compartir tareas entre usuarios, fomentando colaboración.

📂 Estructura proyectada
services/auth/ → microservicio de autenticación.

services/tasks/ → microservicio de gestión de tareas.

services/audit/ → microservicio de auditoría y logs.

docs/api/ → documentación OpenAPI.

config/ → configuración centralizada para entornos múltiples.

🛡️ Filosofía ceremonial
La versión 2.0.0 representa la madurez del altar digital:

Los microservicios son templos independientes que dialogan entre sí.

La API pública abre las puertas a la comunidad.

La migración de base de datos simboliza el paso de piedra a montaña.

La auditoría completa asegura que cada acción quede inscrita en memoria viva.

La colaboración comunitaria transforma el altar en plaza pública digital.

📜 Licencia
MIT — compartido con ética y libertad, ahora con visión de comunidad.
# 🛡️ Node-Server-JWT-SQLite

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-stable-success)

El Ritual del Servidor con Llave y Memoria  
Bienvenido al templo digital de autenticación y persistencia.  
Este proyecto no es solo código: es legado ceremonial.  

---

## 🔑 Ejemplo de uso de API

### Login
```http
POST /auth/login
Content-Type: application/json

{
  "username": "edmundo",
  "password": "clave123"
}
{
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
POST /tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Auditar altar digital",
  "completed": false
}






