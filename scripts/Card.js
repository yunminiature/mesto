const popup = document.querySelector('.poster-popup');
const popupImage = popup.querySelector('.poster-popup__image');
const popupDescription = popup.querySelector('.poster-popup__description');
const popupCloseButton = popup.querySelector('.poster-popup__close');

export {popup, popupImage, popupDescription, popupCloseButton};

export class Card{
  constructor(description, image, template){
    this._description = description;
    this._image = image;
    this._template = template;
  }

  _getTemplate(){
    const cardElement = this._template
    .querySelector('.elements__item')
    .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopup(){
    popupImage.src = this._image;
    popupImage.alt = this._description;
    popupDescription.textContent = this._description;
  }
  _handleClosePopup(){
    popupImage.src = '';
    popupImage.alt = '';
    popupDescription.textContent = '';
  }

  _setEventListeners() {
    this._element.querySelector('.elements__item-poster').addEventListener('click', (evt) => {
      this._handleOpenPopup();
    });
    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });
    this._element.querySelector('.elements__item-like').addEventListener('click', () =>
      this._element.querySelector('.elements__item-like').classList.toggle('elements__item-like_active')
    );
    this._element.querySelector('.elements__item-delete').addEventListener('click', () =>
      this._element.remove()
    );
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.elements__item-poster').setAttribute('src', this._image);
    this._element.querySelector('.elements__item-poster').setAttribute('alt', this._description);
    this._element.querySelector('.elements__item-title').textContent = this._description;

    return this._element;
  }
}
