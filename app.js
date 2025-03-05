const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(`🔍 Solicitud recibida: ${req.method} ${req.url}`);
    next();
});

app.use('/api/auth', authRoutes);

// Servidor en puerto 5000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
