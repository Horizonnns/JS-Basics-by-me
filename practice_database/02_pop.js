// Метод Pop

const array = [1, 2, 3, 4, 5, 6, 7];

function pop(arr) {
	const lastItem = arr[arr.length - 1];
	arr.length -= 1;
	return lastItem;
}

const res = pop(array);

console.log(array);
console.log(res);
