// Метод FindIndex - Задача не решено!

const myArray = [1, 2, 3, 4, 5, 6];

function findIndex(arr, callbackFn) {
	for (i = 0; i < arr.length; i++) {
		if (callbackFn(arr[i + 1])) {
			return arr[i];
		}
	}
}

const res = findIndex(myArray, (index) => index === 2);

console.log(res);
