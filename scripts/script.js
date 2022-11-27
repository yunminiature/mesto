let editButton = document.querySelector('.profile__edit');
let closeButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');

let likes = document.querySelectorAll('.elements__item-like');

let form = document.querySelector('.popup__form');
let name = document.querySelector('.profile__name');
let description = document.querySelector('.profile__description');
let formName = document.querySelector('.popup__form-input_type_name');
let formDescription = document.querySelector('.popup__form-input_type_description');

function openPopup(){
  formName.value = name.textContent;
  formDescription.value = description.textContent;
  popup.classList.add('popup_opened');
};
function closePopup(){
  popup.classList.remove('popup_opened');
};

function likeElement(){
  this.classList.contains("elements__item-like_active")
  ? this.classList.remove('elements__item-like_active')
  : this.classList.add('elements__item-like_active');
}

function handleFormSubmit (evt){
  evt.preventDefault();
  name.textContent = formName.value;
  description.textContent = formDescription.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
likes.forEach(like => like.addEventListener('click', likeElement));
form.addEventListener('submit', handleFormSubmit);
