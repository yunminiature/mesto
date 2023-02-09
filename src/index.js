import './pages/index.css';

import {initialCards} from './scripts/constants.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js';
import Card from './scripts/Card.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';

console.log(initialCards);

const buttonEditProfile = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('.popup-profile');
const formEditProfile = profilePopup.querySelector('.popup__form');
const profileNameEdit = profilePopup.querySelector('.popup__form-input_type_name');
const profileDescriptionEdit = profilePopup.querySelector('.popup__form-input_type_description');

const buttonAddCard = document.querySelector('.profile__add');
const cardPopup = document.querySelector('.popup-card');
const formAddCard = cardPopup.querySelector('.popup__form');
const cardTitleAdd = cardPopup.querySelector('.popup__form-input_type_title');
const cardLinkAdd = cardPopup.querySelector('.popup__form-input_type_link');

const profileValidator = addValidator(formEditProfile);
const cardValidator = addValidator(formAddCard);

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  infoSelector: '.profile__description'
})

const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card-template', () => {
      const popup = new PopupWithImage(item, '.poster-popup');
      popup.open();
    });
    const cardElement = card.generateCard();
    cardSection.addItem(cardElement);
  }
}, '.elements__list');
cardSection.renderItems();

function addValidator(form){
  const validator = new FormValidator(form, '.popup__form-input', '.popup__submit');
  validator.enableValidation();
  return validator;
}

const profileEditPopup = new PopupWithForm('.popup-profile', (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(profileNameEdit.value, profileDescriptionEdit.value);
  profileEditPopup.close();
})

buttonEditProfile.addEventListener('click', () => {
  profileEditPopup.getInputValues(userInfo.getUserInfo());
  profileValidator.resetValidation();
  profileEditPopup.open();
});

const cardAddPopup = new PopupWithForm('.popup-card', (evt) => {
  evt.preventDefault();
  const card = new Card({
    name: cardTitleAdd.value,
    link: cardLinkAdd.value
  }, '#card-template');
  const cardElement = card.generateCard();
  cardSection.addItem(cardElement);
  cardAddPopup.close();
})

buttonAddCard.addEventListener('click', () => {
  cardValidator.resetValidation();
  cardAddPopup.open();
});