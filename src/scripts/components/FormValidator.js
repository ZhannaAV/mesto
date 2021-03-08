export default class FormValidator {
    constructor(obj, form) {
        this.form = form;
        this.inputList = Array.from(this.form.querySelectorAll(obj.inputSelector));
        this.invalidClass = obj.inputErrorClass;
        this.button = this.form.querySelector(obj.submitButtonSelector);
        this.inactiveButtonClass = obj.inactiveButtonClass;
    }

    _setNovalidate() {
        return this.form.setAttribute("novalidate", true);
    }

    /*вешает слушатели на инпуты внутри формы*/
    _setInputListeners() {
        this.inputList.forEach(input => {
            input.addEventListener('input', () => {
                this._input = input;
                this._isValidInput()
                this.toggleSubmitBtnState()
            })
        })
    }

    /*проверка валидности поля и включение/отключение подсказок*/
    _isValidInput() {
        this._error = document.querySelector(`.${this._input.id}-error`);
        if (!this._input.validity.valid) {
            // Если поле не проходит валидацию, покажет ошибку
            this._showInputError();
        } else {
            // Если проходит, скроет их
            this._hideInputError();
        }
    }

    /*выводит подсказки о некорректном вводе*/
    _showInputError() {
        this._input.classList.add(this.invalidClass);
        this._error.textContent = this._input.validationMessage
    }

    /*убирает подсказки о некорректном вводе*/
    _hideInputError() {
        this._input.classList.remove(this.invalidClass);
        this._error.textContent = ''
    }

    /*сбрасывание полей со старыми ошибками при включении валидации*/
    _switchOffErrors() {
        this.inputList.forEach(input => {
            this._input = input;
            this._error = document.querySelector(`.${this._input.id}-error`);
            this._hideInputError()
        })
    }

    /*проверка валидности формы*/
    _invalidForm() {
        return this.inputList.some((input) => {
            return !input.validity.valid;
        })
    }

    /*меняет состояние кнопки submit*/
    toggleSubmitBtnState() {
        if (this._invalidForm()) {
            this.button.classList.add(this.inactiveButtonClass)
            this.button.setAttribute("disabled", "true")
        } else {
            this.button.classList.remove(this.inactiveButtonClass)
            this.button.removeAttribute("disabled")
        }
    }

    enableValidation() {
        this._setNovalidate();
        this._setInputListeners();
    }

    renewValidation(){
        this._switchOffErrors();
        this.toggleSubmitBtnState();
    }
}