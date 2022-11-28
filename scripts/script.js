let editButton = document.querySelector('.profile__edit');
let closeButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');

let likes = document.querySelectorAll('.elements__item-like');

let form = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formName = document.querySelector('.popup__form-input_type_name');
let formDescription = document.querySelector('.popup__form-input_type_description');

function openPopup(){
  formName.value = profileName.textContent;
  formDescription.value = profileDescription.textContent;
  popup.classList.add('popup_opened');
};
function closePopup(){
  popup.classList.remove('popup_opened');
};

function likeElement(){
  this.classList.contains('elements__item-like_active')
  ? this.classList.remove('elements__item-like_active')
  : this.classList.add('elements__item-like_active');
}

function handleFormSubmit (evt){
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileDescription.textContent = formDescription.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
likes.forEach(like => like.addEventListener('click', likeElement));
form.addEventListener('submit', handleFormSubmit);
