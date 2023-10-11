 /* 
Controlador:
Es una clase que se encarga de recibir la peticion del cliente. Aqui se indica si son metodos GET, PUT, POST, ETC. Tambien se define aqui los objetos de entrada y salida (los DTOs que se va a utilizar) o si esq se necesita queryParams, uriParams.

Servicio:
Es una clase que se encarga de la parte logica, por ejemplo aqui se realizan las llamadas a respositorios y se trabajarn sobre los datos de las entidades, mapeos, la logica( switch, if, o cualquier tipo de logica necesaria)

En palabras para que se entienda el controlador vendria a ser como el gerente, mientras que el Servicio es el trabajador. 
*/

const express = require('express');
const app = express();

// Ruta para obtener la edad de un usuario por su ID
app.get('/user/:userId/edad', (req, res) => {
  const userId = req.params.userId;
  const edad = findUserById(userId); // (Llama a la función para buscar la edad del usuario)
  res.json({ userId, edad });
});

// Define la función para buscar la edad del usuario
function findUserById(userId) {
//Ejemplo de como puede ser:
  if (userId === '1') {
    return 30;
  } else {
    return null; // Usuario no encontrado
  }
}

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});





