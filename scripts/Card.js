import {openPopup} from './index.js'

export default class Card {
    constructor(link, name, template) {
        this.name = name;
        this.link = link;
        this.template = template;
    }

    _createCardTemplate() {
        return document.querySelector(this.template).content.cloneNode(true);
    }

    _createCardListeners() {
        this._card.querySelector('.card__image').addEventListener('click', () => this._openPopupImage());
        this._card.querySelector('.card__like').addEventListener('click', this._like);
        this._card.querySelector('.card__delete').addEventListener('click', this._cardDelete);
    }

    _openPopupImage() {
        this._popupWithImage = document.querySelector('.popup_for_image');
        this._popupImage = this._popupWithImage.querySelector('.popup__image');
        this._popupImgCaption = this._popupWithImage.querySelector('.popup__figcaption');
        this._popupImage.src = this.link;
        this._popupImgCaption.textContent = this.name;
        this._popupImage.setAttribute('alt', `увеличенное изображение ${this.name}`)
        openPopup(this._popupWithImage);
    }

    _like(evt) {
        evt.target.classList.toggle('card__like_active')
    }

    _cardDelete(evt) {
        this._card = evt.target.closest('.card');
        this._card.remove();
    }

    createCard() {
        this._card = this._createCardTemplate();
        this._card.querySelector('.card__image').style.backgroundImage = `url(${this.link})`;
        this._card.querySelector('.card__title').textContent = this.name;
        this._createCardListeners();
        return this._card
    }

}