import Popup from './Popup.js'

export default class PopupSubmit extends Popup {
    constructor(selector, handleSubmitForm) {
        super(selector);
        this._form = this.popup.querySelector('.popup__form');
        this._handleSubmitForm = handleSubmitForm;
        this._handleSubmitFormBind = this._handleSubmit.bind(this);
    }

    open(data, evt) {
        this._data = data
        this._element = evt.target;
        super.open()
    }

    _handleSubmit(evt) {
        evt.preventDefault();
        this._handleSubmitForm(this._data, this._element);
        this.close()
    }

    setEventListeners() {
        this._form.addEventListener('submit', this._handleSubmitFormBind);
        super.setEventListeners()
    }
}