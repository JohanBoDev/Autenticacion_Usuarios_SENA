# 📌 API - Autenticación de Usuarios

## 📍 Base URL
```
http://localhost:3000/api/auth
```

---

## 🔹 **1. Registro de Usuario**
### 📌 Endpoint:
```
POST /register
```

### 🔹 Descripción:
Este endpoint permite registrar un nuevo usuario en la base de datos.

### 🛠 **Parámetros:** (Body - JSON)
```json
{
    "name": "Johan Bohorquez",
    "email": "johan@example.com",
    "password": "123456"
}
```

### ✅ **Respuesta esperada (201 - Creado)**
```json
{
    "message": "Usuario registrado exitosamente"
}
```

### ❌ **Posibles errores:**
| Código | Descripción |
|--------|-------------|
| 400 | Todos los campos son obligatorios |
| 409 | El usuario ya está registrado |
| 500 | Error en la base de datos |

---

## 🔹 **2. Inicio de Sesión**
### 📌 Endpoint:
```
POST /login
```

### 🔹 Descripción:
Este endpoint permite a los usuarios autenticarse en la aplicación.

### 🛠 **Parámetros:** (Body - JSON)
```json
{
    "email": "johan@example.com",
    "password": "123456"
}
```

### ✅ **Respuesta esperada (200 - OK)**
```json
{
    "message": "Autenticación exitosa",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### ❌ **Posibles errores:**
| Código | Descripción |
|--------|-------------|
| 400 | Todos los campos son obligatorios |
| 401 | Correo o contraseña incorrectos |
| 500 | Error en la base de datos |