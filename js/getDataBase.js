const getDataBase = async () => {
	let allGoodsStr = localStorage.getItem('allGoods');
	if (!allGoodsStr) {
		await fetch('https://wildberries-f94ba-default-rtdb.firebaseio.com/db.json')
			.then((res) => res.text())
			.then((data) => {
				allGoodsStr = data
				localStorage.setItem('allGoods', data)
			});
	};
	let allGoods = JSON.parse(allGoodsStr);
	return allGoods;
}