const fs=require('fs');

function lectura(){
    let aux = fs.readFileSync('./data/registro.json','utf-8')
    return JSON.parse(aux);
}

function escritura(registro){
    let aux=JSON.stringify(registro);
    fs.writeFileSync('./data/registro.json',aux);
}

module.exports={
    lectura,
    escritura
};