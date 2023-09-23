function restar(...args) {
    if (args.length === 0) {
        return 0; 
    }
    const valorInicial = args[0];
    return args.slice(1).reduce((acum, element) => acum - element, valorInicial);
}
const argumentos = process.argv.slice(2).map(Number);
let resultado = restar(...argumentos);
console.log(resultado);

module.exports = { restar };
