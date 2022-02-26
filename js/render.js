const renderGoods = (goods) => {
	const goodsContaner = document.querySelector('.long-goods-list');//получаем массив элементов из класса long-goods-list
	goodsContaner.innerHTML = '';//стираем все карточки
	goods.forEach(good => {//перебираем массив
		const goodBlock = document.createElement('div');//и создаем див для каждого элемента массива
		goodBlock.classList.add('col-lg-3');//вешаем класс
		goodBlock.classList.add('col-sm-6');//еще разок

		//создаем карточку для каждого дива с заполнением нужных данных карточки
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