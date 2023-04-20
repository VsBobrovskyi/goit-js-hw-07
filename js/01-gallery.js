import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const createMarkup = createPicturesMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', createMarkup);
galleryEl.addEventListener('click', onClickPicture);

function createPicturesMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join('');
}

function onClickPicture(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src='${evt.target.dataset.source}' width = '800' height = '600'>`
  );
  instance.show();

  galleryEl.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}
