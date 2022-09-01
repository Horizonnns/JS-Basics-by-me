// Метод Revese

const myArray = [1, 2, 3, 4, 5, 6];

function concat(arr) {
	const copy = arr.concat();

	for (i = 0; i < arr.length; i++) {
		arr[i] = copy[arr.length - 1 - i];
	}

	return arr;
}

console.log(myArray);
console.log(concat(myArray));
