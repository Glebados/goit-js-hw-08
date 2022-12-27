// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/common.css';
import '../css/01-gallery.css';
// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryMarkUp = galleryItems
  .map(
    el => `
	 <a class="gallery__item" href="${el.original}">
	 <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
  </a>
	`
  )
  .join('');

galleryRef.innerHTML = galleryMarkUp;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  doubleTapZoom: 1,
  scrollZoom: false,
});
