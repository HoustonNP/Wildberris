const getGoods = () => {

	const links = document.querySelectorAll('.navigation-link');

	const getData = () => {
		fetch('https://wildberries-f94ba-default-rtdb.firebaseio.com/db.json')
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem('item', JSON.stringify(data));
				const item = JSON.parse(localStorage.getItem('item'));
				console.log(item);
			})
	};

	links.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			getData();
		})
	});
};

getGoods();