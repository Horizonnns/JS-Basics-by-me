//? Деструктуризация
// С пом. Дестр/Объ. можно создавать переменные и присваивать им значение на основание значений свойств объектов

//? ---------------------------------------------------------------------

//                                                                 /
(' Деструктуризация Объектов ');

// Пример:
const userProfile = {
	name: 'Kasim',
	commentsQty: 23,
	hasSignedAgreement: false,
};

const { name, commentsQty, hasSignedAgreement } = userProfile;
console.log(name, commentsQty, hasSignedAgreement);
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Деструктуризация Массивов ');

// Пример:
const fruits = ['Apple', 'Banana'];

const [fruitsOne, fruitsTwo] = fruits;
console.log(fruitsOne, fruitsTwo);
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Деструктуризация в Функциях ');

// Пример:
const userProfile2 = {
	name: 'Kasim',
	commentsQty: 24,
	hasSignedAgreement: true,
};

const userInfo = ({ name, commentsQty }) => {
	if (!commentsQty) {
		return `User ${name} has no comments`;
	}
	return `User ${name} has ${commentsQty} comments`;
};

userInfo(userProfile2);
console.log(userInfo(userProfile2));
//                                                                 /
