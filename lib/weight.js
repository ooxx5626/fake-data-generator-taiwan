const fs = require('fs');

module.exports = class WeightGenerator {

	constructor() {
	}

	generate(area, totalNumber) {

		let result = '';
		if (area) {
			result = area.toString();
		}

		result = Math.floor(Math.random() * 120)+2;

		return result;
	}
}
