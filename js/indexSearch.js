const indexSearch = () => {
	const input = document.querySelector('.search-block > input');//присваиваем константе input первый input внутри search-block из document
	const searchBtn = document.querySelector('.search-block > button');

	input.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			location.href = `goods.html#search=${input.value}`
		}
	})

	searchBtn.addEventListener('click', () => {//вешаем обработчик событий по клику на searchBtn
		if (input.value) {
			location.href = `goods.html#search=${input.value}`
		}
	})
}

indexSearch();