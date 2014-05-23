/* Variables y elemantos del tipo Booleano */

var verdadero = true;
var falso = false;

/* Elementos de comparación */

/* igualdad (==) */
console.log(1 == 1);
//Corrección de tipos
console.log("1" == 1); // Convierte "1" a 1
console.log(1 == true); 
console.log(0 == false);
console.log("" == 0); // Convierte "" a 0
console.log(0 == ""); // Convierte "" a 0
console.log("    " == 0);
// Declarar un objeto
var x = {};
var y = x;
// Comparo los objeto
console.log("La comparación de los objetos es: " + (x == y));

/* igualdad estricta (===) */
console.log("1" === 1);
console.log("" === 0);
// Declarar un objeto
var w = {};
var z = x;
// Comparo los objeto
console.log("La comparación de los objetos de manera estricta es: " + (w === z));

// Comparación no estricta de no igual (!=)
console.log("" != 0);

// Comparación estricta de no igual (!==)
console.log("" !== 0);

/* Flujos logicos */
console.log("-------Flujos logicos--------");
// Operador tipo AND
console.log("Tabla basica del AND");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// Operador tipo OR
console.log("Tabla basica del OR");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);