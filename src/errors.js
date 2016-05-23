'use strict';

var errors = [];

module.exports = {
	addError: function (err) {
		errors.push(err);
	},
	getErrors: function () {
		return errors.slice(0);
	},
	formatError: function (err) {
		return {
			name: err.name,
			message: err.message,
			stack: err.stack
		};
	},
	logError: function (err, log) {
		log = log || console.log;
		log(err.name);
		log(err.message);
		log(err.stack);
	},
	logAllErrors: function (log) {
		log = log || console.log;
		var errors = this.getErrors();
		for (var i in errors) {
			this.logError(errors[i], log);
		}
	}
};
