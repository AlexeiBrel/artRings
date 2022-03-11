// Div внутри корзины, в который мы добавляем товары
const cartWrapper =  document.querySelector('.card-wrapper');

// Отслеживаем клик на странице
window.addEventListener('click', (event) => {
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.hasAttribute('data-cart')) {

		// Находим карточку с товаром, внутри котрой был совершен клик
		const card = event.target.closest('.product-wrap');

		// Собираем данные с этого товара и записываем их в единый объект productInfo
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,			
            price: card.querySelector('.product-price').innerText,
            counter: card.querySelector('[data-counter]').innerText,
		};

		// Проверять если ли уже такой товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		// Если товар есть в корзине
        if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
			// Если товара нет в корзине

			// Собранные данные подставим в шаблон для товара в корзине
            const cartItemHTML = ` <div class="card__info" data-id="${productInfo.id}">
                                        <div>
                                            <img src='${productInfo.imgSrc}' alt="">
                                        </div>
                                        <div class="card__about">
                                            <p>${productInfo.title}</p>
                                            <div class="card__block">
                                                <div class="card__block-btn counter-wrapper">
                                                    <button class="card__about-btn" type="button" data-action="minus">-</button>
                                                    <p class="card__kol" data-counter>${productInfo.counter}</p>
                                                    <button class="card__about-btn" type="button" data-action="plus">+</button>
                                                </div>
                                                <span class="card__about-price">${productInfo.price}</span>
                                                <button type="button" class="delete" data-delete></button>
                                            </div>
                                        </div>
                                    </div>
            `;

			// Отобразим товар в корзине
			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		}

		// Сбрасываем счетчик добавленного товара на "1"
		card.querySelector('[data-counter]').innerText = '1';

		// Отображение статуса корзины Пустая / Полная
		toggleCartStatus();

		// Пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();

    }
    if (event.target.hasAttribute('data-delete')) { 
        event.target.closest('.card__info').remove();
        toggleCartStatus();
        calcCartPriceAndDelivery();
    }
});


