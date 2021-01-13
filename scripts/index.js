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
let template = document.querySelector('.template').content;
let cards = document.querySelector('.cards');

/*функция добавляет карточки при загрузке страницы*/
initialCards.forEach((item, index) => {
    let card = template.cloneNode(true);
    card.querySelector('.card__image').classList.add(`card__image${index}`);
    let newCardClass = card.querySelector(`.card__image${index}`)
    newCardClass.style.backgroundImage = `url(${item.link})`;
    card.querySelector('.card__title').textContent = item.name;
    cards.prepend(card)
});
/*на каждую карточку сделан отдельный класс, чтобы картинка подгружалась через background, цель - чтобы картинка
* осталась квадратной при изменении размера родительского grid-элемента. Если есть хак, как это сделать через тег img-
* буду признательна за инфу)*/


/*кнопки*/
const closeButton = document.querySelectorAll('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

/*переменные для попапа редактирование профайла*/
let popupProfile = document.querySelector('.popup_for_edit-profile');
let popupFormProfile = popupProfile.querySelector('.popup__form');
let inputProfileName = popupFormProfile.querySelector('.popup__input_type_name');
let inputProfession = popupFormProfile.querySelector('.popup__input_type_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

/* переменные для попапа добавления карточек*/
let popupAddCard = document.querySelector('.popup_for_add-card');
let popupFormAddCard = popupAddCard.querySelector('.popup__form');
let inputCardName = popupFormAddCard.querySelector('.popup__input_type_place');
let inputCardUrl = popupFormAddCard.querySelector('.popup__input_type_url');


function closePopup(evt) {
    const closeButton = evt.target;
    const popup = closeButton.closest('.popup');
    console.log(popup);
    popup.classList.remove('popup_opened');
}

function openPopupProfile() {
    inputProfileName.value = profileName.textContent;
    inputProfession.value = profileProfession.textContent;
    popupProfile.classList.add('popup_opened');
}

function openPopupAddCard() {
    inputCardName.value = '';
    inputCardUrl.value = '';
    popupAddCard.classList.add('popup_opened');
}

function ProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileProfession.textContent = inputProfession.value;
    popupProfile.classList.remove('popup_opened');
}

function addCardFormSubmit(evt) {
    evt.preventDefault();
    let card = template.cloneNode(true);
    let index = initialCards.length;
    card.querySelector('.card__image').classList.add(`card__image${index}`);
    let newCardClass = card.querySelector(`.card__image${index}`)
    newCardClass.style.backgroundImage = `url(${inputCardUrl.value})`;
    card.querySelector('.card__title').textContent = inputCardName.value;
    cards.prepend(card);
    popupAddCard.classList.remove('popup_opened');
    initialCards.push({name: inputCardName.value, link: inputCardUrl.value});
}


/*------------------обработчики событий----------------------------------*/
closeButton.forEach(item => {
        item.addEventListener('click', closePopup);
    }
)

editButton.addEventListener('click', openPopupProfile);
addButton.addEventListener('click', openPopupAddCard);
popupFormProfile.addEventListener('submit', ProfileFormSubmit);
popupFormAddCard.addEventListener('submit', addCardFormSubmit);

/*обработчик карточек:лайк, удаление */
cards.addEventListener('click', function (evt) {
    let element = evt.target;
    if (element.classList.contains('card__like')) return element.classList.toggle('card__like_active')
    if (element.classList.contains('card__delete')) {
        const card = element.parentElement
        const nameCard = card.querySelector('.card__title').textContent;
        const index = initialCards.findIndex(el => el.name === nameCard);
        initialCards.splice(index, 1);
        card.remove()
    }
})
/*------------------Версия работы кнопки удаления карточек(не удаляет новые карточки)-------------------------------*/
// let deleteButton = document.querySelectorAll('.card__delete');


/*function deleteCard(evt) {
    const deleteButton = evt.target;
    console.log(deleteButton)
    const card = deleteButton.parentElement;
    const nameCard = card.querySelector('.card__title').textContent;
    const index = initialCards.findIndex(el => el.name === nameCard);
    initialCards.splice(index, 1);
    card.remove()
}*/

/*
deleteButton.forEach(item => {
        item.addEventListener('click', deleteCard);
    })
*/
