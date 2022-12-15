const cardContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

const buttonEditProfile = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('.popup-profile');
const buttonCloseProfilePopup = profilePopup.querySelector('.popup__close');
const formEditProfile = profilePopup.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileNameEdit = profilePopup.querySelector('.popup__form-input_type_name');
const profileDescriptionEdit = profilePopup.querySelector('.popup__form-input_type_description');

const buttonAddCard = document.querySelector('.profile__add');
const cardPopup = document.querySelector('.popup-card');
const buttonCloseCardPopup = cardPopup.querySelector('.popup__close');
const formAddCard = cardPopup.querySelector('.popup__form');
const cardTitleAdd = cardPopup.querySelector('.popup__form-input_type_title');
const cardLinkAdd = cardPopup.querySelector('.popup__form-input_type_link');

const posterPopup = document.querySelector('.poster-popup');
const poster = posterPopup.querySelector('.poster-popup__image');
const posterDescription = posterPopup.querySelector('.poster-popup__description');
const posterPopupClose = posterPopup.querySelector('.poster-popup__close');

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

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

function openPopup(node){
  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__submit'
  });
  node.classList.add('popup_opened');
  document.addEventListener('keydown', evt => {
    closeByEsc(evt);
  })
}
function closePopup(node){
  node.classList.remove('popup_opened');
  document.removeEventListener('keydown', evt => {
    closeByEsc(evt);
  })
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

function openPosterPopup(name, link){
  poster.setAttribute('src', link);
  poster.setAttribute('alt', name);
  posterDescription.textContent = name;
  openPopup(posterPopup);
}

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

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__submit'
});

buttonEditProfile.addEventListener('click', openProfilePopup);
formEditProfile.addEventListener('submit', handleProfileFormSubmit);
buttonCloseProfilePopup.addEventListener('click', closeProfilePopup);

buttonAddCard.addEventListener('click', openCardPopup);
formAddCard.addEventListener('submit', handleCardFormSubmit);
buttonCloseCardPopup.addEventListener('click', closeCardPopup);

posterPopupClose.addEventListener('click', () => closePopup(posterPopup));

document.addEventListener('click', evt =>{
  if(evt.target.classList.contains('popup')){
    closePopup(document.querySelector('.popup_opened'));
  };
});
