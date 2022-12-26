export default class FormValidator{
  constructor(formElement, inputSelector, submitButtonSelector){
    this._formElement = formElement
    this._inputSelector = inputSelector
    this._submitButtonSelector = submitButtonSelector
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
  _toggleButtonState(inputList, buttonElement){
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      buttonElement.removeAttribute('disabled');
    }
  };
  _hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  _setEventListeners(){
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input',() => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation(){
    this._setEventListeners();
  };

  resetValidation() {
    inputList.forEach((input) => {
      this._hideInputError(input)
    })
    this._toggleButtonState()
  } 
}