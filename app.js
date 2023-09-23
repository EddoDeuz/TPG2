const {lectura,escritura}=require('./modulos/readWrite');
const resta=require('./modulos/resta');

const historial=lectura(); // leo el contenido del jason y lo parseo

const registro={
    operacion: 'resta',
    resultado: resta(+process.argv[2],+process.argv[3])
};

console.log((+process.argv[2],+process.argv[3]));
historial.push(registro) // cargo el registro al array 
console.log(historial);// mustra el registro
escritura(historial) // escribo en el json

