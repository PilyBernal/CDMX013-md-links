//Identificar si la ruta es absoluta, si no, convertirla //export
const path = require('path');

function getAbsolutePath(fileName) {
    let absolutePath;
    if (path.isAbsolute(fileName)) {
      //Es absoluta
      absolutePath = fileName;
    } else {
      //No es absoluta
      absolutePath =  path.resolve(fileName);
      }
    return absolutePath;
  }

module.exports.getAbsolutePath = getAbsolutePath;