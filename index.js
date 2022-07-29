
const NameGenerator = require('./lib/name');
const MobileGenerator = require('./lib/mobile');
const IDNumberGenerator = require('./lib/id_number');
const AddressGenerator = require('./lib/address');
const WeightGenerator = require('./lib/weight');
const HighGenerator = require('./lib/high');


module.exports = class DataGenerator {

	constructor() {
		this.Name = new NameGenerator();
		this.Mobile = new MobileGenerator();
		this.IDNumber = new IDNumberGenerator();
		this.Address = new AddressGenerator();
		this.Weight = new WeightGenerator();
		this.High = new HighGenerator();
	}
};
