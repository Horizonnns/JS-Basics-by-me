// Метод Fill - Задача не решено!

const myArray = [1, 2, 3, 4, 5, 6];

function fill(arr, start, end) {
	const start = end;
	for (i = 0; i < arr.length; i++) {
		arr[i] = start[arr.length + `${end}`];

		return end[i + 1];
	}
}

console.log(fill(myArray, 1));
