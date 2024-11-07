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

En javascript tenemos un concepto que se llama *Variable Hoisting* eso significa 'Izar', esto quiere decir que Javascript, antes de ejecutar mi código hace una primera lectura, y lleva para arriba todas las variables declaradas con var y las funciones.

# Por ejemplo si yo escribo el siguiente codigo:

let juguete = 'rojo'

var saludo = 'hola'

var nombre = 'nicola'

## Javascript antes de ejecutarlo, va a realizar una pasada y hará lo siguiente:

var saludo;

var nombre;

let juguete = `rojo`

saludo = `hola`

nombre = `nicola`

Esto significa que yo puedo hacer un console.log de una variable que aun declare en esa linea de codigo, el console sera *undefined* porque aun no se le asigno un valor, pero como javascript hiza la declaracion, yo puedo acceder,


Esto *NO* sucede con let y const, por esos es recomendable su utilización en vez de var. Ya que no se permite acceder a la variable antes de ser asignada.


Si hay algún código que no entiendo, es muy útil utilizar en la consola de google crome los breakpoints del source, ahi se puede ver todo el contexto.

##### Como formatear el texto automaticamente>

Con `Ctrl Shift F` vscode me ajusta los espacios automaticamente para que quede visualmente mejor, me lo indenta.

En JS el operador  `!` ('not') es de negación y lo que hace es cambiar el valor booleano de una variable. Si tengo un `true`  me lo convierte en `false`. 

# Para que me serviria el operador '!'

Por ejemplo para chequear si un usuario esta o no logueado, yo tengo una variable que si esta logueado da true, entonces yo puedo hacer

if(!usuarioLogueado) => esto significa si usuario logueado es falso.