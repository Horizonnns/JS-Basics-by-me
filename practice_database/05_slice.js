// Метод Slice

const myArray = [1, 2, 3, 4, 5, 6];

function slice(arr, start, end) {
	const result = [];

	let lastIndex = arr.length;

	if (end < 0) {
		lastIndex -= Math.abs(end);
	}

	for (i = start; i < lastIndex; i++) {
		result.push(arr[i]);
	}

	return result;
}

const res = slice(myArray, 2);
const res2 = slice(myArray, 2, 4);

console.log(myArray);
console.log('res', res);
console.log('res2', res2);
