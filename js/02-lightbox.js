import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const createMarkup = createPicturesMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', createMarkup);
galleryEl.addEventListener('click', onClickPicture);

function createPicturesMarkup(items) {
  return galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
  }).join('');
}

function onClickPicture(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
}



let imgGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  showCounter: false,
});

