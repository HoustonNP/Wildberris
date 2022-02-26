const cart = () => {//создаем функцию для изоляции переменных
	const cartBtn = document.querySelector('.button-cart');//присваиваем константе cartBtn первый button-cart из document
	const cart = document.getElementById('modal-cart');//присваиваем константе cart единственный id #modal-cart из document
	const cartClose = cart.querySelector('.modal-close');//присваиваем константе cartClose первый modal-close в cart
	const goodsContaner = document.querySelector('.long-goods-list');
	const cartTable = document.querySelector('.cart-table__goods');
	const modalForm = document.querySelector('.modal-form');

	const deleteCartItem = (id) => {
		const cart = JSON.parse(localStorage.getItem('cart'))
		const newCart = cart.filter(good => {
			return good.id !== id
		})
		localStorage.setItem('cart', JSON.stringify(newCart))
		renderCartGoods(JSON.parse(localStorage.getItem('cart')))
	}

	const plusCartItem = (id) => {
		const cart = JSON.parse(localStorage.getItem('cart'))
		const newCart = cart.map(good => {
			if (good.id === id) {
				good.count++
			}
			return good
		})
		localStorage.setItem('cart', JSON.stringify(newCart))
		renderCartGoods(JSON.parse(localStorage.getItem('cart')))
	}

	const minusCartItem = (id) => {
		const cart = JSON.parse(localStorage.getItem('cart'))
		const newCart = cart.map(good => {
			if (good.id === id) {
				if (good.count > 1) {
					good.count--
				}
			}
			return good
		})
		localStorage.setItem('cart', JSON.stringify(newCart))
		renderCartGoods(JSON.parse(localStorage.getItem('cart')))
	}

	const addToCart = (id) => {
		const goods = JSON.parse(localStorage.getItem('allGoods'))
		const clickedGood = goods.find(good => good.id === id)
		const cart = localStorage.getItem('cart') ?
			JSON.parse(localStorage.getItem('cart')) : []
		if (cart.some(good => good.id === clickedGood.id)) {
			cart.map(good => {
				if (good.id === clickedGood.id) {
					good.count++
				}
				return good
			})
		} else {
			clickedGood.count = 1
			cart.push(clickedGood)
		}
		localStorage.setItem('cart', JSON.stringify(cart))
	}

	const renderCartGoods = (goods) => {
		cartTable.innerHTML = ''
		goods.forEach(good => {
			const tr = document.createElement('tr')
			tr.innerHTML = `
				<td>${good.name}</td>
				<td>${good.price}$</td>
				<td><button class="cart-btn-minus"">-</button></td>
				<td>${good.count}</td>
				<td><button class=" cart-btn-plus"">+</button></td>
				<td>${+good.price * +good.count}$</td>
				<td><button class="cart-btn-delete"">x</button></td>
			`
			cartTable.append(tr)

			tr.addEventListener('click', (e) => {
				if (e.target.classList.contains('cart-btn-minus')) {
					minusCartItem(good.id)
				} else if (e.target.classList.contains('cart-btn-plus')) {
					plusCartItem(good.id)
				} else if (e.target.classList.contains('cart-btn-delete')) {
					deleteCartItem(good.id)
				}
			})
		})
	}

	const sendForm = () => {
		const cartArray = localStorage.getItem('cart') ?
			JSON.parse(localStorage.getItem('cart')) : []

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				cart: cartArray,
				name: '',
				phone: '',
			}),
		}).then(() => {
			cart.style.display = ''
		})
	}

	modalForm.addEventListener('submit', (e) => {
		e.preventDefault()
		sendForm()
	})

	cartBtn.addEventListener('click', () => {//вешаем обработчик событий по клику на cartBtn
		const cartArray = localStorage.getItem('cart') ?
			JSON.parse(localStorage.getItem('cart')) : []

		renderCartGoods(cartArray)

		cart.style.display = 'flex';//свойство подключится инлайново
	});

	cartClose.addEventListener('click', () => {//вешаем обработчик событий по клику на cartClose
		cart.style.display = '';//инлайновое свойсво обнулится, но из тега div, style не пропадет
	});

	cart.addEventListener('click', (e) => {
		if (!e.target.closest('.modal') && e.target.classList.contains('overlay')) {
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
			if (event.target.closest('.add-to-cart')) {
				const buttonToCart = event.target.closest('.add-to-cart')
				const goodId = buttonToCart.dataset.id
				addToCart(goodId)
			}
		})
	}
};

cart();//вызываем функцию



// - В модальном окне корзины есть поле с общей ценой (class="card-table__total"). Посчитать стоимость всего товара и результат выводить в это поле
// - В отправляемые данные добавить имя и телефон из формы
// - Отчищать форму после отправки данных