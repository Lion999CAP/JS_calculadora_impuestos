/*var es una variable local o global de una funcion*/

var nombre="Leandro"
var apellido="Lara"
var cedula="0202391637"
var ingresos=24556.67
var gastos=10000
var declarado=true

/*const es una variable local o global de una funcion que no puede ser alterada*/

const preiodo=2023

/*Mis datos */
var datosCompletos=nombre + " " +apellido;
console.log(datosCompletos)
/*Mis ingresos */
var baseImponible = ingresos-gastos;
console.log("Base de impuestos: "+baseImponible)

console.log("\n")

/*Datos segunda parte */

var nombre2="Andrea"
var nombre3='Andrea'
var sueldo=10000
var vicios=-34.6
var internet=true
var auto=false
var actividades=['leer', 'nadar', 'escribir']
var datos={
"nombre": "Luis",
"edad": 34,
"ciudad":"Quito"
}

var datos2= nombre2 +"Es igual a: "+ nombre3
console.log(datos2)

/*Sentencias de verificación */
var respuesta
if(internet==true){
    respuesta="Si tiene"
}else{
    respuesta="No tiene"
}

var respuesta2
if(auto==true){
    respuesta2="Si tiene"
}else{
    respuesta2="No tiene"
}

var base2= "Su sueldo: "+sueldo+ "\nGastos inutiles: "+vicios+"\nCuenta con internet: "+respuesta+ "\nCuenta con auto: "+respuesta2
          +"\nActividades que realiza: "+actividades
        
console.log(base2)

console.log("Datos personales "+Object.values(datos))


