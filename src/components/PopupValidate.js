import Popup from "./Popup.js";

export default class PopupValidate extends Popup{
  constructor(popupSelector, submit, open){
    super(popupSelector);
    this._submit = submit;
    this._open = open;
  }

  setButtonText(text){
    this._button.textContent = text;
  }

  open(id){
    this._form = this._popup.querySelector('.popup__form');
    this._form.addEventListener('submit', (evt) => {      
      this._submit(evt, id, this._open);
    });
    super.open()
  }
}