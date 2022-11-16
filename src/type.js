// Identificar si la ruta es archivo o directorio
const fs = require('fs');

function getPathType(getAbsolutePath) {
    //Si es carpeta
    let isDirectory
    if (fs.statSync(getAbsolutePath).isDirectory()) {
      isDirectory = true;
      console.log('*** Es una carpeta? *** ==> ' + isDirectory);
    } else {
      //Si es archivo
      isDirectory = false;
      console.log('*** Es una carpeta? *** ==> ' + isDirectory);
      }
      return isDirectory;  
  }

module.exports.getPathType = getPathType;  