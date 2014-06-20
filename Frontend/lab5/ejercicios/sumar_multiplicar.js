 
 function SumarMultiplicar(){
 	this.ar = [1,2,4,10,50];
 }

 SumarMultiplicar.prototype = {
 	constructor : SumarMultiplicar,
 	sumar : function(){
 		var i = 0;
 		var sum = 0;
 		for (i; i < this.ar.length; i++) {
 			sum = sum + this.ar[i];
 		};
 		console.log("La suma es: " + sum);
 	},
 	multiplicar : function(){
 		var i = 0;
 		var mul = 1;
 		for (i; i < this.ar.length; i++) {
 			mul = mul * this.ar[i];
 		};
 		console.log("La multiplicacion es: " + mul);
 	}
 }