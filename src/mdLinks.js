const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');

function mdLinks(){
  //Ingresar ruta
  const fileName =  process.argv[2];
  console.log('Ruta ingresada ==> ' + process.argv[2]);

   let absolutePath = getAbsolutePath(fileName);
  console.log('Ruta absoluta ==> ' + absolutePath);

  let pathType = getPathType(absolutePath);
  console.log(pathType);

  if (pathType == true) {
    //readContentDir(absolutePath);
    console.log('*** Archivos .md *** ' + (readContentDir(absolutePath)));
    readContentDir(absolutePath).forEach(fileMd => {
      console.log('*** Contenido del archivo ' + fileMd + readContentFile(fileMd));
      //readContentFile(fileMd);
      });
  } else {
    readContentFile(absolutePath);
    console.log('*** Contenido *** ' );
  }
}
  
//Identificar si la ruta es absoluta, si no, convertirla
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

// Identificar si la ruta es archivo o directorio
function getPathType(getAbsolutePath) {
  //Si es carpeta
  let isDirectory
  if (fs.statSync(getAbsolutePath).isDirectory()) {
    isDirectory = true;
    console.log('*** Es una carpeta *** ==> ' + isDirectory);
    //return isDirectory;
  } else {
    //es archivo
    isDirectory = false;
    console.log('*** Es una carpeta *** ==> ' + isDirectory);
    //return isDirectory;
    }
    return isDirectory;  
}

//Obtener lista de archivos en una carpeta
function readContentDir(getAbsolutePath) {
  let files = fs.readdirSync(getAbsolutePath);

  let filesMd = files.filter((file) => {
    //console.log('- ' + file + ' ==> ' + path.extname(file))
    return path.extname(file) === '.md'
  })
return (filesMd);
}

//Obtener el contenido de un archivo .md  
function readContentFile(getAbsolutePath) {

  fs.promises.readFile (readContentDir, 'utf-8')
  
  .then(function(result) {
    console.log(""+result);
  })
  .catch(function(error) {
     console.log(error);
  })
}  

  /*fs.readFile(getAbsolutePath, 'utf-8', (err, data) => {
    let result;
    if (err) {
      console.log(err);
      result = (err);
      return result;
    } else {
    // Obtener los links del contenido
      //console.log(data);
      result = (data);
      return result; 
    }
  }) 
  return result;*/
  
/*const  markdownLinkExtractor  =  require ( 'markdown-link-extractor' ); 
const  markdown  =  readFileSync ( fileMd ,  { codificación : 'utf8' } );
const  { enlaces }  =  markdownLinkExtractor ( markdown ); 
enlaces_forEach ( enlace  =>  consola . log ( enlace ) );*/

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
  
  //getAbsolutePath(fileName);