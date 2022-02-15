// Módulo 01 - Laboratorio 2
// Ejercicio 1:

let nombre = prompt('Ingrese su primer nombre:');
let apellido = prompt('Ingrese su apellido');
let edad = prompt('Ingrese su edad:');

alert('El nombre del usuario es ' + nombre + ' ' + apellido + ' y su tiene ' + edad + ' años.');

// Ejercicio 2:

document.write('El nombre del usuario es ' + nombre + ' ' + apellido + '.');
document.write('<br>La edad del usuario es de ' + edad + ' años.');

// Ejercicio 3:

let sueldo = parseFloat(prompt('¿Cual es tu sueldo?'));
let bonus = parseFloat(prompt('¿Cuanto fue tu bonus de este mes?'));
let resultado = sueldo + bonus;

document.write('<h3>Ejercicio 3</h3>');
document.write('El resultado final de tu sueldo es ' + resultado);