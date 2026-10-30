const prompt = require("prompt-sync")();
let c1 = Number(prompt('c1:'))
let c2 = Number(prompt('c2:'))
let p1 = Number(prompt('p1:'))
let p2 = Number(prompt('p2:'))

if((p1*c1) == (p2*c2)){
    console.log('equilibrada')
}else if((p1*c1) > (p2*c2)){
    console.log('desce a esquerda')
}else if((p1*c1) < (p2*c2)){
    console.log('desce a direita')
}
