//? Assync/Await
// Async функция всегда возвращает промис
// Специальный синтаксис для упрощения работы с промисами
// Async функция ожидает результата инструкции await и не выполняет последующие инструкции

//                                                                 /
(' Асин/Функ - Промис Исполнен ');
// Промис resolve - состояние исполнен

// Пример:
const asyncFn = async () => {
	return 'Success';
};

asyncFn()
	.then((value) => console.log(value))
	.catch((error) => console.log(error.message));
//                                                                  /

//? ---------------------------------------------------------------------

//                                                                  /
(' Асин/Функ - Промис Отклонен ');
// Промис reject - состояние отклонен

// Пример:
const asyncFn2 = async () => {
	throw new Error('There are was a error!');
};

asyncFn2()
	.then((value) => console.log(value))
	.catch((error) => console.log(error.message));
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                  /
(' Ожидание результата Await и Отслежка времени ');
// С пом. await можно ожидать результат другого промиса
// В этом примере создан асин/функ с ожиданием - await, в качестве примера кот. в консоле появляется надпис и через 2с появляется второй надпис

// Пример:
const timerPromise = () => new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const asyncFn4 = async () => {
	console.log('Timer starts');
	const startTime = performance.now();
	await timerPromise();
	const endTime = performance.now();
	console.log('Timer ended', endTime - startTime);
};

asyncFn4();
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                  /
(' Упрощение запроса к удаленым серверам и получение данных без двойных промисов - На примере Async/Await ');

// Пример:
const getData = async (url) => {
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
//                                                                 /
