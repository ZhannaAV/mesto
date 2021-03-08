export default class Popup {
    constructor(selector) {
        this.popup = document.querySelector(selector);
        this._handleEscCloseBind = this._handleEscClose.bind(this);
        this._handleClickCloseBind = this._handleClickClose.bind(this)
    }

    setEventListeners() {
        this.popup.addEventListener('click', this._handleClickCloseBind)
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') this.close()
    }

    _handleClickClose (evt) {
        this._classList = evt.target.classList
        if (this._classList.contains('popup_opened') || this._classList.contains('popup__close')) this.close()
    }

    open() {
        document.addEventListener('keydown', this._handleEscCloseBind);
        this.popup.classList.add('popup_opened');
    }

    close() {
        document.removeEventListener('keydown', this._handleEscCloseBind);
        this.popup.classList.remove('popup_opened');
    }
}

