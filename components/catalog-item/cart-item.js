const product = document.getElementById("product");
const PRODUCTS = [
  {
    id: 1,
    img: "/img/product/item1.png",
    price: 1000,
    vendorСode: "К 29-3",
    title: "Кольцо с бриллиантом из золота",
    metal: "золото",
  },
  {
    id: 2,
    img: "/img/product/item2.png",
    price: 1200,
    vendorСode: "B 28-2",
    title: "Кольцо обручальное из золота",
    metal: "золото",
  },
  {
    id: 3,
    img: "/img/product/item3.png",
    price: 1400,
    vendorСode: "К 29-1",
    title: "Обручальное кольцо с фианитами из серебра",
    metal: "серебро",
  },
  {
    id: 4,
    img: "/img/product/item1.png",
    price: 1250,
    vendorСode: "M 27-3",
    title: "Кольцо с бриллиантами из золота",
    metal: "серебро",
  },
  {
    id: 5,
    img: "/img/product/item5.png",
    price: 1500,
    vendorСode: "C 26-7",
    title: "Обручальное кольцо с фианитами из золота",
    metal: "золото",
  },
  {
    id: 6,
    img: "/img/product/item6.png",
    price: 2400,
    vendorСode: "E 23-7",
    title: "Кольцо с бриллиантами из серебра",
    metal: "золото",
  },
  {
    id: 7,
    img: "/img/product/item7.png",
    price: 2100,
    vendorСode: "Q 24-9",
    title: "Кольцо с бриллиантом из золота",
    metal: "золото",
  },
  {
    id: 8,
    img: "/img/product/item8.png",
    price: 1800,
    vendorСode: "W 22-5",
    title: "Кольцо с фианитами из серебра",
    metal: "серебро",
  },
];

class Products {
  render() {
    let htmlCatalog = "";

    PRODUCTS.forEach(({ id, img, price, venderCode, title, metal }) => {
      htmlCatalog += `
            <div class="product-wrap" data-id='${id}'>
                 <div class="product-item">
                     <img class='product-img' src="${img}">                     
                 </div>
                 <div class="product-title">
                     <a href="#" class='item-title'>${title}</a>
                     <span class="product-price">${price}</span> <span>руб</span>
                 </div>
                 <div class='product__footer'>
                      <div class="items counter-wrapper">
								      	<button class="items__control" data-action="minus">-</button>
								      	<p class="items__current" data-counter>1</p>
								      	<button class="items__control" data-action="plus">+</button>
								      </div>
                      <div class="product-buttons">
                         <a href="#" class="button" data-cart>В корзину</a>
                      </div>
                  </div> 
             </div>
            `;
    });

    product.innerHTML = htmlCatalog;
  }
}

const productsPage = new Products();
productsPage.render();
