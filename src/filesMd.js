//Obtener lista de archivos en una carpeta
const fs = require('fs');
const path = require('path');

function readContentDir(getAbsolutePath) {
    let files = fs.readdirSync(getAbsolutePath);
  
    let filesMd = files.filter((file) => {
      return path.extname(file) === '.md'
    })
  return (filesMd);
  }

  module.exports.readContentDir = readContentDir;