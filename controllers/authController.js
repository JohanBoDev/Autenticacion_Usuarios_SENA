const connection = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// 🔹 Registro de usuario
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        connection.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
            if (err) return res.status(500).json({ error: "Error en la base de datos" });
            if (results.length > 0) return res.status(400).json({ error: "El usuario ya existe" });

            // Encriptar la contraseña
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insertar usuario en la base de datos
            connection.query(
                "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
                [name, email, hashedPassword],
                (err, result) => {
                    if (err) return res.status(500).json({ error: "Error al registrar el usuario" });
                    res.status(201).json({ message: "Usuario registrado exitosamente" });
                }
            );
        });
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// 🔹 Inicio de sesión
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar usuario en la base de datos
        connection.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
            if (err) return res.status(500).json({ error: "Error en la base de datos" });
            if (results.length === 0) return res.status(401).json({ error: "Usuario no encontrado" });

            const user = results[0];

            // Comparar contraseñas
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({ error: "Contraseña incorrecta" });

            // Generar token JWT
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

            res.json({ message: "Autenticación exitosa", token });
        });
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
