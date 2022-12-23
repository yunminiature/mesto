export default class FormValidator{
  constructor(selectors){
    this._selectors = selectors;
  }

  _showInputError(formElement, inputElement, errorMessage){
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
  };
  _hideInputError(formElement, inputElement){
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
  };
  _checkInputValidity(formElement, inputElement){
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
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
  _setEventListeners(inputSelector, submitButtonSelector, formElement){
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input',() => {
          this._checkInputValidity(formElement, inputElement);
          this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation(){
    const formList = Array.from(document.querySelectorAll(this._selectors.formSelector));
    formList.forEach((formElement) => {
      this._setEventListeners(this._selectors.inputSelector, this._selectors.submitButtonSelector, formElement);
    });
  };
}