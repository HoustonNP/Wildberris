const cart = () => {//создаем функцию для изоляции переменных
	const cartBtn = document.querySelector('.button-cart');//присваиваем константе cartBtn первый button-cart из document
	const cart = document.getElementById('modal-cart');//присваиваем константе cart единственный id #modal-cart из document
	const cartClose = cart.querySelector('.modal-close');//присваиваем константе cartClose первый modal-close в cart
	const goodsContaner = document.querySelector('.long-goods-list');

	cartBtn.addEventListener('click', () => {//вешаем обработчик событий по клику на cartBtn
		cart.style.display = 'flex';//свойство подключится инлайново
	});

	cartClose.addEventListener('click', () => {//вешаем обработчик событий по клику на cartClose
		cart.style.display = '';//инлайновое свойсво обнулится, но из тега div, style не пропадет
	});

	cart.addEventListener('click', (e) => {
		if (!e.target.closest('.modal')) {
			cart.style.display = '';
		}
	})

	window.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			cart.style.display = '';
		}
	})

	if (goodsContaner) {
		goodsContaner.addEventListener('click', (event) => {
			console.log(event.target);
		})
	}
};

cart();//вызываем функцию
