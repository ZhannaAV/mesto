import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
    constructor(selector,item) {
        super(selector);
        this.name = item.name;
        this.link = item.link;
    }

    open(){
        this._popupImage = this.popup.querySelector('.popup__image');
        this._popupImgCaption = this.popup.querySelector('.popup__figcaption');
        this._popupImage.src = this.link;
        this._popupImgCaption.textContent = this.name;
        this._popupImage.setAttribute('alt', `увеличенное изображение ${this.name}`)
        super.open()
    }
}