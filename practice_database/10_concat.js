// Метод Concat

const myArray = [1, 2, 3, 4];

const next = [5, 6];

function concat(arr, sub = []) {
	const copy = [];

	const totalLength = arr.length + sub.length;

	for (i = 0; i < totalLength; i++) {
		if (i < arr.length) {
			copy[i] = arr[i];
		} else {
			copy[i] = sub[i - arr.length];
		}
	}

	return copy;
}

console.log(concat(myArray));
console.log(concat(myArray, next));
