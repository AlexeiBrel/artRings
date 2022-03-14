function calcCartPriceAndDelivery() {
	const cardWrapper = document.querySelector('.card-wrapper');
	const priceElements = cardWrapper.querySelectorAll('.card__info');
	const totalPriceEl = document.querySelector('.total-price');


	// Общая стоимость товаров
	let priceTotal = 0;

	// Обходим все блоки с ценами в корзине
	priceElements.forEach(function (item) {
		// Находим количество товара
		const amountEl = item.querySelector('[data-counter]');
		const priceEl = item.querySelector('.card__about-price');

		const currentPrice = parseInt(priceEl.innerText) * parseInt(amountEl.innerText);
		// Добавляем стоимость товара в общую стоимость (кол-во * цену)
		priceTotal += currentPrice;
	});


	console.log(priceTotal);
	// Отображаем цену на странице
	totalPriceEl.innerText = priceTotal;
}