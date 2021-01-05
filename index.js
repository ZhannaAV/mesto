let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let submitButton = document.querySelector('.popup__submit-button');

function openPopup (){
    popup.classList.add('popup_opened');
    let profileName = document.querySelector('.profile__name');
    let inputName = document.querySelector('.popup__input_type_name');
    inputName.setAttribute('value', `${profileName.textContent}`);
    let profileProfession = document.querySelector('.profile__profession');
    let inputProfession = document.querySelector('.popup__input_type_profession');
    inputProfession.setAttribute('value', `${profileProfession.textContent}`);
}

function closePopup(){
    popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    let profileName = document.querySelector('.profile__name');
    let inputName = document.querySelector('.popup__input_type_name');
    profileName.textContent = inputName.value;
    let profileProfession = document.querySelector('.profile__profession');
    let inputProfession = document.querySelector('.popup__input_type_profession');
    profileProfession.textContent = inputProfession.value;
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
submitButton.addEventListener('click', handleFormSubmit);