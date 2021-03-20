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

    //возвращает объект с url аватара из профиля
    getUserAvatar(){
        return {
            avatar: this._profileAvatar.src
        }
    }

    //меняет инфу в профиле
    setUserInfo({name, about}) {
        this._profileName.textContent = name;
        this._profileAbout.textContent = about;
    }

    //меняет инфу в профиле
    setUserAvatar(avatar) {
        this._profileAvatar.src = avatar;
    }
}