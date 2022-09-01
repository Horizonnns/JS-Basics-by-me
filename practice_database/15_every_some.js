// Метод Every и Some - Задача Решено!

const myArray = [1, 2, 3, 4, 5, 6];

function log(args) {
	console.log(args);
}

function every(arr, fn) {
	for (i = 0; i < arr.length; i++) {
		if (!fn(arr[i])) return false;
	}
	return true;
}
//====================================
function some(arr, fn) {
	for (i = 0; i < arr.length; i++) {
		if (fn(arr[i])) return true;
	}
	return false;
}

console.groupCollapsed('Native');
//===============================
console.group('Some');
log(myArray.some((i) => i % 2 === 2));
log(myArray.some((i) => typeof i === 'number'));
console.groupEnd();
//==============================================
console.group('Every');
log(myArray.every((i) => i % 2));
log(myArray.every((i) => typeof i === 'number'));
console.groupEnd();

console.groupEnd();

console.group('Own Impl');
//===============================
console.group('Some');
log(some(myArray, (i) => i % 2 === 2));
log(some(myArray, (i) => typeof i === 'number'));
console.groupEnd();
//==============================================
console.group('Every');
log(every(myArray, (i) => i % 2));
log(every(myArray, (i) => typeof i === 'number'));
console.groupEnd();
