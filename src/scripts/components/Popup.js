export default class Popup {
    constructor(selector) {
        this.popup = document.querySelector(selector);
        this._handleEscCloseBind = this._handleEscClose.bind(this);
        this._handleClickCloseBind = this._handleClickClose.bind(this)
    }
//делаю метод приватным, т.к. считаю что это наиболее отражает смысл инкапсуляции и не засоряет index.js ненужной
// там инфой. Если неправа - прошу объяснить почему)
    _setEventListeners() {
        document.addEventListener('keydown', this._handleEscCloseBind);
        this.popup.addEventListener('click', this._handleClickCloseBind)
    }

    _removeEventListeners() {
        document.removeEventListener('keydown', this._handleEscCloseBind);
        this.popup.removeEventListener('click', this._handleClickCloseBind)
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') this.close()
    }

    _handleClickClose (evt) {
        this._classList = evt.target.classList
        if (this._classList.contains('popup_opened') || this._classList.contains('popup__close')) this.close()
    }

    open() {
        this.popup.classList.add('popup_opened');
        this._setEventListeners()
    }

    close() {
        this.popup.classList.remove('popup_opened');
        this._removeEventListeners()
    }
}

