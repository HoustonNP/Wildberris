const search = () => {//создаем функцию для изоляции переменных
	const input = document.querySelector('.search-block > input');//присваиваем константе input первый input внутри search-block из document
	const searchBtn = document.querySelector('.search-block > button');//присваиваем константе searchBtn первый button внутри search-block из document

	searchBtn.addEventListener('click', () => {//вешаем обработчик событий по клику на searchBtn
		console.log(input.value);//выводим в консоль текущее значение input
	})
};

search();//вызываем функцию