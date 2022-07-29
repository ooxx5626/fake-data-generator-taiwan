const FakeDataGenerator = require('./index');
const fs = require('fs');

let generator = new FakeDataGenerator();

// 產生一百組假資料
const num = 1000;
let csvFile = "fakeData.csv";
// fs.unlink(csvFile)
fs.appendFileSync(csvFile, "Name^|mobile^|id^|address^|weight^|high|garbage\n");

for (let i = 0; i < num; i++) {
	let name = generator.Name.generate();
	let mobile = generator.Mobile.generate(0, 10);
	let id = generator.IDNumber.generate();
	let address = generator.Address.generate();
	let weight = generator.Weight.generate();
	let high = generator.High.generate();
	let garbage = Math.random() * 100+1000;
	fs.appendFileSync(csvFile, `${name}^|${mobile}^|${id}^|${address}^|${weight}^|${high}^|${garbage}\n`);
}
