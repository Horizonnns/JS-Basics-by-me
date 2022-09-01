// Метод Sort

const start = 'a'.charCodeAt();
const end = 'z'.charCodeAt();

Array.prototype.shuffle = function () {
	let currentIndex = this.length,
		randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[this[currentIndex], this[randomIndex]] = [this[randomIndex], this[currentIndex]];
	}

	return this;
};

const letters = new Array(end - start + 1)
	.fill('')
	.map((_, index) => String.fromCharCode(start + index))
	.shuffle()
	.sort();

console.log(letters);
