const getGoods = async () => {//создаем функцию для изоляции переменных

	const getData = async (value, category) => {//функция получения и фильтрации данных
		let data = await getDataBase()
		const array = category ? data.filter((item) => item[category] === value) : data;//в массив array попадают эллементы удовлетворяющих условию (колбек которых true)
		renderGoods(array)
	}

	const links = document.querySelectorAll('.navigation-link');//присваиваем константе links массив всех navigation-link из document

	links.forEach((link) => {//аргументом принимаем функцию и запускаем для каждого эллемента массива links
		link.addEventListener('click', () => {//оброботчик события по клику
			const linkValue = link.textContent//текст из ссылки записываем в переменную
			const category = link.dataset.field//значение из data-field в html записываем в переменную
			getData(linkValue, category);//вызываем функцию получения данных от сервера только при клике
		});
		if (location.hash === '#' + link.textContent) {
			const linkValue = link.textContent//текст из ссылки записываем в переменную
			const category = link.dataset.field//значение из data-field в html записываем в переменную
			getData(linkValue, category);//вызываем функцию получения данных от сервера только при клике
		}
	});
}
getGoods();//вызываем функцию