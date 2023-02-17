const buttonEditProfile = document.querySelector('.profile__edit');
const buttonEditAvatar = document.querySelector('.profile__avatar');
const profilePopup = document.querySelector('.popup-profile');
const formEditProfile = profilePopup.querySelector('.popup__form');
const profileNameEdit = profilePopup.querySelector('.popup__form-input_type_name');
const profileDescriptionEdit = profilePopup.querySelector('.popup__form-input_type_description');
const buttonAddCard = document.querySelector('.profile__add');
const formAddCard = document.querySelector('.popup-card').querySelector('.popup__form');
const formEditAvatar = document.querySelector('.popup-avatar').querySelector('.popup__form');

export {buttonEditProfile, buttonEditAvatar, formEditProfile, profileNameEdit, profileDescriptionEdit, buttonAddCard, formAddCard, formEditAvatar}