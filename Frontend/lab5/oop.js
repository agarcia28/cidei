/* Programación Orienta a Objetos */

function Person(firstName, lastName, profession, genre, age, city){
	this.firstName = firstName;
	this.lastName = lastName;
	this.profession = profession;
	this.genre = genre;
	this.age = age;
	this.city = city;
	this.studies = [];
}

 function Animal(name, genre, age, species, numberZoo, zooName){
 	this.name = name;
 	this.genre = genre;
 	this.age = age;
 	this.species = species;
 	this.numberZoo = numberZoo;
 	this.zooName = zooName;
 }

 Person.prototype ={
 	constructor : Person,
 	getFirstName : function(){
 		console.log("El nombre de la persona es: " + this.firstName);
 	},
 	getLastName : function(){
 		console.log("El apellido de la persona es: " + this.lastName);
 	},
 	getProfession : function(){
 		console.log("La profesión de la persona es: " + this.profession);
 	},
 	getGenre : function(){
 		console.log("El genero de la persona es: " + this.genre);
 	},
 	getAge : function(){
 		console.log("La edad de la persona es: " + this.age);
 	},
 	getCity : function(){
 		console.log("La ciudad de la persona es: " + this.city);
 	},
 	getStudies : function(){
 		var i = 0;
 		for (i; i <= this.studies.length; i++){
 			console.log("Tiene estudios en: " + this.studies[i]);
 		}
 	}
 }

  Animal.prototype ={
 	constructor : Animal,
 	getName : function(){
 		console.log("El nombre del animal es: " + this.name);
 	},
 	getGenre : function(){
 		console.log("El genero del animal es: " + this.genre);
 	},
 	getAge : function(){
 		console.log("La edad del animal es: " + this.age);
 	},
 	getSpecies : function(){
 		console.log("La especie del animal es: " + this.species);
 	},
 	getNumberZoo : function(){
 		console.log("El número del zoologico es: " + this.numberZoo);
 	},
 	getZooName : function(){
 		console.log("El nombre del zoologico es: " + this.zooName);
 	} 
 }