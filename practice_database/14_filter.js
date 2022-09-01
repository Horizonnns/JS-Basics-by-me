// Метод Filter - Задача не решено!

const myArray = [1, 2, 3, 4, 5, 6];

function filter(arr, callbackFn) {
	for (i = 0; i < arr.length; i++) {
		callbackFn(arr[i], i);
	}
}

// const filetred = myArray.filter((item) => item % 2 === 0);
// console.log(filetred);

console.log(filter(myArray, (item) => item % 2 === 0));
