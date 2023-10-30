
const User = require('../models/user');
const journalistService = require ('../services/index.js')


// Ruta para crear un periodista
router.post('/journalist', async (req, res) => {
  try {
    const { name, lastname, adress, phoneNumber, email } = req.body;
    const create = journalistService.createJournalist();

    const nuevoUsuario = new Usuario({
      name,
      lastname,
      adress,
      phoneNumber,
      email,
      ...create, //Agrega el valor por defecto a los datos del usuario.
    });


    res.status(201).json({
      code: 201,
      status: true,
      message: 'El periodista fue creado con éxito', //en ingles
    });

  } catch (error) {
    res.status(500).json({
      code: 500,
      status: false,
      message: 'Error al crear al periodista', // en ingles
      error: error.message,
    });
  }
});