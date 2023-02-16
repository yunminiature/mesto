import './index.css';

import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../api/Api.js'

const buttonEditProfile = document.querySelector('.profile__edit');
const buttonEditAvatar = document.querySelector('.profile__avatar');
const profilePopup = document.querySelector('.popup-profile');
const formEditProfile = profilePopup.querySelector('.popup__form');
const profileNameEdit = profilePopup.querySelector('.popup__form-input_type_name');
const profileDescriptionEdit = profilePopup.querySelector('.popup__form-input_type_description');
const buttonAddCard = document.querySelector('.profile__add');
const formAddCard = document.querySelector('.popup-card').querySelector('.popup__form');


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  authorization: '0000691e-e91a-4354-99a8-58e471776d5e'
});

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  infoSelector: '.profile__description',
  photoSelector: '.profile__avatar-photo'
})

const cardPopup = new PopupWithImage('.poster-popup');
const cardAddPopup = new PopupWithForm('.popup-card', (evt, formData) => {
  evt.preventDefault();
  document.querySelector('.popup-card').querySelector('.popup__submit').textContent = 'Сохранение...';
  api.addCard(formData['title-input'], formData['link-input'])
    .then(() => {
      updateCards();
      cardAddPopup.close();
      document.querySelector('.popup-card').querySelector('.popup__submit').textContent = 'Сохранить';
    })
    .catch(err => console.log(err))
})
const cardDeletePopup = new PopupWithForm('.delete-popup', (evt) => {
  evt.preventDefault();
  //api.deleteCard(id)
    //.catch(err => console.log(err))
})
const profileEditPopup = new PopupWithForm('.popup-profile', (evt, formData) => {
  evt.preventDefault();
  document.querySelector('.popup-profile').querySelector('.popup__submit').textContent = 'Сохранение...';
  api.editUserData(formData['name-input'], formData['description-input'])
    .then(userData => {
      userInfo.setUserInfo(userData.name, userData.about);
      profileEditPopup.close();
      document.querySelector('.popup-profile').querySelector('.popup__submit').textContent = 'Сохранить';
    })
    .catch(err => console.log(err))  
})
const avatarEditPopup = new PopupWithForm('.popup-avatar', (evt, formData) => {
  evt.preventDefault();
  document.querySelector('.popup-avatar').querySelector('.popup__submit').textContent = 'Сохранение...';
  api.editUserPhoto(formData['link-input'])
    .then(userData => {
      userInfo.setUserPhoto(userData.avatar);
      avatarEditPopup.close();
      document.querySelector('.popup-avatar').querySelector('.popup__submit').textContent = 'Сохранить';
    })
    .catch(err => console.log(err)) 
})
const profileValidator = addValidator(formEditProfile);
const cardValidator = addValidator(formAddCard);

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
    deleteCard: () => {
      cardDeletePopup.open();
    }
  });
  return card.generateCard()
}

cardPopup.setEventListeners();
cardAddPopup.setEventListeners();
cardDeletePopup.setEventListeners();
profileEditPopup.setEventListeners();
avatarEditPopup.setEventListeners();

formAddCard.reset();

buttonEditProfile.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  profileNameEdit.value = userData.userName;
  profileDescriptionEdit.value = userData.userInfo;
  profileValidator.resetValidation();
  profileEditPopup.open();
});
buttonEditAvatar.addEventListener('click', () => {
  avatarEditPopup.open();
})

buttonAddCard.addEventListener('click', () => {
  cardValidator.resetValidation();
  cardAddPopup.open();
})

api.getUserData()
  .then(userData => {
    userInfo.setUserId(userData._id);
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setUserPhoto(userData.avatar);
  })
  .catch(err => console.log(err))

function updateCards (){
  api.getInitialCards()
    .then(initialCards => {
      const cardSection = new Section({
        items: Array.from(initialCards),
        renderer: (item) => {
          const cardElement = createCard(item, '#card-template', () => {
            cardPopup.open(item);
          }, api.likeCard, api.dontLikeCard);
          cardSection.addItem(cardElement);
        }
      }, '.elements__list');
      cardSection.renderItems();
    })
    .catch(err => console.log(err))
}
updateCards();





