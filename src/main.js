const fs = require('fs');
const path = require('path');

//Ingresar ruta
const fileName =  process.argv[2]; // '../cursoDeNode/index.html'
console.log('Ruta ingresada ==> ' + process.argv[2]);

getAbsolutePath(fileName);
console.log('Ruta absoluta ==> ' + getAbsolutePath);

getPathType(getAbsolutePath);

//Identificar si la ruta es absoluta, si no, convertirla
function getAbsolutePath(fileName) {
  //let absolutePath
  if (path.isAbsolute(fileName)) {
    //es absoluta
    getAbsolutePath = fileName;
  } else {
    //no es absoluta
    getAbsolutePath =  path.resolve(fileName);
    }
    return getAbsolutePath;
}

// Identificar si la ruta es archivo o directorio
function getPathType(getAbsolutePath) {
  //si es folder
   if (fs.statSync(getAbsolutePath).isDirectory()) {
    console.log('*** Es una carpeta ***');
    let isDirectory = true
    readContentDir(getAbsolutePath);
    return isDirectory;
  } else {
    //es archivo
    console.log('*** Es un archivio ***');
    isDirectory = false
    readContentFile(getAbsolutePath);
    return isDirectory;
  }
}

//Leer archivos
function readContentDir(getAbsolutePath) {
  let files = fs.readdirSync(getAbsolutePath);
  console.log(files);
  return files;
}

function readContentFile(getAbsolutePath) {
  fs.readFile(getAbsolutePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
    // Obtener los links del contenido
      console.log(data);
      return data; 
    }
  }) 
}
    
  