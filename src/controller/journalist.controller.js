
const journalistService = require ('../services')
async function journalist(req, res) {
  try {
    const { name, lastname, adress, phoneNumber, email } = req.body;
    await journalistService.createJournalist({ name, lastname, adress, phoneNumber, email });

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
};

module.exports = {journalist}