# Clase 3

Una buena practica es empezar las funciones con infinitivo, por ejemplo funcion 'calcular' y no 'calculo'.


Las variables siempre es recomendable declarar las variables con *CONST*, se aconseja que si yo declaro una variable que sé que su valor no se va a modificar la declare de esa forma

## Consejos a la hora de escribir funciones

Ser super explicitos a la hora de declarar funciones, tengo que dejar en claro cual es su funcion y esa función tiene que tener el principio de responsabilidad, es decir no debe depender de factores externos. Por ejemplo

*Las funciones deben seguir el principio de responsabilidad*


function calcularSalarioMensual(salarioAnual){
    const mesesEnUnAnio = 12
    return salarioAnual / mesesEnUnAnio
}

aca vemos que la función utiliza una variable (mesesEnUnAnio) dentro de ella, con lo cual pueda responder por si sola, una mala practica seria escribir esa variable afuera de dicha función

*Otros ejemplos*

function calcularSalarioAnual(salarioMensual){
    const mesesEnUnAnio = 12
    return salarioMensual * mesesEnUnAnio
}

function calcularSalarioSemanal(salarioAnual){
    const semanasEnUnAnio = 52
    return salarioAnual / semanasEnUnAnio
}

function calcularSalarioDiario(salarioAnual){
    const diasEnUnAnio = 365
    return salarioAnual / diasEnUnAnio
}

#### Fijarse como llama la función

const salarioMensual = Number(prompt('Cual es tu salario mensual?'))
console.log(calcularSalarioMensual(salarioMensual))

Primeramente declara una variable con un prompt para pedirle al usuario la información deseada y luego llama a la función y inserta como parametro la variable declarada previamente

##### Scope (porque no es aconsejable declarar variables de forma global)