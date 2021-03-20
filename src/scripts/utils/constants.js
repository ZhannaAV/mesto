export const initialCards = [
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
export const obj = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__input-error'
};

/*для работы с карточками*/
export const cardsSelector = '.cards';
export const cardTemplateSelector = '.template';

/*кнопки*/
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const avatarButton = document.querySelector('.profile__avatar-button')

/* переменные селекторы попапов*/
export const editProfilePopupSelector = '.popup_for_edit-profile';
export const addCardPopupSelector = '.popup_for_add-card';
export const imagePopupSelector = '.popup_for_image';
export const avatarPopupSelector = '.popup_for_avatar';

/*переменные для редактирование профайла*/
export const userInfoProfile = {nameSelector: '.profile__name', professionSelector: '.profile__profession'};

/* переменные форм для валидации*/
export const popupFormProfile = document.querySelector('.popup_for_edit-profile').querySelector('.popup__form');
export const popupFormAddCard = document.querySelector('.popup_for_add-card').querySelector('.popup__form');
export const popupFormAvatar = document.querySelector('.popup_for_avatar').querySelector('.popup__form');


/*поля из попапа редактирования профайла*/
export const inputProfileName = document.querySelector('.popup__input_type_name');
export const inputProfession = document.querySelector('.popup__input_type_profession');