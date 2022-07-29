const fs = require('fs');

module.exports = class HighGenerator {

	constructor() {
	}

	generate(area, totalNumber) {

		let result = '';
		if (area) {
			result = area.toString();
		}

		result = Math.floor(Math.random() * 60)+140;

		return result;
	}
}
