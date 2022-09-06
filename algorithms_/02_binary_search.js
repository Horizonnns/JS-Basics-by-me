// Алгоритм Бинарного Поиска - (Реализация)

// Count - это количество иттераций
// Реализация простейшей fnc кот. ищеть какой то эл. в массиве
// В отсортированном массиве работает в логарифмическое время (в разы быстрее)
// Сложность этого алгоритма: 'O(n)' - где 'n' - это количество эл. иттераций в массиве
// ----------------------------------------------------------------------------

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch(array, item) {
	let start = 0;
	let end = array.length;
	let middle;
	let found = false;
	let position = -1;
	while (found === false && start <= end) {
		count += 1;
		middle = Math.floor(start + end) / 2;
		if (array[middle] === item) {
			found = true;
			position = middle;
			return position;
		}
		if (item < array[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
	}
	return position;
}

console.log(binarySearch(array, 0));
console.log(count);
