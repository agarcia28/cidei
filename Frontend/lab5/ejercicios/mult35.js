function Multiplos35(){
 	
 }

 Multiplos35.prototype = {
 	constructor : Multiplos35,
 	multiplos : function(){
 		var i = 1;
 		var mult = [];
 		for (i; i <= 100; i++) {
 			if(i % 3 === 0 && i % 5 !== 0){
 				mult.push("Fizz");
 			} else if (i % 5 === 0 && i % 3 !== 0){
 				mult.push("Buzz");
 			} else if (i % 5 === 0 && i % 3 === 0){
 				mult.push("FizzBuzz");
 			} else {
 				mult.push(i);
 			}
 		};
 		console.log(mult);
 	}
 }