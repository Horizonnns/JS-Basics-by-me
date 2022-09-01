// Метод Includes

const myArray = [1, 2, 3, 4, 5, 6];

function includes(arr, search, start = 0) {
	return arr.indexOf(search, start) > 0 ? true : false;
}

console.group('Native');
console.log(myArray.includes(2));
console.log(myArray.includes(1));
console.groupEnd();

console.group('Temp');
console.log(myArray.includes(1));
console.log(myArray.includes(0));
console.log(myArray.includes(3));
console.groupEnd();
