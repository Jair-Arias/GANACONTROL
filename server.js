const express = require('express');
const path = require('path');

const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Servir archivos estáticos
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor activo en puerto 3000');
});
