/* Arrays */
var myArray = new Array();

var myArray = [];

myArray = [1, 3, 3, 4, 45, 6, 5, 56, 6, 6];

console.log(myArray[0]);

// COn push se agrega un elemento al final
myArray.push(10);

console.log(myArray);

myArray.push(1223);

console.log(myArray);

myArray.push("Hola cidei");

console.log(myArray);

//Pop elimina el ultimo elemento del Array

myArray.pop();

console.log(myArray);

// inverse invierte el orden del Array

myArray.reverse();

console.log(myArray);

// shift elimina el primer elemento

myArray.shift();

console.log(myArray);

// sort, organiza el Array

myArray.sort();

console.log(myArray);

var mySecondArray = ["Hola mundo", "Strings", "cidei"];

mySecondArray.sort();

console.log(mySecondArray);

// splice

var tasks = ["Hola mundo", "Hola cidei", "Chao"];

console.log(tasks);

tasks.splice(1, 1, "Chao cidei");

console.log(tasks);