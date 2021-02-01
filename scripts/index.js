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

/*переменные для работы с карточками*/
const template = document.querySelector('.template').content;
const cards = document.querySelector('.cards');

/*функция добавляет карточки при загрузке страницы*/
initialCards.forEach((item/*, index*/) => {
    const card = createCard(/*index,*/ item.link, item.name);
    cards.prepend(card);
});

function createCard(link, name) {
    const card = template.cloneNode(true);
    card.querySelector('.card__image').style.backgroundImage = `url(${link})`;
    card.querySelector('.card__title').textContent = name;
    /*добавление обработчиков на элементы внутри карточки*/
    card.querySelector('.card__image').addEventListener('click', openPopupImage);
    card.querySelector('.card__like').addEventListener('click', like);
    card.querySelector('.card__delete').addEventListener('click', cardDelete);
    /*_________________________________________________________*/
    return card;
}

function like(evt) {
    evt.target.classList.toggle('card__like_active')
}

function cardDelete(evt) {
    const card = evt.target.closest('.card');
    card.remove();
}

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

/*список инпутов*/
const inputList = document.querySelectorAll('.popup__input')

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
    resetError (popup)
}

function closePopupByBtn(evt) {
    const closeButton = evt.target;
    const popup = closeButton.closest('.popup');
    closePopup(popup);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function openPopupProfile() {
    fillProfilePopup()
    openPopup(popupProfile);
}

function openPopupImage(evt) {
    const element = evt.target;
    popupImage.src = element.style.backgroundImage.slice(5, -2);
    popupImgCaption.textContent = element.parentElement.querySelector('.card__title').textContent
    openPopup(popupWithImage);
}

function openPopupAddCard() {
    inputCardName.value = '';
    inputCardUrl.value = '';
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
    const card = createCard(inputCardUrl.value, inputCardName.value);
    cards.prepend(card);
    closePopup(popupAddCard);
}
/*функция закрывает попап нажатии кнопки ESC, когда курсор в инпуте*/
function closePopupByEsc(evt) {
if(evt.key === 'Escape') {
    const popup = evt.target.closest('.popup')
    closePopup(popup)
}
}

/*------------------обработчики событий----------------------------------*/
closeButtonList.forEach(item => {
        item.addEventListener('click', closePopupByBtn);
})

inputList.forEach(item => {
    item.addEventListener("keydown", closePopupByEsc)
})


editButton.addEventListener('click', openPopupProfile);
addButton.addEventListener('click', openPopupAddCard);
popupFormProfile.addEventListener('submit', ProfileFormSubmit);
popupFormAddCard.addEventListener('submit', addCardFormSubmit);

