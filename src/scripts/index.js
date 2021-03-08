import '../pages/index.css';
import Card from './components/Card.js';
import UserInfo from './components/UserInfo.js';
import FormValidator from "./components/FormValidator.js";
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import Section from "./components/Section.js";
import {editButton, addButton, obj, initialCards, cardTemplateSelector, cardsSelector, userInfoProfile, popupFormProfile, popupFormAddCard, addCardPopupSelector,editProfilePopupSelector, imagePopupSelector} from "./utils/constants.js";

const sectionCards = new Section({
    items:initialCards,
    renderer:(item) => {
        const card = new Card(item, cardTemplateSelector, () => {
            new PopupWithImage(imagePopupSelector, item).open()
        }).createCard();
        sectionCards.addItem(card)
    }},cardsSelector);

const userInfo = new UserInfo(userInfoProfile);

const editProfilePopup = new PopupWithForm(editProfilePopupSelector, () => {
    userInfo.setUserInfo()
});

const addCardPopup = new PopupWithForm(addCardPopupSelector, () => {
    const data = addCardPopup.getInputValues();
    const card = new Card(data, cardTemplateSelector,() => {
        new PopupWithImage(imagePopupSelector, data).open()
    }).createCard();
    sectionCards.addItem(card)
});

function openPopupProfile() {
    userInfo.getUserInfo();
    new FormValidator(obj, popupFormProfile).enableValidation();
    editProfilePopup.open()
}

function openPopupAddCard() {
    new FormValidator(obj, popupFormAddCard).enableValidation();
    addCardPopup.open();
}

/*------------------обработчики событий----------------------------------*/

editButton.addEventListener('click', openPopupProfile);
addButton.addEventListener('click', openPopupAddCard);

/* ----------добавляет карточки при загрузке страницы из исходного массива------------*/

sectionCards.renderItems()