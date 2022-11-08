//const curso = require('./curso.json');

// console.log(curso);
// console.log( typeof curso);
// console.log(curso.title);
// console.log(curso.topics);

let infoCurso = {
  "title": "mipaquete",
  "version": "1.0.0",
  "description": "Mi primer paquete de Node.js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "topics": [ "JavaScript", "Node.js" ],  
  "author": "Pily Bernal",
  "license": "ISC"
}

// console.log(infoCurso);
//console.log(typeof infoCurso);

//Convertir un objeto de JS a formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);

// console.log(infoCursoJSON);
// console.log(typeof infoCursoJSON);
// console.log(infoCursoJSON.title);

//Cadena de caracteres	=>	Object
let infoCursoObjeto = JSON.parse(infoCursoJSON);

// console.log(infoCursoObjeto);
// console.log(typeof infoCursoObjeto);
console.log(infoCursoObjeto.title);
