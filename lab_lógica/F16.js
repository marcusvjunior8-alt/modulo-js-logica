const prompt = require("prompt-sync")();
let xicaras = Number(prompt('xicaras:'))
let ovos = Number(prompt('ovos:'))
let colher_leite = Number(prompt('colheres de leite:'))

let bolosFarinha = Math.floor(xicaras / 2)
let bolosOvos = Math.floor(ovos / 3)
let bolosLeite = Math.floor(colher_leite / 5)
let totalBolos = Math.min(bolosFarinha, bolosOvos, bolosLeite)

if(xicaras < 2 && ovos < 3 && colher_leite < 5){
    console.log('Ñ dá para fazer bolo')
}else{

    console.log(totalBolos)
}