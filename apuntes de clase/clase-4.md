# Clase 4

Una buena practica es cuando declaro una variablle tipo `const` y yo en el código le asigno el valor es nombrarla en mayuscula y cuando el código lo va a ingresar el usuario ponerla en minuscula, veamos:

`const MI_NOMBRE = nicolas`

`const nombre_usuario = prompt('Ingrese su nombre)`

El tipo de dato *Null*, me indica que está `vacio`. 

Por ejemplo si yo hago un prompt al usuario y este cuando le aparece el recuadro en el navegador apreta la tecla **escape**  me va a dar como valor null, si yo no quiero que la variable quede asignada con el valor *Null* lo que tengo que hacer es lo siguiente:

`const nombre_usuario = (prompt('Ingrese su nombre)|| "")`

Con esto me aseguro que si el usuario apreta escape me asignara a la variable "", que es un tipo de dato falsy pero no es null.

Como sabemos los tipos de datos `string` tienen metodos, uno que puede ser util es el metodo `trim()` el cual nos quita los espacios que tiene un string veamos:

## usuario = 'N    i   co la'

### usuario.trim()

## usuario = 'Nicola'

Esto puede ser util cuando requerimos datos al usuario y no sabemos si puso espacios o no y queremos suprimir en caso que lo haya.



### Booleanos

Para comparar a veces datos hay que tener en cuenta que el operador lógico `||` me devuelve el valor de la izquierda si es *true*, si esté es *false* me devuelve si o si el segundo valor sin importar si es *true* o *false*. Veamos,

`"hola" || 0`=> `hola`

`"" || 'hola` => `hola`

`0 || false` => `false`

 Una buena practica es si voy a preguntarle la edad al usuario con un prompt, *declare ese string en una constante* y para que el dia de mañana si cambio el texto se actualice automaticamente, por ejemplo:

 `const TEXTO_PREGUNTA_EDAD = 'Que edad tenes'`

 entonces quedaria

 let edadUsuario = Number(prompt(`TEXTO_PREGUNTA_EDAD`))

 Otra buena practica es cuando hago una comparación entre dos variables ***ponga siempre primero un string a una variable***, asi si, por error pongo un `= en vez de ===`, no reasigne la variable, ya que un string no se puede reasignar, daria un error y eso me alertaria de que hay un problema:

 **if**(`fabricio`=== *MI_NOMBRE*) -> esta bien

 **if**(*MI_NOMBRE* === `fabricio` ) -> no es aconsejable ya que si pongo un solo '=' estaria asignado el valor 'fabricio' a la variable *MI_NOMBRE*


 ## Cosas raras de Javascript

 La función `Number('')` me va a dar como resultado 0 y no NaN como uno esperaria, hay que tenerlo en cuenta, porque si usamos la funcion Number a prompt de un usuario y este contesta con un string vacio me lo va a convertir en 0.

 
 ### Funciones y return

 Cuando uso `return` en una función está se termina, es una herramienta para detener una función.

 El tema con `return` es que tengo que poner que retorna, por ejemplo en este caso:



function preguntarDni() {

 const EDAD_MINIMA_PARA_ENTRAR = 18;
 const RESPUESTA_SI = 'si'
 const RESPUESTA_NO = 'no'


 const usuarioTieneDocumento = (prompt('Tenes documento?') || '').toLowerCase()

 if (usuarioTieneDocumento === RESPUESTA_SI) {
     return true
     }
    else if (usuarioTieneDocumento === RESPUESTA_NO) {
        alert('Anda a buscar tu dni+')}
    else {
      alert('No te entendi')
      *preguntarDni()* -> en este caso si yo no le `return` antes de llamar la función preguntarDni me va a dar undefined, si yo quiero obtener el resultado de la funcion que es un *true* o *false* dependiendo que conteste el usuario, necesito ademas de llamarla por `return`, seria **return preguntarDni()**
}
}



preguntarDni()

 Siempre hay que correr el código en el debugger para entender que está pasando, porque es facil confundirse.

## Arrays

Cuando manipulamos arrays hay que tener en cuenta que si declaro un *array* con `const` voy a poder manipular accediendo a sus indices pero no lo puedo redeclarar, ya que me va a dar error:

const array = [1,2,3] -> declaro un array con const

array[0] = 2 -> esto si se puede, ya que no estoy redeclarando el array estoy modificando uno de sus indices, ahora este sera [2,2,3]

array = [2,2,3] -> esto *no* se puede, no me lo va  a permitir el programa ya que si declare el array con `const`no puedo volver a redeclararlo


#### Siempre ver el código en el debugger
