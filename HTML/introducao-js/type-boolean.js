const value1 = true;
const value2 = false;


console.log(value1 === value2);

//Thrusty / Falsy > variáveis vazias ou com valor 0, se submeter a um teste lógico
// se tornaram um tipo boolean (thrusty/falsy)

if (value1) {
    console.log('verdadeiro')
} else {
    console.log('falso')
}


const resultado = value1 ? 'verdadeiro' : 'falso';