import {openPopupImage} from './index.js'

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
        this._card.querySelector('.card__image').addEventListener('click', () => openPopupImage(this.link, this.name));
        this._card.querySelector('.card__like').addEventListener('click', this._like);
        this._card.querySelector('.card__delete').addEventListener('click', this._cardDelete);
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