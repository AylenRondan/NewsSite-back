// Define la función para buscar la edad del usuario
const findUserById = (userId) => {
    
    if (userId === '1') {
      return 30;
    } else {
      return null; // Usuario no encontrado
    }
  };
  
  module.exports = { findUserById };