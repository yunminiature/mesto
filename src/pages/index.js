import './index.css';

import {initialCards} from '../utils/constants.js';
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
const formAddCard = document.querySelector('.popup-card').querySelector('.popup__form');

const profileValidator = addValidator(formEditProfile);
const cardValidator = addValidator(formAddCard);

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  infoSelector: '.profile__description'
})

function createCard(data, template, handleCardClick){
  const card = new Card(data, template, handleCardClick);
  return card.generateCard()
}

const cardPopup = new PopupWithImage('.poster-popup'); 
cardPopup.setEventListeners();

const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item, '#card-template', () => {
      cardPopup.open(item);
    });
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
  userInfo.setUserInfo(formData['name-input'], formData['description-input']);
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
    name: formData['title-input'],
    link: formData['link-input']
  }
  evt.preventDefault();  
  const cardElement = createCard(cardItem, '#card-template',  () => {
    cardPopup.open(cardItem)
  });
  cardSection.addItem(cardElement);
  cardAddPopup.close();
})
cardAddPopup.setEventListeners();
formAddCard.reset();

buttonAddCard.addEventListener('click', () => {
  cardValidator.resetValidation();
  cardAddPopup.open();
})