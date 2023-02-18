export default class Card{
  constructor(userId, {_id, name, link, likes, owner}, template, handleCardClick, {likeCard, dontLikeCard, deleteCard}){
    this._userId = userId;
    this._id = _id;
    this._description = name;
    this._image = link;
    this._likes = likes;
    this._likesCount = likes.length;
    this._ownerId = owner._id
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._likeCard = likeCard;
    this._dontLikeCard = dontLikeCard;
    this._deleteCard = deleteCard;
  }

  _getTemplate(){
    const cardElement = document
    .querySelector(this._template)
    .content
    .querySelector('.elements__item')
    .cloneNode(true);

    return cardElement;
  }

  handleLikeCard(data){
    this._cardLike.classList.add('elements__item-like-button_active')
    this._element.querySelector('.elements__item-like-count').textContent = data.likes.length;    
  }

  handleDontLikeCard(data){
    this._element.querySelector('.elements__item-like-count').textContent = data.likes.length;
    this._cardLike.classList.remove('elements__item-like-button_active')
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', this._handleCardClick);
    this._cardLike = this._element.querySelector('.elements__item-like-button');
    this._cardLike.addEventListener('click', () => {
      if (this._cardLike.classList.contains('elements__item-like-button_active')){
        this._dontLikeCard(this._id)          
      } 
      else {
        this._likeCard(this._id) 
      }
    });
    this._element.querySelector('.elements__item-delete').addEventListener('click', () => this._deleteCard(this._id, this._element));
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.elements__item-poster');
    this._cardImage.src = this._image;
    this._cardImage.alt = this._description;
    if (this._userId !== this._ownerId) this._element.querySelector('.elements__item-delete').style.display='none';
    this._element.querySelector('.elements__item-title').textContent = this._description;
    this._element.querySelector('.elements__item-like-count').textContent = this._likesCount;
    this._likes.forEach(like => {
      if (like._id === this._userId) this._element.querySelector('.elements__item-like-button').classList.add('elements__item-like-button_active');
    });
    this._setEventListeners();

    return this._element;
  }
}
