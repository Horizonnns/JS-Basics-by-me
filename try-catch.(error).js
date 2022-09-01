//? Обработка ошибок с пом. try/catch
// При возникновение --Uncaught - Не Пойманную-- ошибку поместить в вызов функции в блок try/catch как на примере

//                                                                 /
// Пример:
const fnError = () => {
	throw new Error('Some error');
};

try {
	fnError();
} catch (error) {
	console.error(error);
	console.log(error.message);
}

console.log('Continue...');
//                                                                 /
