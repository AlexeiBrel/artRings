const catalog = document.getElementById('catalog');

const CATALOG = [
  {
    id: 1,
    title: "ОБРУЧАЛЬНЫЕ КОЛЬЦА",
    bg: "/img/catalog/item1.png",
  },
  {
    id: 2,
    title: "ПОМОЛВОЧНЫЕ КОЛЬЦА",
    bg: "/img/catalog/item2.png",
  },
  {
    id: 3,
    title: "СВАДЕБНЫЕ ДУЭТЫ",
    bg: "/img/catalog/item3.png",
  },
  {
    id: 4,
    title: "НА ЗАКАЗ",
    bg: "/img/catalog/item4.png",
  },
];

class Catalog {
    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({ id, title, bg }) => {
            htmlCatalog += `
            <div class="catalog__item" style="background: url(${bg}) center/contain no-repeat, #e7e7e7;">
                <a class="catalog__btn" href="##">${title}</a>
            </div>
            `;
        });   

        catalog.innerHTML = htmlCatalog;
    }
}

const catalogPage = new Catalog();
catalogPage.render();