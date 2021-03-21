import {personalData} from "../utils/constants";

export default class Card {
    constructor(item, template, handleCardClick, handleDeleteClick) {
        this.name = item.name;
        this.link = item.link;
        this.template = template;
        this._handleCardClick = handleCardClick;
        this._likesNumber = item.likes.length;
        this._idOwner = item.owner._id;
        this._handleDeleteClick = handleDeleteClick
    }

    _createCardTemplate() {
        return document.querySelector(this.template).content.cloneNode(true);
    }

    _createCardListeners() {
        this._card.querySelector('.card__image').addEventListener('click', () => this._handleCardClick());
        this._card.querySelector('.card__like').addEventListener('click', this._like);
        this._buttonDelete = this._card.querySelector('.card__delete');
        if (this._idOwner === personalData.id) {
            this._buttonDelete.addEventListener('click',(evt) => this._handleDeleteClick(evt));
        } else this._buttonDelete.remove()
    }

    _like(evt) {
        evt.target.classList.toggle('card__like_active')
    }

    cardDelete(evt) {
        this._card = evt.target.closest('.card');
        this._card.remove();
    }

    createCard() {
        this._card = this._createCardTemplate();
        this._card.querySelector('.card__image').style.backgroundImage = `url(${this.link})`;
        this._card.querySelector('.card__title').textContent = this.name;
        this._card.querySelector('.card__like-counter').textContent = this._likesNumber;
        this._createCardListeners();
        return this._card
    }

}