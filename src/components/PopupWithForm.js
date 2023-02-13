import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, submit){
    super(popupSelector);
    this._submit = submit;
  }

  _getInputValues(){
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__form-input'));
    return Object.assign({}, ...(this._inputList.map(input => ({ [input.id]: input.value }))));
  }

  setEventListeners(){
    this._form = this._popup.querySelector('.popup__form');
    this._form.addEventListener('submit', (evt) => {this._submit(evt, this._getInputValues())});
    super.setEventListeners();
  }

  close(){
    this._form.reset()
    super.close();
  }
}