/* Objetos y funciones */

var myObject = new Object();

var myObject = {};

//Los Arrays tambien son objetos
var lottery = [4,6,7,7,7,8];

profile = {
	firstName : "Ana",
	lastName : "Garcia",
	phone : "1111111"
}

console.log(profile.firstName);
console.log(profile["lastName"]);

// Iterando sobre un objeto {}
for(key in profile){
	console.log(profile[key]);
}

/* Funciones */
function test(){
	console.log("Hola");
}

test();

chao = function(){
	console.log("chao");
}

chao();