export default class FormValidator{
  constructor(formElement, inputSelector, submitButtonSelector){
    this._formElement = formElement
    this._inputList = Array.from(this._formElement.querySelectorAll(inputSelector))
    this._buttonElement = this._formElement.querySelector(submitButtonSelector)
  }

  _showInputError(inputElement, errorMessage){
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
  };
  _hideInputError(inputElement){
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
  };
  _checkInputValidity(inputElement){
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  _blockButton(){
    this._buttonElement.setAttribute('disabled', 'disabled');
  }
  _toggleButtonState(){
    if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute('disabled', 'disabled');
    } else {
      this._buttonElement.removeAttribute('disabled');
    }
  };
  _hasInvalidInput(){
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  _setEventListeners(){
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input',() => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
      });
    });
  };

  enableValidation(){
    this._setEventListeners();
  };

  resetValidation(){
    this._inputList.forEach((input) => {
      this._hideInputError(input)
    })
    this._blockButton()
  } 
}