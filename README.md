🔐 API de Autenticación de Usuarios con Node.js y MySQL
📍 Descripción
Esta API permite el registro e inicio de sesión de usuarios con autenticación basada en JWT (JSON Web Token). Fue desarrollada con Node.js, Express y MySQL, utilizando bcrypt para el cifrado de contraseñas y dotenv para manejar variables de entorno.

⚡ Características
✅ Registro de usuarios con contraseña encriptada
✅ Inicio de sesión con validación y generación de JWT
✅ Protección de rutas con autenticación mediante Bearer Token
✅ Base de datos MySQL con almacenamiento seguro de credenciales
✅ Uso de dotenv para manejo de configuración y credenciales

🛠 Tecnologías utilizadas
Backend: Node.js, Express
Base de datos: MySQL
Autenticación: JWT (jsonwebtoken)
Cifrado de contraseñas: bcryptjs
Manejo de variables de entorno: dotenv
Pruebas con: Postman
📌 Instalación y Uso
1️⃣ Clonar el repositorio

bash
Copiar
Editar
git clone https://github.com/usuario/nombre-repo.git
cd nombre-repo
2️⃣ Instalar dependencias

bash
Copiar
Editar
npm install
3️⃣ Configurar variables de entorno (.env)

env
Copiar
Editar
DB_HOST=localhost
DB_USER=root
DB_PASS=tu_contraseña
DB_NAME=autenticacion_usuarios
DB_PORT=3306
JWT_SECRET=clave_super_secreta
PORT=3000
4️⃣ Iniciar el servidor

bash
Copiar
Editar
node app.js
5️⃣ Probar en Postman o con curl

bash
Copiar
Editar
curl -X POST "http://localhost:3000/api/auth/register" -H "Content-Type: application/json" -d "{\"name\":\"Johan Bohorquez\",\"email\":\"johan@example.com\",\"password\":\"123456\"}"
🚀 Endpoints disponibles
Método	Ruta	Descripción
POST	/api/auth/register	Registro de usuario
POST	/api/auth/login	Inicio de sesión
GET	/api/protected	Ruta protegida (requiere token)
📄 Documentación completa en: API_Documentacion.md

📌 Contribución
Si deseas mejorar la API, puedes hacer un fork y enviar un pull request.
Para reportar errores, usa la sección de Issues en GitHub.
