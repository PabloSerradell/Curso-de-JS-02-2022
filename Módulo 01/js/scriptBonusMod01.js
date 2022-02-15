// Módulo 01 - Bonus
// Laboratorio 1:

// Suma:
let num1 = parseFloat(prompt('Realizaremos una suma, ingrese el primer número a sumar:'));
let num2 = parseFloat(prompt('Ingrese el segundo número a sumar:'));

alert('Luego: ' + num1 + ' + ' + num2 + ' = ' + (num1+num2));

// Resta:
num1 = parseFloat(prompt('Ahora realizaremos una resta, ingrese el primer número:'));
num2 = parseFloat(prompt('Ingrese el segundo número:'));

alert('Luego: ' + num1 + ' - ' + num2 + ' = ' + (num1-num2));

// Multiplicación:
num1 = parseFloat(prompt('Ahora realizaremos una multiplicación, ingrese el primer número:'));
num2 = parseFloat(prompt('Ingrese el segundo número:'));

alert('Luego: ' + num1 + ' * ' + num2 + ' = ' + (num1*num2));



//  -- -- -- -- -- -- -- Laboratorio 2 -- -- -- -- -- -- -- :

num1 = parseFloat(prompt('Ahora calcularemos el promedio de notas entre 10 alumnos, ingrese la primer nota:'));
num2 = parseFloat(prompt('Ingrese la segunda nota:'));
let num3 = parseFloat(prompt('Ingrese la tercer nota:'));
let num4 = parseFloat(prompt('Ingrese la cuarta nota:'));
let num5 = parseFloat(prompt('Ingrese la quinta nota:'));
let num6 = parseFloat(prompt('Ingrese la sexta nota:'));
let num7 = parseFloat(prompt('Ingrese la septima nota:'));
let num8 = parseFloat(prompt('Ingrese la octaba nota:'));
let num9 = parseFloat(prompt('Ingrese la novena nota:'));
let num10 = parseFloat(prompt('Ingrese la décima nota:'));

alert('Luego, el promedio es: ' + ((num1+num2+num3+num4+num5+num6+num7+num8+num9+num10)/10));



//  -- -- -- -- -- -- -- Laboratorio 3 -- -- -- -- -- -- -- :

let dist = parseFloat(prompt('Ingrese la distancia recorrida en km:'));

alert('El automóvil iba a una velocidad de ' + ((dist*1000)/3) + 'metros/seg');



//  -- -- -- -- -- -- -- Laboratorio 4 -- -- -- -- -- -- -- :

let edad1 = parseInt(prompt('Ingrese la primera edad de los alumnos aplazados:'));
let edad2 = parseInt(prompt('Ingrese la segunda edad de los alumnos aplazados:'));
let edad3 = parseInt(prompt('Ingrese la tercera edad de los alumnos aplazados:'));
let edad4 = parseInt(prompt('Ingrese la cuarta edad de los alumnos aplazados:'));

alert('La suma de las edades es ' + (edad1+edad2+edad3+edad4));
alert('El promedio de estas edades es ' + ((edad1+edad2+edad3+edad4)/4));



//  -- -- -- -- -- -- -- Laboratorio 5 -- -- -- -- -- -- -- :

let mes = parseInt(prompt('Ingrese el mes del cual quiere saber el consumo de azucar(1 a 6):'));

switch (mes) {
    case 1:
        alert('El consumo de azucar en el mes 1 fue de 15.000 kg.');
    break;
    case 2:
        alert('El consumo de azucar en el mes 2 fue de 30.000 kg.');
    break;
    case 3:
        alert('El consumo de azucar en el mes 3 fue de 45.000 kg.');
    break;
    case 4:
        alert('El consumo de azucar en el mes 4 fue de 60.000 kg.');
    break;
    case 5:
        alert('El consumo de azucar en el mes 5 fue de 75.000 kg.');
    break;
    case 6:
        alert('El consumo de azucar en el mes 6 fue de 90.000 kg.');
    break;
    default:
        alert('Valor inválido.');
}