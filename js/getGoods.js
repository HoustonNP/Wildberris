const getGoods = () => {//создаем функцию для изоляции переменных

	const links = document.querySelectorAll('.navigation-link');//присваиваем константе links массив всех navigation-link из document

	const renderGoods = (goods) => {
		const goodsContaner = document.querySelector('.long-goods-list');//получаем массив элементов из класса long-goods-list
		goodsContaner.innerHTML = '';//стираем все карточки
		goods.forEach(good => {//перебираем массив
			const goodBlock = document.createElement('div');//и создаем див для каждого элемента массива
			goodBlock.classList.add('col-lg-3');//вешаем класс
			goodBlock.classList.add('col-sm-6');//еще разок

			//создаем карчку для каждого дива с заполнением нужных данных карточки
			goodBlock.innerHTML = `
				<div class="goods-card">
					<span class="label ${good.label ? null : 'd-none'}">${good.label}</span>
					<img src="db/${good.img}" alt="${good.name}" class="goods-image">
					<h3 class="goods-title">${good.name}</h3>
					<p class="goods-description">${good.description}</p>
					<button class="button goods-card-btn add-to-cart" data-id="007">
						<span class="button-price">$${good.price}</span>
					</button>
				</div>
			`
			goodsContaner.append(goodBlock);//в конце списка дочерних элементов добавляем очередной див
		})
	}

	const getData = (value, category) => {//функция получения и фильтрации данных
		fetch('https://wildberries-f94ba-default-rtdb.firebaseio.com/db.json')//получаем данные от сервера

			//метод .then позволяяет выполнять работу только после получения данных с сервера
			.then((res) => res.json())//функция, запущенная методом then получит res (ответ от сервера) и вернет их методом json для извлечения данных

			//метод сработает только после преобразования данных в читабельный вид
			.then((data) => {//then получает функцию, которая получает data
				const array = category ? data.filter((item) => item[category] === value) : data;//в массив array попадают эллементы удовлетворяющих условию (колбек которых true)
				localStorage.setItem('goods', JSON.stringify(array));//сохраняем array в localStorage в виде строки

				//избегаем обновления текущей страницы
				if (window.location.pathname !== "/wildberris-%D0%B8%D1%81%D1%85%D0%BE%D0%B4%D0%BD%D0%B8%D0%BA/goods.html") {//если текущий pathname не равен странице товаров
					window.location.href = 'goods.html'//переходим на страницу товаров
				} else {
					renderGoods(array)
				}
			});
	};

	links.forEach((link) => {//аргументом принимаем функцию и запускаем для каждого эллемента массива links
		link.addEventListener('click', (event) => {//оброботчик события по клику
			event.preventDefault();//блокируем стандартный переход ссылок по url
			const linkValue = link.textContent//текст из ссылки записываем в переменную
			const category = link.dataset.field//значение из data-field в html записываем в переменную
			getData(linkValue, category);//вызываем функцию получения данных от сервера только при клике
		});
	});

	//если в localStorage есть что-то с ключем goods и мы находимся на странице товара, то отправляем данные на рендер
	if (localStorage.getItem('goods') && window.location.pathname === "/wildberris-%D0%B8%D1%81%D1%85%D0%BE%D0%B4%D0%BD%D0%B8%D0%BA/goods.html") {
		renderGoods(JSON.parse(localStorage.getItem('goods')))//отрисовка данных в консоле будет проходить только на странице товаров
	}
};

getGoods();//вызываем функцию