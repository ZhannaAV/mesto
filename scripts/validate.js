const obj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__input-error'}

function enableValidation (obj) {
const formList = Array.from(document.querySelectorAll(obj.formSelector));
switchValidation(formList, obj)
}
/*переключает тип валидации форм*/
function switchValidation (formList,obj) {
    formList.forEach(formItem => {
        formItem.setAttribute("novalidate", true);
        setFormRedactor (formItem, obj)
    })
}
/*обрабатывает изменения в форме*/
function setFormRedactor (formItem, obj) {
    const inputList = Array.from(formItem.querySelectorAll(obj.inputSelector));
    toggleSubmitBtnState (formItem, inputList, obj)
        setInputListener (inputList, formItem, obj)
}

/*вешает слушатели на инпуты внутри одельно взятой формы*/
function setInputListener (inputList, formItem, obj){
    inputList.forEach( input => {
        input.addEventListener('input', () => {
            isValidInput(input, obj.inputErrorClass)
            toggleSubmitBtnState (formItem, inputList, obj)
        })
    })
}
/*проверка валидности поля и включение/отключение подсказок*/
function isValidInput (input, invalidClass) {
    if (!input.validity.valid) {
        // Если поле не проходит валидацию, покажет ошибку
        showInputError(input, invalidClass, input.validationMessage);
    } else {
        // Если проходит, скроет их
        hideInputError(input, invalidClass);
    }
}
/*выводит подсказки о некорректном вводе*/
function showInputError(input, invalidClass, errorMessage ) {
    input.classList.add(invalidClass);
    const error = document.querySelector(`.${input.id}-error`);
    error.textContent = errorMessage
}
/*убирает подсказки о некорректном вводе*/
function hideInputError(input, invalidClass) {
    input.classList.remove(invalidClass);
    const error = document.querySelector(`.${input.id}-error`);
    error.textContent = ''
}
/*проверка валидности формы*/
function invalidForm(inputList) {
    return inputList.some((inputElement) => {
             return !inputElement.validity.valid;
})
}
/*меняет состояние кнопки submit*/
function toggleSubmitBtnState (formItem, inputList, obj) {
    const button = formItem.querySelector(obj.submitButtonSelector);
    if(invalidForm(inputList)) {
        button.classList.add(obj.inactiveButtonClass)
        button.setAttribute("disabled","true")
    } else {
        button.classList.remove(obj.inactiveButtonClass)
        button.removeAttribute("disabled")
    }
}

enableValidation(obj)