const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

// ✅ CONFIGURACIÓN CORRECTA PARA CODESPACES
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor activo en puerto ${PORT}`);
});
