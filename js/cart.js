const cart = () => {//создаем функцию для изоляции переменных
	const cartBtn = document.querySelector('.button-cart');//присваиваем константе cartBtn первый button-cart из document
	const cart = document.getElementById('modal-cart');//присваиваем константе cart единственный id #modal-cart из document
	const cartClose = cart.querySelector('.modal-close');//присваиваем константе cartClose первый modal-close в cart

	cartBtn.addEventListener('click', () => {//вешаем обработчик событий по клику на cartBtn
		cart.style.display = 'flex';//свойство подключится инлайново
	});

	cartClose.addEventListener('click', () => {//вешаем обработчик событий по клику на cartClose
		cart.style.display = '';//инлайновое свойсво обнулится, но из тега div, style не пропадет
	});
};

cart();//вызываем функцию

//const viewAll = document.querySelector('.more');
//viewAll.addEventListener('click', () => {
//	window.location.href = 'goods.html';
//});