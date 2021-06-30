function isPrime(value) {

	if (value < 2 || value % 2 === 0 && value !== 2) {
		return console.log("составное");
	}
	
	max = Math.round(Math.sqrt(value)) + 1;
	
	
	for (i = 3; i < max; i += 2) {
		if (value % i === 0) {
			return console.log("составное");
		}
	}
	
	return console.log("простое");
}

isPrime(5);