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

/*function tieneDocumento(respuesta){
    if(respuesta === 'si'){
        return true
    } else if(respuesta === 'no'){
        return false
    } else{
        return 'No ha ingresado si o no'
    }
}

let documentoUsuario = tieneDocumento(prompt('Tiene documento? responda si o no').toLowerCase())

if(documentoUsuario){

    let edadUsuario = Number(prompt('Que edad tiene?'))
    
    if(edadUsuario >= 18){
        console.log('Puede entrar al bar')
    } else if(edadUsuario < 18){
        console.log('Usted no puede ingresar al bar por ser menor de edad')
    }
} else if(!documentoUsuario){
    console.log('Usted no puede entrar al bar por no tener documento')
}else(console.log('No entiendo su respuesta'))*/