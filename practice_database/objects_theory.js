class Person {
	constructor(firstName, personAge) {
		this.name = firstName;
		this.age = personAge;
		this.job = 'Front-end';
	}

	sayHello() {
		console.log(this.name + ' say hello');
	}

	print() {
		console.log(JSON.stringify(this));
	}
}

const personOne = new Person('ALice -', 19);
const personTwo = new Person('Juli -', 21);

// personOne.print();
// personTwo.print();

const person = {
	name: 'Kasim',
	age: 23,
	job: 'Front-End',
	hobbies: ['Gym', 'Cars', 'Velosiped', 'Nature'],
	info: {
		hasWife: false,
		weight: 67,
	},
	sayHello() {
		console.log('Hello from person');
	},
};

function printObject(object = {}) {
	// 4 - Метода получение ключа и его значение

	// 1 - Способ:
	// for (let key in object) {
	// 	console.log(key, object[key]);
	// }

	// 2 - Способ:
	// for (let key in object) {
	// 	if (object.hasOwnProperty(key)) {
	// 		console.log(key, object[key]);
	// 	}
	// }

	// 3 - Способ:
	// for (let key in object) {
	// 	if (typeof object[key] !== 'function') {
	// 		console.log(key, object[key]);
	// 	}
	// }

	// 4 - Самый современный способ:
	Object.keys(object).forEach((key) => {
		if (typeof object[key] !== 'function') {
			console.log(key, object[key]);
		}
	});
}

printObject(person);
