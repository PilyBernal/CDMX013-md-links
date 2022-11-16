//import
const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');
const absolute = require('./absolute.js');
const type = require('./type.js');
const filesMd = require('./filesMd');
const content = require('./content.js');
const extractor = require('./extractor.js');
const validator = require('./validator.js');

function mdLinks(){
  //Ingresar ruta
  const fileName =  process.argv[2];
  console.log('Ruta ingresada ==> ' + process.argv[2]);

   let absolutePath = absolute.getAbsolutePath(fileName);
  console.log('Ruta absoluta ==> ' + absolutePath);

  let pathType = type.getPathType(absolutePath);

  if (pathType == true) {
    console.log('*** Archivos .md *** ' + (filesMd.readContentDir(absolutePath)));
    filesMd.readContentDir(absolutePath).forEach(fileMd => {
      console.log('*** Contenido del archivo ' + fileMd + ' ***' );
      //console.log(content.readContentFile(fileMd));
      //console.log(content.readContentFile(fileMd));
      //let contentFile = content.readContentFile(fileMd);
      console.log(content.readContentFile(fileMd));
    });
  } else {
      console.log('*** Contenido del archivo *** ' );
      //content.readContentFile(absolutePath);
      //let contentFile = content.readContentFile(absolutePath);
      //console.log(content.readContentFile(fileMd));
  }
//console.log(content);
extractor.extractMarckdownLinks(absolutePath);
//console.log(path.extname(extractor.extractMarckdownLinks(content).toString));

validator.validateLinks(extractor.extractMarckdownLinks(absolutePath));
}

mdLinks();



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