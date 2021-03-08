import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(selector, handleSubmitForm) {
        super(selector);
        this._form = this.popup.querySelector('.popup__form');
        this._handleSubmitForm = handleSubmitForm;
        this._handleSubmitFormBind = this._handleSubmit.bind(this);
    }
//собирает значения полей и возвращает в виде объекта
    getInputValues() {
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
        this._inputDataList = {};
        this._inputList.forEach(input => {
            this._inputDataList[input.id] = input.value
        });
        return this._inputDataList
    }

    _handleSubmit(evt) {
        evt.preventDefault();
        //следующая строчка страхует от задвоения клика, т.к. попап медленно исчезает
        this._form.querySelector('.popup__submit-button').setAttribute("disabled", "true");
        this._handleSubmitForm();
        this.close()
    }

    _setEventListeners() {
        this._form.addEventListener('submit', this._handleSubmitFormBind);
        super._setEventListeners()
    }

    close() {
        this._form.reset();
        super.close()
    }
}