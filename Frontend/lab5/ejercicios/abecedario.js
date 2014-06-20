function Abecedario(){
 	this.alf = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 }

 Abecedario.prototype = {
 	constructor : Abecedario,
 	consonantes : function(){
 		var i = 0;
 		var cons = [];
 		for (i; i < this.alf.length; i++) {
 			if(this.alf[i] != "a" && this.alf[i] != "e" && this.alf[i] != "i" && this.alf[i] != "o" && this.alf[i] != "u"){
 				cons.push(this.alf[i]);
 			};
 		};
 		console.log(cons);
 	}
 }