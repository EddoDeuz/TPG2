const {lectura,escritura}=require('./modulos/readWrite');
const resta=require('./modulos/resta');
const division= require('./modulos/division')

const historial=lectura(); // leo el contenido del jason y lo parseo

const registro={
    operacion: 'division',
    resultado: division(+process.argv[2],+process.argv[3])
};

console.log(division(+process.argv[2],+process.argv[3]));
historial.push(registro) // cargo el registro al array 
console.log(historial);// mustra el registro
escritura(historial) // escribo en el json

