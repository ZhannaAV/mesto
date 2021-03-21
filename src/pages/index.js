import './index.css';
import Card from '../scripts/components/Card.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import Section from "../scripts/components/Section.js";
import Api from "../scripts/components/Api.js";
import {
    editButton,
    addButton,
    obj,
    cardTemplateSelector,
    cardsSelector,
    userInfoProfile,
    popupFormProfile,
    popupFormAddCard,
    addCardPopupSelector,
    editProfilePopupSelector,
    imagePopupSelector,
    inputProfileName,
    inputAbout,
    avatarButton,
    popupFormAvatar,
    avatarPopupSelector,
    inputAvatar,
    personalData,
    baseUrl,
    initialCards,
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

const api = new Api(baseUrl, personalData);

//загрузка карточек с сервера
api.getInitialCards()
    .then(result => {
        result.forEach(item => {
            initialCards.push(item)
        })
        sectionCards.renderItems()
    })
    .catch((err) => {
        console.log(err)
    })

//отвечает за отображение карточек
const sectionCards = new Section({
    items: initialCards,
    renderer: (item) => {
        sectionCards.addItem(newCard(item))
    }
}, cardsSelector);

//класс для управления аватаркой
const avatarPopup = new PopupWithForm(avatarPopupSelector, () => {
    api.changeAvatarProfile(inputAvatar.value)
        .then(result => userInfo.setUserAvatar(result.avatar))
        .catch((err) => {
            console.log(err)
        })
})
avatarPopup.setEventListeners()

//класс для редактирования данных профайла
const editProfilePopup = new PopupWithForm(editProfilePopupSelector, () => {
    const inputs = {name: inputProfileName.value, about: inputAbout.value};
    api.changeInfoProfile(inputs)
        .then(result => {
            const {name, about} = result;
            userInfo.setUserInfo({name, about});
        })
        .catch((err) => {
            console.log(err)
        })
});
editProfilePopup.setEventListeners();

//класс для добавления новых карточек
const addCardPopup = new PopupWithForm(addCardPopupSelector, (data) => {
    api.postNewCard(data).then(result =>{
        sectionCards.addItem(newCard(result));
    })
    // addCardPopup.close()
    popupFormAddCard.reset();
    cardFormValidator.toggleSubmitBtnState();
});
addCardPopup.setEventListeners();


function newCard(data) {
    return new Card(data, cardTemplateSelector, () => {
        popupWithImage.open(data)
    }).createCard()
}

//заполняет попап редактирования профайла из профиля
function fillProfilePopup(data) {
    inputProfileName.value = data.name;
    inputAbout.value = data.about;
}

//заполняет попап редактирования аватара из профиля
function fillAvatarPopup(data) {
    inputAvatar.value = data.avatar;
}

function openPopupProfile() {
    fillProfilePopup(userInfo.getUserInfo());
    profileFormValidator.renewValidation();
    editProfilePopup.open()
}

function openPopupAvatar() {
    fillAvatarPopup(userInfo.getUserAvatar())
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


//заполнение профайла с сервера
api.getInitialProfile()
    .then(result => {
        const {name, about} = result;
        userInfo.setUserInfo({name, about});
        userInfo.setUserAvatar(result.avatar);
    })
    .catch((err) => {
        console.log(err)
    })