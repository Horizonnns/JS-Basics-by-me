// Метод Find

const myArray = [1, 2, 3, 4, 5, 6];

function find(arr, callbackFn) {
	for (i = 0; i < arr.length; i++) {
		const doesExists = callbackFn(arr[i]);
		if (doesExists) {
			return arr[i];
		}
	}
}

const res = find(myArray, (item) => item === 3);

console.log(res);
