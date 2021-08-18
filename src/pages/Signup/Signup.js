const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
	let error = {};

	// Convert empty fields to an empty string so we can use validator functions
	data.name = !isEmpty(data.name) ? data.name : "";
	data.email = !isEmpty(data.email) ? data.email : "";
	data.password = !isEmpty(data.password) ? data.password : "";
	data.passwordValid = !isEmpty(data.passwordValid) ? data.passwordValid : "";

	// Checks name if valid
	if (Validator.isEmpty(data.name)) {
		error.name = "Name field is required";
	}

	// Checks email if valid
	if (Validator.isEmpty(data.email)) {
		error.email = "Email field is required";
	} else if (!Validator.isEmail(data.email)) {
		error.email = "Email is invalid";
	}

	// Checks password if valid
	if (Validator.isEmpty(data.password)) {
		error.password = "Password field is required";
	}

	if (Validator.isEmpty(data.passwordValid)) {
		error.passwordValid = "Confirm password field is required";
	}

	if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
		error.password = "Password must be at least 6 characters";
	}

	if (!Validator.equals(data.password, data.passwordValid)) {
		error.passwordValid = "Passwords must match";
	}

	return {
		error,
		isValid: isEmpty(error)
	};
};