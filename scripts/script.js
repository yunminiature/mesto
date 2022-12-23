import {
  Card, 
  popup as posterPopup, 
  popupImage as posterPopupImage, 
  popupDescription as posterPopupDescription, 
  popupCloseButton as posterPopupCloseButton
} from './Card.js';
import FormValidator from './FormValidator.js';
const cardContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

const buttonEditProfile = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('.popup-profile');
const formEditProfile = profilePopup.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileNameEdit = profilePopup.querySelector('.popup__form-input_type_name');
const profileDescriptionEdit = profilePopup.querySelector('.popup__form-input_type_description');

const buttonAddCard = document.querySelector('.profile__add');
const cardPopup = document.querySelector('.popup-card');
const formAddCard = cardPopup.querySelector('.popup__form');
const cardTitleAdd = cardPopup.querySelector('.popup__form-input_type_title');
const cardLinkAdd = cardPopup.querySelector('.popup__form-input_type_link');
const submitAddCard = cardPopup.querySelector('.popup__submit');

function addCard(description, image){
  const card = new Card(description, image, cardTemplate);
  cardContainer.prepend(card.generateCard());
}

initialCards.forEach((item) => {
  addCard(item.name, item.link);
});

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

function openPopup(node){
  node.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}
function closePopup(node){
  node.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc)
}

function openProfilePopup(){
  profileNameEdit.value = profileName.textContent;
  profileDescriptionEdit.value = profileDescription.textContent;
  openPopup(profilePopup);
};
function closeProfilePopup(){
  closePopup(profilePopup);
};

function openCardPopup(){
  formAddCard.reset();
  submitAddCard.setAttribute('disabled', 'disabled');
  openPopup(cardPopup);
};
function closeCardPopup(){
  closePopup(cardPopup);
};

function handleProfileFormSubmit(evt){
  evt.preventDefault();
  profileName.textContent = profileNameEdit.value;
  profileDescription.textContent = profileDescriptionEdit.value;
  closeProfilePopup();
}

function handleCardFormSubmit (evt){
  evt.preventDefault();
  addCard(cardTitleAdd.value, cardLinkAdd.value);
  closeCardPopup();
}

buttonEditProfile.addEventListener('click', openProfilePopup);
formEditProfile.addEventListener('submit', handleProfileFormSubmit);
buttonAddCard.addEventListener('click', openCardPopup);
formAddCard.addEventListener('submit', handleCardFormSubmit);
cardContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('elements__item-poster')) openPopup(posterPopup);
});

document.querySelectorAll('.popup').forEach( popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    };
  });
});

const validator = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__submit'
});
validator.enableValidation();