//? Классы и Прототипы

//                                                                 /
(' Создание Классов и Экземпляров ');

// Пример:
class Comment {
	constructor(text) {
		this.text = text;
		this.votesQty = 0;
	}

	upvote() {
		this.votesQty += 1;
	}
}

const firstComment = new Comment('First Comment');

firstComment.upvote();
console.log(firstComment.votesQty);

firstComment.upvote();
console.log(firstComment.votesQty);
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Проверка пренадлежности свойств объектов ');

// Пример:
firstComment.hasOwnProperty('text');
firstComment.hasOwnProperty('votes');
firstComment.hasOwnProperty('upvote');
firstComment.hasOwnProperty('hasOwnProperty');
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Создание нескольких экземпляров ');

// Пример:
const firstComment2 = new Comment('First Comment');
const secondComment = new Comment('Second Comment');
const thirdComment = new Comment('Third Comment');
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Статические Методы ');

// Пример:
class Comment {
	constructor(text) {
		this.text = text;
		this.votesQty = 0;
	}

	upvote() {
		this.votesQty += 1;
	}

	static mergeComments(first, second) {
		return `${first} ${second}`;
	}
}

const firstComment3 = new Comment('First Comment');

Comment.mergeComments('First comment.', 'Second comment');
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Расширение других классов ');

// Пример:
class NumbersArray extends Array {
	sum() {
		return this.reduce((el, acc) => (acc += el), 0);
	}
}

const myArray = new NumbersArray(2, 5, 7);

console.log(myArray);
myArray.sum();
//                                                                 /
