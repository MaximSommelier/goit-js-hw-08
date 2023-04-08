// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(({preview,original,description}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
  />
</a>
</li>`);

gallery.insertAdjacentHTML('beforeend', markup.join(''));

const galleryLightBox = new SimpleLightbox(".gallery a",{
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition:'bottom',
  captionDelay: 250,
});
// Change code below this line

console.log("galleryItems");
