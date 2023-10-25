
const express = require('express');
const User = require('../models/user');
const router = express.Router();
// Ruta para crear un periodista

router.post('/journalist', async (req, res) => {
    try {
      const { name, lastname, adress, phoneNumber, email } = req.body;
      const nuevoUsuario = new Usuario({
        name,
        lastname,
        adress,
        phoneNumber,
        email,
        isAdmin: false, // por defecto sera falso
      });
  
      //Guarda el nuevo periodista en DB
      await nuevoUsuario.save();
  
      res.status(201).json({
        code: 201,
        status: true,
        message: 'El periodista fue creado con éxito',
      });
  
    } catch (error) {
      res.status(500).json({
        code: 500,
        status: false,
        message: 'Error al crear al periodista',
        error: error.message,
      });
    }
  });

module.router = router;