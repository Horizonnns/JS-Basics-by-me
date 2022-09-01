// Метод Shift

const myArray = [2, 3, 4, 5, 6, 7, 8];

function shift(arr) {
	const firstEl = arr[0];

	for (i = 0; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}

	arr.length -= 1;

	return firstEl;
}

const res = shift(myArray);

console.log(myArray);
console.log(res);
