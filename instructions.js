//? Условные Инструкции

//                                                                 /
(' Инструкция - (if) ');
// if (Условие) {
// Блок кода, выполняемый однократно, если Условие правдиво
// }

// Пример:
let val = 10;
if (val > 5) {
	val += 20;
}

console.log(val);
//                                                                  /

//                                                                 /
(' Пример if с оператором отрицания ');

// Пример:
const person = {
	age: 20,
};

if (!person.name) {
	console.log('Имя не указано');
}
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Инструкция - (if - else) ');
// Выполниться либо один либо второй блок кода.
// Одновременно два блока выполниться не могуть.

// if (Условие) {
// Блок кода, выполняемый однократно, если Условие правдиво
// } else {
// Блок кода, выполняемый однократно, если Условие ложно
// }

// Пример:
let wal = 10;
if (wal < 5) {
	wal += 20;
} else {
	wal -= 20;
}

console.log(wal);
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Инструкция - (if - else - if) ');
// if (Условие 1) {
//     Блок кода, выполняемый однократно, если Условие 1 правдиво
// } else if (Условие 2) {
//     Блок кода, выполняемый однократно, если Условие 2 правдиво
// }
// } else {
//     Блок кода, выполняемый однократно, если предыдущие условия ложны
// }

// Пример:
const age = 24;

if (age > 18) {
	console.log('Is adult');
} else if (age >= 12) {
	console.log('Is teenager');
} else {
	console.log('Is child');
}
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Аналог инструкции - (if - else - if) - Предпочтительный формать - if ');

// Пример:
const age2 = 24;

if (age2 >= 18) {
	console.log('Is adult');
}

if (age2 >= 12 && age2 < 18) {
	console.log('Is teenager');
}

if (age2 < 12) {
	console.log('Is child');
}
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' if - в Функциях ');

// Пример:
const sumPositiveNumbers = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return 'One of the arguments is not a number';
	}

	if (a <= 0 || b <= 0) {
		return 'Numbers are not positive';
	}

	return a + b;
};

sumPositiveNumbers(10, 5);
console.log(sumPositiveNumbers(10, 5));

sumPositiveNumbers(10, 'nan');
console.log(sumPositiveNumbers(10, 'nan'));

sumPositiveNumbers(10, -5);
console.log(sumPositiveNumbers(10, -5));
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Инструкция switch ');
// switch (Выражение) {
//   case A:
//        Действия если Выражение === A
//     break
//   case B:
//        Действия если Выражение === B
//     break
//   default:
//        Действия по умолчанию
// }

// Пример:
const month = 2;

switch (month) {
	case 10:
		console.log('Декабрь');
		break;
	case 1:
		console.log('Январь');
		break;
	case 2:
		console.log('Февраль');
		break;
	default:
		console.log('Это не зимний месяц');
}
//                                                                 /
