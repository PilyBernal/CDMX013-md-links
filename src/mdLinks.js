const fs = require('fs');
const path = require('path');

function mdLinks(){
  //Ingresar ruta
  const fileName =  process.argv[2];
  console.log('Ruta ingresada ==> ' + process.argv[2]);

  getAbsolutePath(fileName);
  console.log('Ruta absoluta ==> ' + getAbsolutePath);

  getPathType(getAbsolutePath);
  if (isDirectory == true) {
    console.log('Es carpeta? ');
    console.log(isDirectory)
    readContentDir(getAbsolutePath);
  } else {
    console.log('Es carpeta? ');
    console.log(isDirectory)
    readContentFile(getAbsolutePath);
  }
}

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
  //Si es carpeta
  let isDirectory
  if (fs.statSync(getAbsolutePath).isDirectory()) {
    console.log('*** Es una carpeta ***');
    isDirectory = true
  } else {
    //es archivo
    console.log('*** Es un archivio ***');
    isDirectory = false
    }
    return isDirectory;
}

//Obtener lista de archivos en una carpeta
function readContentDir(getAbsolutePath) {
  let files = fs.readdirSync(getAbsolutePath);

  let filesMd = files.filter((file) => {
    console.log('- ' + file + ' ==> ' + path.extname(file))
    return path.extname(file) === '.md'
  })
return (filesMd);
}

//Obtener el contenido de un archivo .md  
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

mdLinks();

/*console.log('Arreglo de archivos .md ' + filesMd);
  for (let i = 0; i<filesMd.length; i++) {
    readContentFile(path.resolve(filesMd[i]));
    console.log(i, filesMd);
  }
  //Usar .toString  
  return (readContentFile(filesMd));     
}*/    

/*let regex = /.md/;
console.log(regex.test(filesMd));
console.log(regex.exec(filesMd));*/

//Intento de recursión
  /*
  console.log(filesWithoutExtension);

  readContentDir(filesWithoutExtension);*/
  //for (let j = 0; j<file.length; j++)
  
  //getAbsolutePath(fileName);*/
  //