require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const projectsRoutes = require('./routes/projects');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ruta importada
app.use('/api', projectsRoutes);


// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor en funcionamiento');
});

// Confirmación del servidor corriendo
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Conexión a la base de datos
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos');
  }
});


// Exporta la conexión para usarla en otros archivos
module.exports = connection;