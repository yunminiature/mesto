import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup{
  constructor(popupSelector, submit){
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
  }

  setButtonText(text){
    this._button.textContent = text;
  }

  setEventListeners(){
    this._form.addEventListener('submit', (evt) => {      
      this._submit(evt, this._id, this._card);
    });
    super.setEventListeners()
  }

  open(id, card){
    this._id = id;
    this._card = card;    
    super.open()
  }
}