console.log('Olá, Mundo!!')
let a = 10;
const b = 20;
/*comparação comum*/
console.log(a == b)
/*comparação com tipos diferentes*/
const c = "10";
console.log(a == c)
/*comparação comum E de tipo*/
console.log(a === c)

for (a = 1; a <= 10; a++)  {
    console.log('tabuada do ' + a)
    for (let i = 0; i <= 10; i++) {
        console.log(`${i} X ${a} = ${i*a}`)
    }
}
