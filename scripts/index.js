import Card from './Card.js'

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

/*NodeList с карточками*/
const cards = document.querySelector('.cards');

const cardTemplate = '.template';

/* добавляет карточки при загрузке страницы*/
initialCards.forEach((item) => {
    const card = new Card (item.link, item.name, cardTemplate).createCard();
    cards.prepend(card);
});


/*кнопки*/
const closeButtonList = document.querySelectorAll('.popup__close');
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

/*переменные для попапа с картинкой*/
const popupWithImage = document.querySelector('.popup_for_image');
const popupImage = popupWithImage.querySelector('.popup__image');
const popupImgCaption = popupWithImage.querySelector('.popup__figcaption');

/*список оверлэй*/
const overlayList = document.querySelectorAll('.popup')

/*заполнение полей попапа для профайла до открытия попапа*/
function fillProfilePopup () {
    inputProfileName.value = profileName.textContent;
    inputProfession.value = profileProfession.textContent;
}

fillProfilePopup()

/*сбрасывает ошибки в попапе*/
function resetError (popup) {
const errorList = popup.querySelectorAll('.popup__input-error')
const errorInputList = popup.querySelectorAll('.popup__input_invalid')
    errorList.forEach(item => item.textContent = '')
    errorInputList.forEach(item => item.classList.remove('popup__input_invalid'))
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc)
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc)
}

function openPopupProfile() {
    fillProfilePopup();
    resetError (popupProfile);
    openPopup(popupProfile);
}

function openPopupImage(link, name) {
    popupImage.src = link;
    popupImgCaption.textContent = name;
    openPopup(popupWithImage);
}

function openPopupAddCard() {
    inputCardName.value = '';
    inputCardUrl.value = '';
    resetError (popupAddCard);
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
    const card = new Card (inputCardUrl.value, inputCardName.value, cardTemplate).createCard();
    cards.prepend(card);
    closePopup(popupAddCard);
}

/*функция закрывает попап нажатии кнопки крестик*/
function closePopupByBtn(evt) {
    const closeButton = evt.target;
    const popup = closeButton.closest('.popup');
    closePopup(popup);
}

/*функция закрывает попап нажатии кнопки ESC*/
function closePopupByEsc(evt) {
if(evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened')
    closePopup(popup)
}}

/*закрывает попап по клику на оверлэй*/
function closePopupByOverlay(evt) {
    if(evt.target.classList.contains('popup_opened')) closePopup(evt.target)
}
/*------------------обработчики событий----------------------------------*/
closeButtonList.forEach(item => item.addEventListener('click', closePopupByBtn))

overlayList.forEach(item => item.addEventListener('click', closePopupByOverlay))

editButton.addEventListener('click', openPopupProfile);
addButton.addEventListener('click', openPopupAddCard);
popupFormProfile.addEventListener('submit', ProfileFormSubmit);
popupFormAddCard.addEventListener('submit', addCardFormSubmit);

export {openPopupImage}