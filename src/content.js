//Obtener el contenido de un archivo .md 
const fs = require('fs');
const path = require('path');

function readContentFile(absolutePath) {

    if (path.extname(absolutePath) === '.md') {
      fs.promises.readFile (absolutePath, 'utf-8')
    
      .then(function(result) {
        console.log("* * * " + result);
      })
      .catch(function(error) {
        console.log('*** Error *** ' + error);
      })
    } else {
      console.log('*** No es un archivo .md ***');
    }
    
    return path.extname(absolutePath) === '.md';
  }  

module.exports.readContentFile = readContentFile;  