//? Методы Массивов
// Все эти методы мутируют-изменяют оригиналный массив

//                                                                 /
(' Метод Map - Возврашает новый массив, и выполняеть действия с элементами ');
// Метод -Map- перебирает все элементы массива, но при этом возвращает новый массив
// И вызывает callbackFn определенное кол/раз, зависимо от кол/элеменетов в массиве

// Пример:
const myArray = [1, 2, 3];
console.log(myArray);

const newArray = myArray.map((el) => el * 3);
console.log(newArray);
console.log(myArray);
//                                                                 /

//                                                                 /
(' -Явный возврат -return- результат функции внутри блока кода ');

// Пример:
const myArra = [1, 2, 3];
console.log(myArra);

const newArra = myArra.map((el) => {
	return el * 3;
});
console.log(newArra);
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Метод ForEach - не меняет оригинальный массив, а выполняеть действия с его элементами ');
// Метод -ForEach- перебирает все элементы массива, и не меняет оригинальный массив

// Пример:
const myArray0 = [1, 2, 3];
console.log(myArray0);

myArray0.forEach((el) => console.log(el * 2));
console.log(myArray0);
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Метод Push - добавляет новый элемент в конце массива ');

// Пример:
const myArray1 = [1, 2, 3];
console.log(myArray1);

myArray1.push(5);
console.log(myArray1);
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Метод Pop - удаляет элемент с конца массива ');

// Пример:
const myArray2 = [1, 2];
console.log(myArray2);

myArray2.pop();
console.log(myArray2);
//                                                                 /

//                                                                 /
(' -Также этот метод возвращает удаленный элемент ');

// Пример:
const removedElement = myArray2.pop();
console.log(myArray2);
console.log(removedElement);
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Метод Unshift - добавляет элемент в начало массива ');

// Пример:
const myArray3 = [1, 2];
console.log(myArray3);

myArray3.unshift('Kasim');
console.log(myArray3);
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Метод Shift - удаляет первый элемент в массиве ');

// Пример:
const myArray4 = [1, 2];
console.log(myArray4);

myArray4.shift();
console.log(myArray4);
//                                                                 /

//                                                                 /
(' -Также этот метод возвращает удаленный элемент ');

// Пример:
const removedElement4 = myArray4.shift();
console.log(myArray4);
console.log(removedElement4);
//                                                                 /
