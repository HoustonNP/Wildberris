const getGoods = () => {//создаем функцию для изоляции переменных

	const links = document.querySelectorAll('.navigation-link');//присваиваем константе links массив всех navigation-link из document

	const getData = () => {
		fetch('https://wildberries-f94ba-default-rtdb.firebaseio.com/db.json')//получаем данные от сервера
			//метод .then позволяяет выполнять работу только после получения данных с сервера
			.then((res) => res.json())//функция, запущенная методом then получит res (ответ от сервера) и вернет их методом json для извлечения данных
			//метод сработает только после преобразования данных в читабельный вид
			.then((data) => {//then получает функцию, которая получает data
				localStorage.setItem('item', JSON.stringify(data));//сохраняем data в localStorage в виде строки
				const item = JSON.parse(localStorage.getItem('item'));//парсим стоку 
				console.log(item);//и выводим ее в консоль
			})
	};

	links.forEach((link) => {//аргументом принимаем функцию и запускаем для каждого эллемента массива links
		link.addEventListener('click', (event) => {//оброботчик события по клику
			event.preventDefault();//блокируем стандартный переход ссылок по url
			getData();//вызываем функцию получения данных от сервера только при клике
		})
	});
};

getGoods();//вызываем функцию