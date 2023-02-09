export default class Card{
  constructor({name, link}, template, handleCardClick){
    this._description = name;
    this._image = link;
    this._template = template;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate(){
    const cardElement = document
    .querySelector(this._template)
    .content
    .querySelector('.elements__item')
    .cloneNode(true);

    return cardElement;
  }

  _handleLikeCard(){
    this._cardLike.classList.toggle('elements__item-like_active');
  }
  _handleDeleteCard(){
    this._element.remove();
    this._element = null;    
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', this._handleCardClick);
    this._cardLike = this._element.querySelector('.elements__item-like');
    this._cardLike.addEventListener('click', () => {this._handleLikeCard()});
    this._element.querySelector('.elements__item-delete').addEventListener('click', () => {this._handleDeleteCard()});
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.elements__item-poster');
    this._cardImage.src = this._image;
    this._cardImage.alt = this._description;
    this._element.querySelector('.elements__item-title').textContent = this._description;
    this._setEventListeners();

    return this._element;
  }
}
