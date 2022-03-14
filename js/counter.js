const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

window.addEventListener('click', function (event) {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		// Находим обертку счетчика
		const counterWrapper = event.target.closest('.counter-wrapper');
		// Находим див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');
	}

	// Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	// Проверяем является ли элемент по которому был совершен клик кнопкой Минус
	if (event.target.dataset.action === 'minus') {

		// Проверяем чтобы счетчик был больше 1
		if (parseInt(counter.innerText) > 1) {
			// Изменяем текст в счетчике уменьшая его на 1
			counter.innerText = --counter.innerText;
		} else if (event.target.closest('.card-wrapper') && parseInt(counter.innerText) === 1) {
			// Проверка на товар который находится в корзине
			console.log('IN CART!!!!');
			// Удаляем товар из корзины
			event.target.closest('.cart-item').remove();

			// Отображение статуса корзины Пустая / Полная
			toggleCartStatus();

			// Пересчет общей стоимости товаров в корзине
			calcCartPriceAndDelivery();
		}

	}

	// Проверяем клик на + или - внутри коризины
	if (event.target.hasAttribute('data-action') && event.target.closest('.card-wrapper')) {
		// Пересчет общей стоимости товаров в корзине
		console.log('22');
		calcCartPriceAndDelivery();
	}
});