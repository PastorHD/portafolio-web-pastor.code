const express = require('express');
const router = express.Router();
const connection = require('../index')

// Obtener todos los proyectos
router.get('/projects', (req, res) => {
    const sql = 'SELECT * FROM projects';
    connection.query(sql, (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  });

  // Agregar un nuevo proyecto
router.post('/projects', (req, res) => {
    const { name, description } = req.body;
    const sql = 'INSERT INTO projects (name, description) VALUES (?, ?)';
    connection.query(sql, [name, description], (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, name, description });
    });
  });
  
  module.exports = router;



