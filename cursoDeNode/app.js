// const saludos = require('./saludos.js');

// const { saludar, saludarHolaMundo } = require('./saludos.js');

// console.log(saludar('Pily'));

// console.log(saludarHolaMundo());

/* console.log('¡Hola, mundo!');
console.warn('Ocurrió un error ...');
console.error(' ¡ Ocurrió un error ... ! ');
console.error(new Error(' ¡ Ocurrió un error ... ! ')); */

// console.log(process.env);

/* console.log(process.argv);
console.log(process.argv[2]);
console.log(process.argv[3]); */

/* for (let i = 2; i < process.argv.length; i++){
  console.log(process.argv[i]);
} */

// console.log(process.memoryUsage());

// const os = require('os');
// console.log(os.type());
// console.log(os.homedir());
// console.log(os.uptime());
// console.log(os.userInfo());

/* function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`);
} */
// mostrarTema('Node.js');
// setTimeout(mostrarTema, 3000, 'Node.js');

/* function sumar(a, b){
  console.log(a + b)
}
setTimeout(sumar, 3000, 10, 20); */

/* function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`);
}
console.log('Antes de setImmediate()')
setImmediate(mostrarTema, 'Node.js');
console.log('Después de setImmediate()'); */

/* function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`);
}
setInterval(mostrarTema, 1500, 'Node.js'); */
// Detener con CTRL + C 

/*function sumar(a, b){
  console.log(a + b)
}
setInterval(sumar, 1500, 3, 4);
// Detener*/

const fs = require('fs');

//Leer un archivo

console.log('Antes de leer el archivo...')

const archivo = fs.readFileSync('index.html', 'utf-8'//, (err, contenido) => {
  /*if (err) {
    //console.log(err);
    throw err; //se puede quitar else porque se detine la ejecución con throw
  } 
  console.log(contenido);
}*/)

console.log(archivo);

console.log('Después de leer el archivo...');

//Cambiar el nombre de un archivo
fs.renameSync('main.html', 'index.html'//, (err) => {
  /*if (err) {
    throw err;
  }
  console.log('Nombre cambiado exitosamente');
}*/);

console.log('Después de cambiar el nombre al archivo...')

//Agregar contenido al final de un archivo
fs.appendFileSync('main.html', '<p>Hola</p>', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo actualizado');
}); 

console.log('Después de agregar contenido al archivo...')

//Reemplazar todo el contenido del archivo
fs.writeFileSync('main.html', 'Contenido nuevo', (err) => {
  if (err) {
    throw err;
  }
  console.log('Contenido reemplazado exitosamente');
});

console.log('Después de reemplazar el contenido del archivo...');

//Eliminar archivos
fs.unlink('main.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo eliminado');
});

console.log('Después de eliminar el archivo...');