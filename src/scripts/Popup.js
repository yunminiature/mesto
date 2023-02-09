export default class Popup{
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose(evt){
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners(){
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
        this.close();
      };
    });
  }

  open(){
    document.addEventListener('keydown', (evt) => {this._handleEscClose(evt)});
    this.setEventListeners();
    this._popup.classList.add('popup_opened');
  }

  close(){
    document.removeEventListener('keydown', (evt) => {this._handleEscClose(evt)});
    this._popup.classList.remove('popup_opened');
  }
}