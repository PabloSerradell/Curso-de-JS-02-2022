// Módulo 01 - Laboratorio 1
// Ejercicio 1:
console.log("Ejercicio 1");

var x = 10;
var y = 20;

/* Test A */
x = x + x + 1;
y = y - y - x;

console.log("Test A");
console.log("Valor de x: " + x);
console.log("Valor de y: " + y);

/* Test B */
x = 10;
y = 20;

x = (x - y) + 4;
y = 4 + (y + 5);

console.log("Test B");
console.log("Valor de x: " + x);
console.log("Valor de y: " + y);

/* Test C */
x = 10;
y = 20;

x = x * 2 - 4;
y = 4 - y * 2;

console.log("Test C");
console.log("Valor de x: " + x);
console.log("Valor de y: " + y);

/* Test D */
x = 10;
y = 20;

x = (20 - x) / y;
y = x + 2 / y;

console.log("Test D");
console.log("Valor de x: " + x);
console.log("Valor de y: " + y);

/* Test E */
x = 10;
y = 20;

x = ((1 - x) * (y / 8)) * 4 * 0;
y = (x + 3) / x;

console.log("Test E");
console.log("Valor de x: " + x);
console.log("Valor de y: " + y);


//  -- -- -- -- -- -- -- -- -- -- -- -- -- -- Ejercicio 2:
console.log("")
console.log("Ejercicio 2");

var palabra1 = "hola";
var palabra2 = "chau";
var frase = "";

/* Test A */
frase = palabra1 + " mundo";

console.log("Test A");
console.log("Valor de 'palabra1': " + palabra1);
console.log("Valor de 'palabra2': " + palabra2);
console.log("Valor de 'frase': " + frase);

/* Test B */
var palabra1 = "hola";
var palabra2 = "chau";
var frase = "";

palabra1 = palabra2;
palabra2 = palabra1;
frase = "frase nueva";

console.log("Test B");
console.log("Valor de 'palabra1': " + palabra1);
console.log("Valor de 'palabra2': " + palabra2);
console.log("Valor de 'frase': " + frase);

/* Test C */
var palabra1 = "hola";
var palabra2 = "chau";
var frase = "";

palabra1 = palabra1 + " " + palabra2;
palabra2 = palabra2 + " " + palabra2;
frase = palabra2 + " y " + palabra2;

console.log("Test C");
console.log("Valor de 'palabra1': " + palabra1);
console.log("Valor de 'palabra2': " + palabra2);
console.log("Valor de 'frase': " + frase);

/* Test D */
var palabra1 = "hola";
var palabra2 = "chau";
var frase = "";

palabra1 = "1+1";
palabra2 = "2/0";
frase = palabra1 + "=2";

console.log("Test D");
console.log("Valor de 'palabra1': " + palabra1);
console.log("Valor de 'palabra2': " + palabra2);
console.log("Valor de 'frase': " + frase);