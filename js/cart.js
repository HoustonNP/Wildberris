const cart = () => {
	const cartBtn = document.querySelector('.button-cart'); //собираем все селекторы с подходящим именем в document и возвращаем первый из них в константу
	const cart = document.getElementById('modal-cart'); //находим первый эллемент по id в документе и присваиваем в константу
	const cartClose = cart.querySelector('.modal-close'); // собираем все селекторы в cart

	cartBtn.addEventListener('click', () => {
		cart.style.display = 'flex'; // свойство подключится инлайново
	});

	cartClose.addEventListener('click', () => {
		cart.style.display = ''; // инлайновое свойсво обнулится, но из тега div style не пропадет
	});


};

cart();