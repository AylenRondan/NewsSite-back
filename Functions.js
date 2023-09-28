const usuario = {
    id: 1,
    name: "aylen",
    apellido: "rondan"
}

const animal = {
    raza: "felino",
    nombre: "Gluten",
    edad: 4
}
/**
 * @param {String} ocupation
 * @param {usuario} user
 * @param {Number} age
 * @param {animal} pet
 */

const registrarUsuario = (ocupation, user, age, pet) => {
   console.log("Registramos exitosamente al usuario");
   return true;
 }

export {registrarUsuario};