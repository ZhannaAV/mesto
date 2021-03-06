export default class UserInfo {
    constructor({nameSelector, professionSelector}) {
        this.inputProfileName = document.querySelector('.popup__input_type_name');
        this.inputProfession = document.querySelector('.popup__input_type_profession');
        this.profileName = document.querySelector(nameSelector);
        this.profileProfession = document.querySelector(professionSelector);
    }

    getUserInfo(){
        this.inputProfileName.value = this.profileName.textContent;
        this.inputProfession.value = this.profileProfession.textContent;
    }

    setUserInfo(){
        this.profileName.textContent = this.inputProfileName.value;
        this.profileProfession.textContent = this.inputProfession.value;
    }
}