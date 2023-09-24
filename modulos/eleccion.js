const suma =require('./suma');
const resta=require('./resta');
const multiplicacion=require('./multiplicacion');
const division=require('./division');

function eleccion(operation,a,b){
    switch (operation.toLocaleLowerCase()) {
        case 'suma':
            return suma(a,b);
        case 'resta':
            return resta(a,b);
        case 'multiplicacion':
            return multiplicacion(a,b);
        case 'division':
            return division(a,b);
            default: null;
    }
}
module.exports=eleccion;