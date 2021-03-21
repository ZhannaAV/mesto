import {personalData} from "../utils/constants";

export default class Card {
    constructor(item, template, handleCardClick, handleDeleteClick, handleLikeClick) {
        this.name = item.name;
        this.link = item.link;
        this.template = template;
        this._likesArr = item.likes;
        this._idOwner = item.owner._id;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick
        this._likeBind = this._like.bind(this)
    }

    _createCardTemplate() {
        return document.querySelector(this.template).content.cloneNode(true);
    }

    _createCardListeners() {
        this._card.querySelector('.card__image').addEventListener('click', () => this._handleCardClick());
        this._card.querySelector('.card__like').addEventListener('click', this._likeBind);
        this._buttonDelete = this._card.querySelector('.card__delete');
        if (this._idOwner === personalData.id) {
            this._buttonDelete.addEventListener('click', (evt) => this._handleDeleteClick(evt));
        } else this._buttonDelete.remove()
    }

    _likeExist(){
        return  this._likesArr.some(owner => {
            return owner._id === personalData.id
        })
    }

    _likesNumber() {
        return this._likesArr.length;
    }

    _like(evt) {
        this._handleLikeClick(this._likeExist(), evt.target)
    }

    visualLike(element, result) {
        element.classList.toggle('card__like_active');
        this._likesArr = result.likes
        this._counter = element.closest('.card__like-group').querySelector('.card__like-counter');
        this._counter.textContent = this._likesNumber()
    }

    createCard() {
        this._card = this._createCardTemplate();
        this._card.querySelector('.card__image').style.backgroundImage = `url(${this.link})`;
        this._card.querySelector('.card__title').textContent = this.name;
        this._card.querySelector('.card__like-counter').textContent = this._likesNumber();
        if (this._likeExist()) this._card.querySelector('.card__like').classList.add('card__like_active')
        this._createCardListeners();
        return this._card
    }

}