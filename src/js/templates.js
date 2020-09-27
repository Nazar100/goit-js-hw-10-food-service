import itemsTemplates from '../templates/gallery-items.hbs';
import products from '../menu.json';

const markup = itemsTemplates(products);
// console.log(markup);

const listRef = document.querySelector('.js-menu');
listRef.insertAdjacentHTML('beforeend', markup);
