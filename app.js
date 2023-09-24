const {lectura,escritura}=require('./modulos/readWrite');
const suma = require('./modulos/suma');
const resta= require('./modulos/resta');
const multiplicacion=require('./modulos/multiplicacion');
const division=require('./modulos/division');
const eleccion = require('./modulos/eleccion');


const historial=lectura(); //leo el contenido del jason y lo parseo
let elegido=process.argv[2];

const registro={
    operacion: elegido,
    resultado: eleccion(elegido,+process.argv[3],+process.argv[4]),
    operando1:+process.argv[3], //aguegue que se guarden los elementos que se operan
    operando2:+process.argv[4]
};

historial.push(registro) // cargo el registro al array 
console.log(registro);// mustra el registro
escritura(historial) // escribo en el json

