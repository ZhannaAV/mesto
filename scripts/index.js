let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let popupForm = document.querySelector('.popup__container');
let inputName = popupForm.querySelector('.popup__input_type_name');
let inputProfession = popupForm.querySelector('.popup__input_type_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let editButton = document.querySelector('.profile__edit-button');

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

