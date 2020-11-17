function validateInput(input) {
	if (typeof input === 'string') {
		return false;
	} else {
		return true;
	}
}

console.log(validateInput(1));