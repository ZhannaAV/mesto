import Card from './Card.js';
import {FormValidator} from "./FormValidator.js";

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
const popupProfile = document.querySelector('.popup_for_edit-profile');
const popupFormProfile = popupProfile.querySelector('.popup__form');
const inputProfileName = popupFormProfile.querySelector('.popup__input_type_name');
const inputProfession = popupFormProfile.querySelector('.popup__input_type_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

/* переменные для попапа добавления карточек*/
const popupAddCard = document.querySelector('.popup_for_add-card');
const popupFormAddCard = popupAddCard.querySelector('.popup__form');
const inputCardName = popupFormAddCard.querySelector('.popup__input_type_place');
const inputCardUrl = popupFormAddCard.querySelector('.popup__input_type_url');


/*заполнение полей попапа для профайла*/
function fillProfilePopup() {
    inputProfileName.value = profileName.textContent;
    inputProfession.value = profileProfession.textContent;
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
    popup.removeEventListener('click', closePopupMethods)
}

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
    popup.addEventListener('click', closePopupMethods)
}


function openPopupProfile() {
    fillProfilePopup();
    new FormValidator(obj, popupFormProfile).enableValidation()
    openPopup(popupProfile);
}


function openPopupAddCard() {
    popupFormAddCard.reset()
    new FormValidator(obj, popupFormAddCard).enableValidation()
    openPopup(popupAddCard);
}

/*функция редактирует профайл через попап*/
function ProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileProfession.textContent = inputProfession.value;
    closePopup(popupProfile);
}

/*функция добавляет карточку через попап*/
function addCardFormSubmit(evt) {
    evt.preventDefault();
    const card = new Card(inputCardUrl.value, inputCardName.value, cardClassTemplate).createCard();
    cards.prepend(card);
    closePopup(popupAddCard);
}

/*функция закрывает попап нажатии кнопки ESC*/
function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened')
        closePopup(popup)
    }
}
/*функция закрывает попап при кликах по крестику или вокруг окна по оверлэю*/
function closePopupMethods (evt) {
    const object = evt.target
    if (object.classList.contains('popup_opened') || object.classList.contains('popup__close')) {
        const popup = object.closest('.popup_opened');
        closePopup(popup)
    }
}

/*------------------обработчики событий----------------------------------*/

editButton.addEventListener('click', openPopupProfile);
addButton.addEventListener('click', openPopupAddCard);
popupFormProfile.addEventListener('submit', ProfileFormSubmit);
popupFormAddCard.addEventListener('submit', addCardFormSubmit);

/* ----------добавляет карточки при загрузке страницы из исходного массива------------*/
initialCards.forEach((item) => {
    const card = new Card(item.link, item.name, cardClassTemplate).createCard();
    cards.prepend(card);
});

