const userService = require('../services/userService');

//Controlador para obtener la edad de un usuario por medio de su ID.
const getUserEdad = (req, res) => {
    const userId = req.params.userId;
    const edad = userService.findUserById(userId);
  
    if (edad !== null) {
      res.json({ userId, edad });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  };
   
  module.exports = { getUserEdad };