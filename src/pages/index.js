import './index.css';
import Card from '../scripts/components/Card.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupSubmit from '../scripts/components/PopupSubmit.js';
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
    submitPopupSelector
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

//отвечает за отображение карточек
const sectionCards = new Section({
    items: initialCards,
    renderer: (item) => {
        sectionCards.addItem(newCard(item))
    }
}, cardsSelector);

//попап управления аватаркой
const avatarPopup = new PopupWithForm(avatarPopupSelector, (inputs) => {
    api.changeAvatarProfile(inputs)
        .then(result => userInfo.setUserAvatar(result.avatar))
        .catch((err) => {
            console.log(err)
        })
})
avatarPopup.setEventListeners()

//попап редактирования данных профайла
const editProfilePopup = new PopupWithForm(editProfilePopupSelector, (inputs) => {
    // const inputs = {name: inputProfileName.value, about: inputAbout.value};
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

//попап добавления новых карточек
const addCardPopup = new PopupWithForm(addCardPopupSelector, (inputs) => {
    api.postNewCard(inputs).then(result => {
        sectionCards.addItem(newCard(result));
    })
    // addCardPopup.close()
    popupFormAddCard.reset();
    cardFormValidator.toggleSubmitBtnState();
});
addCardPopup.setEventListeners();

//попап подтверждения удаления
const popupSubmit = new PopupSubmit(submitPopupSelector, (data, element) => api.deleteCard(data._id, element))
popupSubmit.setEventListeners()

//создает класс под каждую карточку
function newCard(data) {
    const card = new Card(data, cardTemplateSelector,
        () => {
            popupWithImage.open(data)
        },
        (evt) => {
            popupSubmit.open(data, evt);
        },
        (condition, element) =>{
            toggleLike(condition,data)
                .then(result => card.visualLike(element, result))
                .catch((err) => console.log(err))
        })
    return card.createCard()
}

//возвращает способ обработки лайка на сервере
function toggleLike(condition,data) {
    if (condition) return api.removeLikeCard(data)
    return api.setLikeCard(data)

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

/* ----------подтягивает с сервера данные для загрузки страницы------------*/


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