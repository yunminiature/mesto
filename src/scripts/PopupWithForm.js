import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, submit){
    super(popupSelector);
    this._submit = submit;
  }

  getInputValues({userName, userInfo}){
    this._popup.querySelector('.popup__form-input_type_name').value = userName;
    this._popup.querySelector('.popup__form-input_type_description').value = userInfo;
  }

  setEventListeners(){
    this._form = this._popup.querySelector('.popup__form');
    this._form.addEventListener('submit', this._submit);
    super.setEventListeners();
  }

  close(){
    this._form.reset()
    super.close();
  }
}