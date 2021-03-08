export default class Card {
    constructor(item, template, handleCardClick) {
        this.name = item.name;
        this.link = item.link;
        this.template = template;
        this._handleCardClick = handleCardClick
    }

    _createCardTemplate() {
        return document.querySelector(this.template).content.cloneNode(true);
    }

    _createCardListeners() {
        this._card.querySelector('.card__image').addEventListener('click', () => this._handleCardClick());
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