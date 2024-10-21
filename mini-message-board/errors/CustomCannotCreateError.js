
class CustomCannotCreateError extends Error {
	constructor(message) {
		super(message);
		this.statusCode = 500;
		// So the error is neat when stringified. NotFoundError: message instead of Error: message
    this.name = "CannotCreateError";
	}
}

module.exports = CustomCannotCreateError;
