const search = async () => {//создаем функцию для изоляции переменных
	const input = document.querySelector('.search-block > input');//присваиваем константе input первый input внутри search-block из document
	const searchBtn = document.querySelector('.search-block > button');//присваиваем константе searchBtn первый button внутри search-block из document

	const getData = async (searchString) => {//функция получения и фильтрации данных
		let data = await getDataBase()
		const array = data.filter(good => good.name.toLowerCase().includes(searchString.toLowerCase()));
		renderGoods(array)
	}

	const goSearch = (searchString) => {
		location.hash = `search=${searchString}`
		let searchHash = location.hash;
		searchHash = searchHash.replace('#search=', '');
		getData(searchHash);
	}

	input.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			goSearch(input.value);
		}
	})

	searchBtn.addEventListener('click', () => {//вешаем обработчик событий по клику на searchBtn
		if (input.value) {
			goSearch(input.value);//передаем фунции текущее значение input
		}
	})

	if (location.hash.indexOf('#search=') !== -1) {
		let searchHash = location.hash;
		searchHash = searchHash.replace('#search=', '');
		getData(searchHash);
		input.value = searchHash;
	}
};

search();//вызываем функцию