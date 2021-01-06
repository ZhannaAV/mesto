let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let inputName = document.querySelector('.popup__input_type_name');
let profileProfession = document.querySelector('.profile__profession');
let inputProfession = document.querySelector('.popup__input_type_profession');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let popupForm = document.querySelector('.popup__container');

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

