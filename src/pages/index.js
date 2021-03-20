import './index.css';
import Card from '../scripts/components/Card.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import Section from "../scripts/components/Section.js";
import {
    editButton,
    addButton,
    obj,
    initialCards,
    cardTemplateSelector,
    cardsSelector,
    userInfoProfile,
    popupFormProfile,
    popupFormAddCard,
    addCardPopupSelector,
    editProfilePopupSelector,
    imagePopupSelector,
    inputProfileName,
    inputProfession,
    avatarButton,
    popupFormAvatar,
    avatarPopupSelector
} from "../scripts/utils/constants.js";

//включение валидации полей попапов
const profileFormValidator = new FormValidator(obj, popupFormProfile);
profileFormValidator.enableValidation();
const cardFormValidator = new FormValidator(obj, popupFormAddCard);
cardFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(obj, popupFormAvatar);
avatarFormValidator.enableValidation();

//попап с картинкой
const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();

const userInfo = new UserInfo(userInfoProfile);


//отвечает за отображение карточек
const sectionCards = new Section({
    items: initialCards,
    renderer: (item) => {
        sectionCards.addItem(newCard(item))
    }
}, cardsSelector);

const avatarPopup = new PopupWithForm(avatarPopupSelector, () => {

})
avatarPopup.setEventListeners()

const editProfilePopup = new PopupWithForm(editProfilePopupSelector, () => {
    userInfo.setUserInfo(inputProfileName.value, inputProfession.value)
});
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm(addCardPopupSelector, (data) => {
    sectionCards.addItem(newCard(data));
    // addCardPopup.close()
    popupFormAddCard.reset();
    cardFormValidator.toggleSubmitBtnState();
});
addCardPopup.setEventListeners();


function newCard(data) {
    return new Card(data, cardTemplateSelector, () => {
        popupWithImage.open(data)
    }).createCard();
}



//заполняет попап редактирования профайла из профиля
function fillPopup(data) {
    inputProfileName.value = data.name;
    inputProfession.value = data.profession;
}

function openPopupProfile() {
    fillPopup(userInfo.getUserInfo());
    profileFormValidator.renewValidation();
    editProfilePopup.open()
}

function openPopupAvatar(){
    avatarFormValidator.renewValidation()
    avatarPopup.open()
}

function openPopupAddCard() {
    cardFormValidator.renewValidation();
    addCardPopup.open();
}

/*------------------обработчики событий----------------------------------*/

editButton.addEventListener('click', openPopupProfile);
addButton.addEventListener('click', openPopupAddCard);
avatarButton.addEventListener('click', openPopupAvatar)

/* ----------добавляет карточки при загрузке страницы из исходного массива------------*/

sectionCards.renderItems()