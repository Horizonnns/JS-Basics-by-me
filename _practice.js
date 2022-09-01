// Практика

//==============================================

// Поиск по имени из массива
const people = [
	{ name: 'Kasim', age: 23 },
	{ name: 'Alice', age: 19 },
	{ name: 'Mike', age: 26 },
];

const res = people.find((person) => (person.name = 'Alice'));

console.log(res);

//==============================================

// Избавление от false значений
function log(args) {
	console.log(args);
}

const values = [1, null, true, false, undefined, '', 0, 1, 2, 'a', 'Kasim', NaN];

log(values.filter((item) => item));

//==============================================

// Задачки из собесов - ответ: (5,5,5,5,5)
for (var count = 0; count < 5; count++) {
	setTimeout(() => console.log(count));
}

//==============================================

// Задачки из собесов - ответ: (0,1,2,3,4)
for (let count = 0; count < 5; count++) {
	setTimeout(() => console.log(count));
}

//==============================================

// Задачки из собесов - ответ: (4шт - index 4)
const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
	setTimeout(function () {
		console.log('index ' + i);
	}, 2000);
}

// Задачки из собесов - ответ: (4шт - index 1, 2, 3, 4)
const array2 = [1, 2, 3, 4];

for (let i = 0; i < array2.length; i++) {
	setTimeout(function () {
		console.log('index ' + i);
	}, 2000);
}

// Задачки из собесов - ответ: (undefined, 2)
function test() {
	console.log(a);

	var a = 2;
	console.log(a);
}

test();

// Задачки из собесов - ответ: (10)
const a1 = { x: 1, y: 2 };
const b = a1;

b.x = 10;
console.log(a1.x);

// Задачки из собесов - ответ: (1.true, 2.false)
// 1).
const a2 = {};
const b2 = a2;
console.log(a2 === b2);

// 2).
const c = {};
const d = {};
console.log(c === d);

// Задачки из собесов - ответ: (false)
console.log(0.1 + 0.2 === 0.3);

// Конструкция очишающая *маты*
const text = `Привет, я мат1 как рад тебя видеть, мат2 как давно тебя не было видно. Ты мат1 какая красивая. Мат2 я рад.`;

const restr = ['мат1', 'мат2'];

function clear(word) {
	return !restr.includes(word.toLowerCase());
}

const clean = text.split(' ').filter(clear).join(' ');

console.log(clean);

// Подсчет суммы товаров в корзине
const card = [
	{ title: 'Apple', price: 49 },
	{ title: 'Banana', price: 149 },
];

const total = card.reduce((sum, item) => {
	return sum + item.price;
}, 0);

console.log('Price: $', total);

// Async/Await - Fetch
const getData = async () => {
	const res = await fetch(url);
	const json = await res.json();
	return json;
};

const url = 'https://jsonplaceholder.typicode.com/todos';

try {
	const data = await getData(url);
	console.log(data);
} catch (error) {
	console.log(error.message);
}
