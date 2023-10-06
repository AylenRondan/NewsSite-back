/**
 * @typedef {Object} Usuario
 * @property {number} id - El ID del usuario.
 * @property {string} name - El nombre del usuario.
 * @property {string} apellido - El apellido del usuario.
 */

/**
 * @typedef {Object} Animal
 * @property {string} raza - La raza del animal.
 * @property {string} nombre - El nombre del animal.
 * @property {number} edad - La edad del animal.
 */


const Usuario = {
    id: 1,
    name: "aylen",
    apellido: "rondan"
}

const Animal = {
    raza: "felino",
    nombre: "Gluten",
    edad: 4
}

/**
 * Registra un nuevo usuario con informacion personal de su mascota
 * 
 * @param {String} ocupation - La ocupacion del usuario
 * @param {Usuario} user - Datos del usuario
 * @param {Number} age - edad del usuario
 * @param {Animal} pet - Los datos de la mascota del usuario
 * @returns {Boolean} - Devuelve 'true' si el registro es exitoso, de lo contrario, devuelve 'false';
 */

const registrarUsuario = (ocupation, user, age, pet) => {
   console.log("Registramos exitosamente al usuario");
   return true;
 }

export {registrarUsuario};