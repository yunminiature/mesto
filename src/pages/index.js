import './index.css';

import {initialCards} from '../components/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

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

function createCard(data, template, handleCardClick){
  return new Card(data, template, handleCardClick)
}

const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const popup = new PopupWithImage('.poster-popup');
    popup.setEventListeners();
    const card = createCard(item, '#card-template', () => {
      popup.open(item);
    })
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

const profileEditPopup = new PopupWithForm('.popup-profile', (evt, formData) => {
  evt.preventDefault();
  userInfo.setUserInfo(formData[0].value, formData[1].value);
  profileEditPopup.close();
})
profileEditPopup.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  profileNameEdit.value = userData.userName;
  profileDescriptionEdit.value = userData.userInfo;
  profileValidator.resetValidation();
  profileEditPopup.open();
});

const cardAddPopup = new PopupWithForm('.popup-card', (evt, formData) => {
  const cardItem = {
    name: formData[0].value,
    link: formData[1].value
  }
  evt.preventDefault();
  const popup = new PopupWithImage('.poster-popup');
  popup.setEventListeners();
  const card = createCard(cardItem, '#card-template',  () => {
    popup.open(cardItem)
  });    
  const cardElement = card.generateCard();
  cardSection.addItem(cardElement);
  cardAddPopup.close();
})
cardAddPopup.setEventListeners();
formAddCard.reset();

buttonAddCard.addEventListener('click', () => {
  cardValidator.resetValidation();
  cardAddPopup.open();
})