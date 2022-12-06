const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const cardContainer = document.querySelector('.elements__list');

const addCard = (name, link) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.elements__item').cloneNode(true);
  card.querySelector('.elements__item-poster').setAttribute('src', link);
  card.querySelector('.elements__item-poster').setAttribute('alt', name);
  card.querySelector('.elements__item-title').textContent = name;
  card.querySelector('.elements__item__popup__image').setAttribute('src', link);
  card.querySelector('.elements__item__popup__image').setAttribute('alt', name);
  card.querySelector('.elements__item__popup__description').textContent = name;
  card.querySelector('.elements__item-like').addEventListener('click', () => card.querySelector('.elements__item-like').classList.toggle('elements__item-like_active'));
  card.querySelector('.elements__item-delete').addEventListener('click', () => card.remove());
  card.querySelector('.elements__item-poster').addEventListener('click', () => card.querySelector('.elements__item__popup').classList.add('elements__item__popup_opened'));
  card.querySelector('.elements__item__popup__image').addEventListener('click', () => card.querySelector('.elements__item__popup').classList.remove('elements__item__popup_opened'));
  card.querySelector('.elements__item__popup__close').addEventListener('click', () => card.querySelector('.elements__item__popup').classList.remove('elements__item__popup_opened'));
  cardContainer.append(card);
}

initialCards.forEach((item) => {
  addCard(item.name, item.link);
});

const editProfileButton = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('.popup-profile');
const closeProfilePopupButton = profilePopup.querySelector('.popup__close');
const editProfileForm = profilePopup.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const editProfileName = profilePopup.querySelector('.popup__form-input_type_name');
const editProfileDescription = profilePopup.querySelector('.popup__form-input_type_description');

function openProfilePopup(){
  editProfileName.value = profileName.textContent;
  editProfileDescription.value = profileDescription.textContent;
  profilePopup.classList.add('popup_opened');
};
editProfileButton.addEventListener('click', openProfilePopup);

function closeProfilePopup(){
  profilePopup.classList.remove('popup_opened');
};
closeProfilePopupButton.addEventListener('click', closeProfilePopup);

function handleProfileFormSubmit (evt){
  evt.preventDefault();
  profileName.textContent = editProfileName.value;
  profileDescription.textContent = editProfileDescription.value;
  closeProfilePopup();
}
editProfileForm.addEventListener('submit', handleProfileFormSubmit);

const addCardButton = document.querySelector('.profile__add');
const cardPopup = document.querySelector('.popup-card');
const closeCardPopupButton = cardPopup.querySelector('.popup__close');
const addCardForm = cardPopup.querySelector('.popup__form');
const addCardTitle = cardPopup.querySelector('.popup__form-input_type_title');
const addCardLink = cardPopup.querySelector('.popup__form-input_type_link');

function openCardPopup(){
  cardPopup.classList.add('popup_opened');
};
addCardButton.addEventListener('click', openCardPopup);

function closeCardPopup(){
  cardPopup.classList.remove('popup_opened');
};
closeCardPopupButton.addEventListener('click', closeCardPopup);

function handleCardFormSubmit (evt){
  evt.preventDefault();
  addCard(addCardTitle.value, addCardLink.value);
  closeCardPopup();
}
addCardForm.addEventListener('submit', handleCardFormSubmit);
