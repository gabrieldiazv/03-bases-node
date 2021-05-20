const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, listar = true, hasta=10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i} \n`.random;
      consola += `${base} x ${i} = ${base * i} \n`;
    }

    if (listar) {
      console.log("=====================".america);
      console.log(`    tabla del ${base}`.trap);
      console.log("=====================".america);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
    return `tabla-${base}.txt creada`.bold;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
