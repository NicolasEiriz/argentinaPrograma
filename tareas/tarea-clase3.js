// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/*function preguntarNombreUsuario(nombreUsuario){
    return nombreUsuario
}


const miNombre = 'Nicolas'
let nombreUsuario = preguntarNombreUsuario(prompt('Cual es su nombre?'))

if(miNombre.toLowerCase() === nombreUsuario.toLowerCase()){
    console.log('Hola, Tocayo! Yo también me llamo ' + miNombre)
} else{
    console.log('Hola ' + nombreUsuario)
}*/





//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/*const miEdad = 30
let edadUsuario

function preguntarEdadUsuario(edadUsuario){
    return edadUsuario
}

edadUsuario = preguntarEdadUsuario(Number(prompt('Cual es su edad?')))

if(edadUsuario === miEdad){
    console.log('Tenemos la misma edad')
}
*/

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


// Constante en mayuscula porque el valor es definido por nosotros en el código

// function preguntarDni() {

//     const EDAD_MINIMA_PARA_ENTRAR = 18;
//     const RESPUESTA_SI = 'si'
//     const RESPUESTA_NO = 'no'


//     // Usamos el operador logico 'or' -> || porque si el usuario apreta escape como es un valor falso javascript va a tomar la segunda opcion que es '', y entonces el codigo toLowerCase no va a tirar un error, en caso que sea un null si lo haria
//     const usuarioTieneDocumento = (prompt('Tenes documento?') || '').toLowerCase()

//     if (usuarioTieneDocumento === RESPUESTA_SI) {
//         return true
//     }
//     else if (usuarioTieneDocumento === RESPUESTA_NO) {
//         alert('Anda a buscar tu dni+')
//     } else {
//         alert('No te entendi')
//         preguntarDni()
//     }
//     return false
// }

// preguntarDni()

function foo(b) {
    const a = 10;
    return a + b + 11;
  }
  
  function bar(x) {
    const y = 3;
    return foo(x * y);
  }
  
  const baz = bar(7); // assigns 42 to baz

