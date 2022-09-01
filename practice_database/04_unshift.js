// Метод Unshift

const array = [1, 2, 3, 4, 5];

function unshift(arr, num) {
	const merged = [num, ...arr];

	for (i = 0; i < merged.length; i++) {
		arr[i] = merged[i];
	}

	return arr.length;
}

const newLength = unshift(array, 0);

console.log(array);
console.log(newLength);
