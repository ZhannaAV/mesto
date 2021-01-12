let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let popupForm = document.querySelector('.popup__container');
let inputName = popupForm.querySelector('.popup__input_type_name');
let inputProfession = popupForm.querySelector('.popup__input_type_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let editButton = document.querySelector('.profile__edit-button');
let cards = document.querySelector('.cards');
let template = document.querySelector('.template').content;


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


initialCards.forEach((item, index) => {
    let card = template.cloneNode(true);
    card.querySelector('.card__image').classList.add(`card__link${index}`);
    let link = card.querySelector(`.card__link${index}`)
    link.style.backgroundImage = `url(${item.link})`;
    card.querySelector('.card__title').textContent = item.name;
    cards.append(card)
});



function closePopup(){
    popup.classList.remove('popup_opened');
}

function openPopup (){
    inputName.value = profileName.textContent;
    inputProfession.value = profileProfession.textContent;
    popup.classList.add('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileProfession.textContent = inputProfession.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);
cards.addEventListener('click', function (evt){
    let element = evt.target;
    if (element.classList.contains('card__like')) {
        element.classList.toggle('card__like_active')
    }
})
