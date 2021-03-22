export default class UserInfo {
    constructor({nameSelector, aboutSelector, avatarSelector}) {
        this._profileName = document.querySelector(nameSelector);
        this._profileAbout = document.querySelector(aboutSelector);
        this._profileAvatar = document.querySelector(avatarSelector)
    }

//возвращает объект с инфой из профиля
    getUserInfo() {
        return {
            name: this._profileName.textContent,
            about: this._profileAbout.textContent
        }
    }

    //устанавливает id пользователя
    setUserId(id) {
        if (id) this._userId = id
    }

    //возвращает id пользователя
    userId(){
        return this._userId
    }

    //меняет инфу в профиле
    setUserInfo({name, about}) {
        if (name) this._profileName.textContent = name;
        if (about) this._profileAbout.textContent = about;
    }

    //меняет инфу в профиле
    setUserAvatar(avatar) {
        if(avatar) this._profileAvatar.src = avatar;
    }
}