import Card from './Card.js';
import UserInfo from './UserInfo.js';
import FormValidator from "./FormValidator.js";
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

const initialCards = [
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    }
];

//данные для валидации через js
const obj = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__input-error'
}

/*NodeList с карточками*/
const cards = document.querySelector('.cards');
const cardClassTemplate = '.template';

/*кнопки*/
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

/*переменные для попапа редактирование профайла*/
const popupFormProfile = document.querySelector('.popup_for_edit-profile').querySelector('.popup__form');
const userInfoProfile = {nameSelector: '.profile__name', professionSelector: '.profile__profession'}

/* переменные для попапа добавления карточек*/
const popupFormAddCard = document.querySelector('.popup_for_add-card').querySelector('.popup__form');
const inputCardName = popupFormAddCard.querySelector('.popup__input_type_place');
const inputCardUrl = popupFormAddCard.querySelector('.popup__input_type_url');


const userInfo = new UserInfo(userInfoProfile)

const editProfilePopup = new PopupWithForm('.popup_for_edit-profile', () => {
    userInfo.setUserInfo()
})

const addCardPopup = new PopupWithForm('.popup_for_add-card', () => {
    const data = {name:inputCardName.value, link:inputCardUrl.value}
    const card = new Card(data, cardClassTemplate,() => {
        new PopupWithImage('.popup_for_image', data).open()
    }).createCard();
    cards.prepend(card);
})

function openPopupProfile() {
    userInfo.getUserInfo()
    new FormValidator(obj, popupFormProfile).enableValidation()
    editProfilePopup.open();
}

function openPopupAddCard() {
    new FormValidator(obj, popupFormAddCard).enableValidation()
    addCardPopup.open();
}

/*------------------обработчики событий----------------------------------*/

editButton.addEventListener('click', openPopupProfile);
addButton.addEventListener('click', openPopupAddCard);

/* ----------добавляет карточки при загрузке страницы из исходного массива------------*/
initialCards.forEach((item) => {
    const card = new Card(item, cardClassTemplate, () => {
        new PopupWithImage('.popup_for_image', item).open()
    }).createCard();
    cards.prepend(card);
});


