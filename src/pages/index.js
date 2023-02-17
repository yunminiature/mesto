import './index.css';

import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupValidate from '../components/PopupValidate';
import UserInfo from '../components/UserInfo.js';
import Api from '../api/Api.js'
import {buttonEditProfile, buttonEditAvatar, formEditProfile, profileNameEdit, profileDescriptionEdit, buttonAddCard, formAddCard, formEditAvatar} from '../components/constants.js'

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  authorization: '0000691e-e91a-4354-99a8-58e471776d5e'
});

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  infoSelector: '.profile__description',
  photoSelector: '.profile__avatar-photo'
})

const cardSection = new Section((item) => {
  const cardElement = createCard(item, '#card-template', () => {
    cardPopup.open(item);
  }, api.likeCard, api.dontLikeCard);
  cardSection.addItem(cardElement);
}, '.elements__list')

const cardPopup = new PopupWithImage('.poster-popup');
const cardAddPopup = new PopupWithForm('.popup-card', (evt, formData) => {
  evt.preventDefault();
  cardAddPopup.setButtonText('Сохранение...');
  api.addCard(formData['title-input'], formData['link-input'])
    .then((data) => {
      const cardElement = createCard(data, '#card-template', () => {
        cardPopup.open(item);
      }, api.likeCard, api.dontLikeCard);
      cardSection.addItem(cardElement);
      cardAddPopup.close();
    })
    .catch(err => console.log(err))
    .finally(() => cardAddPopup.setButtonText('Сохранить'))
}, '.popup__submit')
const cardDeletePopup = new PopupValidate('.delete-popup', (evt, id) => {
  evt.preventDefault();
  api.deleteCard(id)
    .then(() => {
      cardDeletePopup.close()
      //handleDeleteCard()
    })
    .catch(err => console.log(err))
}, '.popup__submit')
const profileEditPopup = new PopupWithForm('.popup-profile', (evt, formData) => {
  evt.preventDefault();
  cardAddPopup.setButtonText('Сохранение...');
  api.editUserData(formData['name-input'], formData['description-input'])
    .then(userData => {
      userInfo.setUserInfo(userData.name, userData.about);
      profileEditPopup.close();
    })
    .catch(err => console.log(err))
    .finally(() => cardAddPopup.setButtonText('Сохранить'))  
}, '.popup__submit')
const avatarEditPopup = new PopupWithForm('.popup-avatar', (evt, formData) => {
  evt.preventDefault();
  cardAddPopup.setButtonText('Сохранение...');
  api.editUserPhoto(formData['url-input'])
    .then(userData => {
      userInfo.setUserPhoto(userData.avatar);
      avatarEditPopup.close();
    })
    .catch(err => console.log(err)) 
    .finally(() => cardAddPopup.setButtonText('Сохранить'))
}, '.popup__submit')

const profileValidator = addValidator(formEditProfile);
const cardValidator = addValidator(formAddCard);
const avatarValidator = addValidator(formEditAvatar);

function addValidator(form){
  const validator = new FormValidator(form, '.popup__form-input', '.popup__submit');
  validator.enableValidation();
  return validator;
}
function createCard(data, template, handleCardClick){
  const card = new Card(userInfo.getUserId(), data, template, handleCardClick, {
    likeCard: (id) => {
      api.likeCard(id)
        .then(data => {
          card.handleLikeCard(data)
        })
      .catch(err => console.log(err))
    }, 
    dontLikeCard: (id) => {
      api.dontLikeCard(id)
        .then(data => {
          card.handleDontLikeCard(data)
        })
      .catch(err => console.log(err))
    },
    deleteCard: (id) => {
      cardDeletePopup.open(id);
      //card.handleDeleteCard()
    }
  });
  return card.generateCard()
}

cardPopup.setEventListeners();
cardAddPopup.setEventListeners();
cardDeletePopup.setEventListeners();
profileEditPopup.setEventListeners();
avatarEditPopup.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  profileNameEdit.value = userData.userName;
  profileDescriptionEdit.value = userData.userInfo;
  profileValidator.resetValidation();
  profileEditPopup.open();
});
buttonEditAvatar.addEventListener('click', () => {
  avatarValidator.resetValidation();
  avatarEditPopup.open();
})

buttonAddCard.addEventListener('click', () => {
  cardValidator.resetValidation();
  formAddCard.reset();
  cardAddPopup.open();
})

api.getUserData()
  .then(userData => {
    userInfo.setUserId(userData._id);
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setUserPhoto(userData.avatar);

    api.getInitialCards()
      .then(initialCards => {
        cardSection.renderItems(initialCards);
      })
      .catch(err => console.log(err))
  })
  .catch(err => console.log(err))







