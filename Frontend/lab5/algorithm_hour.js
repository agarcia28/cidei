var d, minutes, time, hours, message;

// Utiliza el objeto Date de JS
d = new Date();

hours = d.getHours();
minutes = d.getMinutes();

console.log(typeof(hours));
console.log(typeof(minutes));

if(hours < 10){
	hours = "0" + hours; // Convierto en string "hours"
} else{
	hours = hours.toString();
}

console.log(typeof(hours));

if(minutes < 10){
	minutes = "0" + minutes;
} else{
	minutes = minutes.toString();
}

console.log(typeof(minutes));

time = Number(hours + minutes);

console.log(typeof(time));

if(time >= 0000 && time < 1200){
	console.log("Buenos días");
} else if(time >= 1200 && time< 1700){
	console.log("Buenos tardes");
} else if(time >= 1700 && time < 2359){
	console.log("Buenos noches");
}