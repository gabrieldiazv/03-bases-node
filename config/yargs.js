const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe:'Es la base de la tabla de multiplicar'
  })
  .option("l", {
      alias:'listar',
      type: "boolean",
      demandOption:true,
      default: false,
      describe:'muestra la tabla en consola'
  })
  .option("h", {
    alias:'hasta',
    type: "number",
    demandOption:false,
    default: 10,
    describe:'muestra hasta que rango quieres ver la tabla de multiplicar'
})
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un número";
    }
    return true;
  }).argv;


  module.exports = argv;