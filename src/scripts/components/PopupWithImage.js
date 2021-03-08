import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._popupImage = this.popup.querySelector('.popup__image');
        this._popupImgCaption = this.popup.querySelector('.popup__figcaption');
    }

    open(item) {
        this._popupImage.src = item.link;
        this._popupImgCaption.textContent = item.name;
        this._popupImage.setAttribute('alt', `увеличенное изображение ${item.name}`)
        super.open()
    }
}