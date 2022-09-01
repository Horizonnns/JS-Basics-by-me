// Метод Map

const myArray = [1, 2, 3, 4, 5, 6];

function map(arr, callbackFn) {
	const result = [];

	for (i = 0; i < arr.length; i++) {
		result.push(callbackFn(arr[i], i, arr));
	}

	return result;
}

const res = map(myArray, (item) => item ** 2);

console.log(res);
