import Card from './Card.js';
import FormValidator from './FormValidator.js';

const posterPopup = document.querySelector('.poster-popup');
const posterPopupImage = posterPopup.querySelector('.poster-popup__image');
const posterPopupDescription = posterPopup.querySelector('.poster-popup__description');
const cardContainer = document.querySelector('.elements__list');
const cardTemplate = '#card-template';

export {posterPopup, posterPopupImage, posterPopupDescription, openPopup}

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
  const card = new Card({description, image}, cardTemplate);
  return card.generateCard();
}

initialCards.forEach((item) => {
  cardContainer.prepend(addCard(item.name, item.link));
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

document.querySelectorAll('.popup').forEach( popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    };
  });
});

function validate(formElement){
  const validator = new FormValidator(formElement, '.popup__form-input', '.popup__submit');
  validator.enableValidation();
}

document.querySelectorAll('.popup__form').forEach((formElement) => {
  validate(formElement);
});
