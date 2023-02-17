import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, submit, buttonSelector){
    super(popupSelector);
    this._submit = submit;
    this._button = this._popup.querySelector(buttonSelector);
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__form-input'));
  }

  _getInputValues(){
    return Object.assign({}, ...(this._inputList.map(input => ({ [input.id]: input.value }))));
  }

  setEventListeners(){
    this._form = this._popup.querySelector('.popup__form');
    this._form.addEventListener('submit', (evt) => {      
      this._submit(evt, this._getInputValues());
    });
    super.setEventListeners();
  }

  setButtonText(text){
    this._button.textContent = text;
  }

  close(){
    this._form.reset()
    super.close();
  }
}