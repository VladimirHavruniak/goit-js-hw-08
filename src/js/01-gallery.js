// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const gallary = document.querySelector(".gallery");
const allGallaryEl = galleryItems.map((el) =>
`<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`).join("");
gallary.insertAdjacentHTML("beforeend",allGallaryEl);
// console.log(allGallaryEl);
function toOpenModalImage(event) {
    event.preventDefault();
    const gallaryImg = event.target;
  
    if (!gallaryImg.classList.contains("gallery__image")) {
      return;
    }
    console.log(gallaryImg.alt);
    const gallarySlider = new SimpleLightbox('.gallery a',{captionDelay:250,captionsData: "alt" });
    
}
gallary.addEventListener("click", toOpenModalImage);