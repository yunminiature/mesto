const cardContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

const editProfileButton = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('.popup-profile');
const closeProfilePopupButton = profilePopup.querySelector('.popup__close');
const editProfileForm = profilePopup.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const editProfileName = profilePopup.querySelector('.popup__form-input_type_name');
const editProfileDescription = profilePopup.querySelector('.popup__form-input_type_description');

const addCardButton = document.querySelector('.profile__add');
const cardPopup = document.querySelector('.popup-card');
const closeCardPopupButton = cardPopup.querySelector('.popup__close');
const addCardForm = cardPopup.querySelector('.popup__form');
const addCardTitle = cardPopup.querySelector('.popup__form-input_type_title');
const addCardLink = cardPopup.querySelector('.popup__form-input_type_link');

const posterPopup = document.querySelector('.poster-popup');
const poster = posterPopup.querySelector('.poster-popup__image');
const posterDescription = posterPopup.querySelector('.poster-popup__description');
const closePosterPopup = posterPopup.querySelector('.poster-popup__close');

const createCard = (name, link) => {
  const card = cardTemplate.querySelector('.elements__item').cloneNode(true);
  const poster = card.querySelector('.elements__item-poster');
  poster.setAttribute('src', link);
  poster.setAttribute('alt', name);
  card.querySelector('.elements__item-title').textContent = name;
  card.querySelector('.elements__item-like').addEventListener('click', () => card.querySelector('.elements__item-like').classList.toggle('elements__item-like_active'));
  card.querySelector('.elements__item-delete').addEventListener('click', () => card.remove());
  poster.addEventListener('click', (event) => openPosterPopup(name, link));
  return card;
}
const addCard = (name, link) => {
  cardContainer.prepend(createCard(name, link));
}
initialCards.forEach((item) => {
  addCard(item.name, item.link);
});

function openPopup(node){
  node.classList.add('popup_opened');
  node.addEventListener('click', evt =>{
    if(evt.target.classList.contains('popup')){
      closePopup(node);
    };
  });
  document.addEventListener('keydown', evt => {
    if(evt.keyCode === 27){
      closePopup(node);
    };
  })
}
function closePopup(node){
  node.classList.remove('popup_opened');
  node.removeEventListener('click', evt =>{
    if(evt.target.classList.contains('popup')){
      closePopup(node);
    };
  })
  document.removeEventListener('keydown', evt => {
    if(evt.keyCode === 27){
      closePopup(node);
    };
  })
}

function openProfilePopup(){
  editProfileName.value = profileName.textContent;
  editProfileDescription.value = profileDescription.textContent;
  openPopup(profilePopup);
};
function closeProfilePopup(){
  closePopup(profilePopup);
};

function openCardPopup(){
  addCardForm.reset();
  openPopup(cardPopup);
};
function closeCardPopup(){
  closePopup(cardPopup);
};

function openPosterPopup(name, link){
  poster.setAttribute('src', link);
  poster.setAttribute('alt', name);
  posterDescription.textContent = name;
  openPopup(posterPopup);
}

function handleProfileFormSubmit(evt){
  evt.preventDefault();
  profileName.textContent = editProfileName.value;
  profileDescription.textContent = editProfileDescription.value;
  closeProfilePopup();
}

function handleCardFormSubmit (evt){
  evt.preventDefault();
  addCard(addCardTitle.value, addCardLink.value);
  closeCardPopup();
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
};
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = '';
};
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.removeAttribute('disabled');
  }
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__form-input'));
  const buttonElement = formElement.querySelector('.popup__submit');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};
enableValidation();

editProfileButton.addEventListener('click', openProfilePopup);
editProfileForm.addEventListener('submit', handleProfileFormSubmit);
closeProfilePopupButton.addEventListener('click', closeProfilePopup);

addCardButton.addEventListener('click', openCardPopup);
addCardForm.addEventListener('submit', handleCardFormSubmit);
closeCardPopupButton.addEventListener('click', closeCardPopup);

closePosterPopup.addEventListener('click', () => closePopup(posterPopup));
