const Singleton = (function () {
    let instance; // Almacena la única instancia del Singleton
  
    function createInstance() {
      // Código para crear la instancia del Singleton
      return {
        message: "Soy una instancia única",
        getRandomNumber: function () {
          return Math.random();
        },
      };
    }
  
    return {
      getInstance: function () {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();
  
  export default Singleton;