let popupForm = document.querySelector('.popup__form');
let popupAddCard = document.querySelector('.popup__add-card');

/*кнопки*/
const closeButton = document.querySelectorAll('.popup__close');
let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');

/*попап редактирование профайла*/
let popupProfile = document.querySelector('.popup__edit-profile');
let inputName = popupForm.querySelector('.popup__input_type_name');
let inputProfession = popupForm.querySelector('.popup__input_type_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');



/*переменные для работы с карточками*/
let template = document.querySelector('.template').content;
let cards = document.querySelector('.cards');
console.log(closeButton);

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

/*функция добавляет карточки при загрузке страницы*/
initialCards.forEach((item, index) => {
    let card = template.cloneNode(true);
    card.querySelector('.card__image').classList.add(`card__link${index}`);
    let link = card.querySelector(`.card__link${index}`)
    link.style.backgroundImage = `url(${item.link})`;
    card.querySelector('.card__title').textContent = item.name;
    cards.append(card)
});


function closePopup(evt){
    const closeButton = evt.target;
    const popup = closeButton.closest('.popup');
    console.log(popup);
    popup.classList.remove('popup_opened');
}

function openPopupProfile (){
    inputName.value = profileName.textContent;
    inputProfession.value = profileProfession.textContent;
    popupProfile.classList.add('popup_opened');
}

function openPopupAddCard () {
    popupAddCard.classList.add('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileProfession.textContent = inputProfession.value;
    closePopup();
}

closeButton.forEach(item => {
    item.addEventListener('click', closePopup);
    }
)
editButton.addEventListener('click', openPopupProfile);
addButton.addEventListener('click', openPopupAddCard);
popupForm.addEventListener('submit', handleFormSubmit);

/*обработчик лайков*/
cards.addEventListener('click', function (evt){
    let element = evt.target;
    if (element.classList.contains('card__like')) {
        element.classList.toggle('card__like_active')
    }
})
