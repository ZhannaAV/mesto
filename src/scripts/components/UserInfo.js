export default class UserInfo {
    constructor({nameSelector, professionSelector}) {
        this._profileName = document.querySelector(nameSelector);
        this._profileProfession = document.querySelector(professionSelector);
    }

//возвращает объект с инфой из профиля
    getUserInfo() {
        return {
            name: this._profileName.textContent,
            profession: this._profileProfession.textContent,
        }
    }

    //меняет инфу в профиле
    setUserInfo(name, profession) {
        this._profileName.textContent = name;
        this._profileProfession.textContent = profession;
    }
}