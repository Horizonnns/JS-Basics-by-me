// Метод Push

const array = [1, 2, 3, 6, 12];

function push(arr, num) {
	arr[arr.length] = num;
	return arr.length;
}

const res = push(array, 48);

console.log(array);
console.log(res);
