import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor({name, link}, popupSelector){
    super(popupSelector);
    this._name = name;
    this._link = link
  }

  open(){
    this._image = this._popup.querySelector('.poster-popup__image');
    this._description = this._popup.querySelector('.poster-popup__description');

    this._image.src = this._link;
    this._image.alt = this._name;
    this._description.textContent = this._name;

    super.open();
  }

  close(){
    super.close();
  };
}