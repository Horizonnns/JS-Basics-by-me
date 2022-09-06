// Алгоритм Линейного Поиска - (Реализация)

// Count - это количество иттераций
// Реализация простейшей fnc кот. ищеть какой то эл. в массиве
// Сложность этого алгоритма: 'O(n)' - где 'n' - это количество эл. иттераций в массиве
// ----------------------------------------------------------------------------

const array = [1, 4, 5, 8, 1, 2, 7, 5, 2, 11];
let count = 0;
function linearSearch(array, item) {
	for (let i = 0; i < array.length; i++) {
		count += 1;
		if (array[i] === item) {
			return i;
		}
	}
	return null;
}

console.log(linearSearch(array, 8));
console.log('count = ', count);
