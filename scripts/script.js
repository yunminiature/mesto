const cardContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

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

const editProfileButton = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('.popup-profile');
const closeProfilePopupButton = profilePopup.querySelector('.popup__close');
const editProfileForm = profilePopup.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const editProfileName = profilePopup.querySelector('.popup__form-input_type_name');
const editProfileDescription = profilePopup.querySelector('.popup__form-input_type_description');

function openPopup(node){
  node.classList.add('popup_opened');
}
function closePopup(node){
  node.classList.remove('popup_opened');
}

function openProfilePopup(){
  editProfileName.value = profileName.textContent;
  editProfileDescription.value = profileDescription.textContent;
  openPopup(profilePopup);
};
editProfileButton.addEventListener('click', openProfilePopup);

function closeProfilePopup(){
  closePopup(profilePopup);
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
  addCardTitle.reset();
  addCardLink.reset();
  openPopup(cardPopup);
};
addCardButton.addEventListener('click', openCardPopup);

function closeCardPopup(){
  closePopup(cardPopup);
};
closeCardPopupButton.addEventListener('click', closeCardPopup);

function handleCardFormSubmit (evt){
  evt.preventDefault();
  addCard(addCardTitle.value, addCardLink.value);
  closeCardPopup();
}
addCardForm.addEventListener('submit', handleCardFormSubmit);

const posterPopup = document.querySelector('.poster-popup');
const poster = posterPopup.querySelector('.poster-popup__image');
const posterDescription = posterPopup.querySelector('.poster-popup__description');
const closePosterPopup = posterPopup.querySelector('.poster-popup__close');
closePosterPopup.addEventListener('click', () => closePopup(posterPopup));
function openPosterPopup(name, link){
  poster.setAttribute('src', link);
  poster.setAttribute('alt', name);
  posterDescription.textContent = name;
  openPopup(posterPopup);
}
