// Метод ForEach

const myArray = [1, 2, 3, 4, 5, 6];

function forEach(arr, callbackFn) {
	for (i = 0; i < arr.length; i++) {
		callbackFn(arr[i], i, arr);
	}
}

forEach(myArray, (item, index) => {
	console.log(`item: ${item}, index: ${index}`);
});
