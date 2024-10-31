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
