(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t.name,this.link=t.link,this.template=n,this._likesArr=t.likes,this._idOwner=t.owner._id,this._handleCardClick=r,this._handleDeleteClick=o,this._handleLikeClick=i,this._likeBind=this._like.bind(this)}var n,r;return n=e,(r=[{key:"_createCardTemplate",value:function(){return document.querySelector(this.template).content.cloneNode(!0)}},{key:"_createCardListeners",value:function(){var t=this;this._cardImage().addEventListener("click",(function(){return t._handleCardClick()})),this._cardLike().addEventListener("click",this._likeBind),this._buttonDelete=this._card.querySelector(".card__delete"),this._idOwner===this._userId?this._buttonDelete.addEventListener("click",(function(e){return t._handleDeleteClick(e)})):this._buttonDelete.remove()}},{key:"getUserId",value:function(t){this._userId=t}},{key:"_likeExist",value:function(){var t=this;return this._likesArr.some((function(e){return e._id===t._userId}))}},{key:"_like",value:function(t){this._handleLikeClick(this._likeExist(),t.target)}},{key:"visualLike",value:function(t,e){t.classList.toggle("card__like_active"),this._likesArr=e.likes,this._counter=t.closest(".card__like-group").querySelector(".card__like-counter"),this._counter.textContent=this._likesNumber()}},{key:"_likesNumber",value:function(){return this._likesArr.length}},{key:"_cardImage",value:function(){return this._card.querySelector(".card__image")}},{key:"_cardLike",value:function(){return this._card.querySelector(".card__like")}},{key:"createCard",value:function(){return this._card=this._createCardTemplate(),this._cardImage().style.backgroundImage="url(".concat(this.link,")"),this._card.querySelector(".card__title").textContent=this.name,this._card.querySelector(".card__like-counter").textContent=this._likesNumber(),this._likeExist()&&this._cardLike().classList.add("card__like_active"),this._createCardListeners(),this._card}}])&&t(n.prototype,r),e}();function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(n),this._profileAbout=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileAbout.textContent}}},{key:"setUserId",value:function(t){t&&(this._userId=t)}},{key:"userId",value:function(){return this._userId}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;e&&(this._profileName.textContent=e),n&&(this._profileAbout.textContent=n)}},{key:"setUserAvatar",value:function(t){t&&(this._profileAvatar.src=t)}}])&&n(e.prototype,r),t}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.form=n,this.inputList=Array.from(this.form.querySelectorAll(e.inputSelector)),this.invalidClass=e.inputErrorClass,this.button=this.form.querySelector(e.submitButtonSelector),this.inactiveButtonClass=e.inactiveButtonClass}var e,n;return e=t,(n=[{key:"_setNovalidate",value:function(){return this.form.setAttribute("novalidate",!0)}},{key:"_setInputListeners",value:function(){var t=this;this.inputList.forEach((function(e){e.addEventListener("input",(function(){t._input=e,t._isValidInput(),t._toggleSubmitBtnState()}))}))}},{key:"_isValidInput",value:function(){this._error=document.querySelector(".".concat(this._input.id,"-error")),this._input.validity.valid?this._hideInputError():this._showInputError()}},{key:"_showInputError",value:function(){this._input.classList.add(this.invalidClass),this._error.textContent=this._input.validationMessage}},{key:"_hideInputError",value:function(){this._input.classList.remove(this.invalidClass),this._error.textContent=""}},{key:"_switchOffErrors",value:function(){var t=this;this.inputList.forEach((function(e){t._input=e,t._error=document.querySelector(".".concat(t._input.id,"-error")),t._hideInputError()}))}},{key:"_invalidForm",value:function(){return this.inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleSubmitBtnState",value:function(){this._invalidForm()?(this.button.classList.add(this.inactiveButtonClass),this.button.setAttribute("disabled","true")):(this.button.classList.remove(this.inactiveButtonClass),this.button.removeAttribute("disabled"))}},{key:"enableValidation",value:function(){this._setNovalidate(),this._setInputListeners()}},{key:"renewValidation",value:function(){this._switchOffErrors(),this._toggleSubmitBtnState()}}])&&o(e.prototype,n),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.popup=document.querySelector(e),this._handleEscCloseBind=this._handleEscClose.bind(this),this._handleClickCloseBind=this._handleClickClose.bind(this)}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){this.popup.addEventListener("click",this._handleClickCloseBind)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleClickClose",value:function(t){this._classList=t.target.classList,(this._classList.contains("popup_opened")||this._classList.contains("popup__close"))&&this.close()}},{key:"open",value:function(){document.addEventListener("keydown",this._handleEscCloseBind),this.popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscCloseBind),this.popup.classList.remove("popup_opened")}}])&&a(e.prototype,n),t}();function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(o){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return p(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._popupImage=e.popup.querySelector(".popup__image"),e._popupImgCaption=e.popup.querySelector(".popup__figcaption"),e}return e=a,(n=[{key:"open",value:function(t){this._popupImage.src=t.link,this._popupImgCaption.textContent=t.name,this._popupImage.setAttribute("alt","увеличенное изображение ".concat(t.name)),l(h(a.prototype),"open",this).call(this)}}])&&s(e.prototype,n),a}(u);function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?k(t):e}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return b(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._form=n.popup.querySelector(".popup__form"),n._handleSubmitForm=e,n._handleSubmitFormBind=n._handleSubmit.bind(k(n)),n}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList=Array.from(this._form.querySelectorAll(".popup__input")),this._inputDataList={},this._inputList.forEach((function(e){t._inputDataList[e.name]=e.value})),this._inputDataList}},{key:"_handleSubmit",value:function(t){t.preventDefault(),this._handleSubmitForm(this._getInputValues())}},{key:"setEventListeners",value:function(){this._form.addEventListener("submit",this._handleSubmitFormBind),v(g(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),v(g(a.prototype),"close",this).call(this)}}])&&y(e.prototype,n),a}(u);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?L(t):e}function L(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return I(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._form=n.popup.querySelector(".popup__form"),n._handleSubmitForm=e,n._handleSubmitFormBind=n._handleSubmit.bind(L(n)),n}return e=a,(n=[{key:"open",value:function(t,e){this._data=t,this._element=e.target,E(j(a.prototype),"open",this).call(this)}},{key:"_handleSubmit",value:function(t){t.preventDefault(),this._handleSubmitForm(this._data,this._element)}},{key:"setEventListeners",value:function(){this._form.addEventListener("submit",this._handleSubmitFormBind),E(j(a.prototype),"setEventListeners",this).call(this)}}])&&C(e.prototype,n),a}(u);function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var A=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){return t._renderer(e)}))}}])&&q(e.prototype,n),t}();function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var R=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e,this._cohortId=n.cohortId,this._token=n.token}var e,n;return e=t,(n=[{key:"getInitialProfile",value:function(){return fetch("".concat(this._baseUrl,"/").concat(this._cohortId,"/users/me"),{headers:{authorization:"".concat(this._token)}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"changeInfoProfile",value:function(t){var e=t.name,n=t.about;return fetch("".concat(this._baseUrl,"/").concat(this._cohortId,"/users/me"),{method:"PATCH",headers:{authorization:"".concat(this._token),"Content-Type":"application/json"},body:JSON.stringify({name:e,about:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"changeAvatarProfile",value:function(t){var e=t.avatar;return fetch("".concat(this._baseUrl,"/").concat(this._cohortId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:"".concat(this._token),"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/").concat(this._cohortId,"/cards"),{headers:{authorization:"".concat(this._token)}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"postNewCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this._baseUrl,"/").concat(this._cohortId,"/cards"),{method:"POST",headers:{authorization:"".concat(this._token),"Content-Type":"application/json"},body:JSON.stringify({name:e,link:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteCard",value:function(t,e){return fetch("".concat(this._baseUrl,"/").concat(this._cohortId,"/cards/").concat(t),{method:"DELETE",headers:{authorization:"".concat(this._token)}}).then((function(t){return t.ok?(e.closest(".card").remove(),t.json()):Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"setLikeCard",value:function(t){return fetch("".concat(this._baseUrl,"/").concat(this._cohortId,"/cards/likes/").concat(t),{method:"PUT",headers:{authorization:"".concat(this._token)}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"removeLikeCard",value:function(t){return fetch("".concat(this._baseUrl,"/").concat(this._cohortId,"/cards/likes/").concat(t),{method:"DELETE",headers:{authorization:"".concat(this._token)}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}}])&&B(e.prototype,n),t}(),T=[],U={inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_invalid",errorClass:"popup__input-error"},x=document.querySelector(".profile__edit-button"),D=document.querySelector(".profile__add-button"),N=document.querySelector(".profile__avatar-button"),V=".popup_for_edit-profile",F=".popup_for_add-card",z=".popup_for_avatar",J=document.querySelector(".popup_for_edit-profile").querySelector(".popup__form"),H=document.querySelector(".popup_for_add-card").querySelector(".popup__form"),M=document.querySelector(".popup_for_avatar").querySelector(".popup__form"),$=document.querySelector(".popup__input_type_name"),G=document.querySelector(".popup__input_type_about");function K(t,e){document.querySelector(t).querySelector(".popup__submit-button").textContent=e?"Сохранение...":"Сохранить"}function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var W=new i(U,J);W.enableValidation();var X=new i(U,H);X.enableValidation();var Y=new i(U,M);Y.enableValidation();var Z=new d(".popup_for_image");Z.setEventListeners();var tt=new r({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__avatar"}),et=new R("https://mesto.nomoreparties.co/v1",{cohortId:"cohort-21",token:"968d9df8-248d-4254-8e45-b3a90842092c"}),nt=new A({items:T,renderer:function(t){return nt.addItem(ut(t))}},".cards"),rt=new S(z,(function(t){K(z,!0),et.changeAvatarProfile(t).then((function(t){tt.setUserAvatar(t.avatar),rt.close()})).catch((function(t){return console.log(t)})).finally((function(){return K(z,!1)}))}));rt.setEventListeners();var ot=new S(V,(function(t){K(V,!0),et.changeInfoProfile(t).then((function(t){var e=t.name,n=t.about;tt.setUserInfo({name:e,about:n}),ot.close()})).catch((function(t){return console.log(t)})).finally((function(){return K(V,!1)}))}));ot.setEventListeners();var it=new S(F,(function(t){K(F,!0),H.reset(),et.postNewCard(t).then((function(t){nt.addItem(ut(t)),it.close()})).catch((function(t){return console.log(t)})).finally((function(){return K(F,!1)}))}));it.setEventListeners();var at=new P(".popup_for_submit",(function(t,e){et.deleteCard(t._id,e).then((function(){return at.close()})).catch((function(t){return console.log(t)}))}));function ut(t){var n=new e(t,".template",(function(){Z.open(t)}),(function(e){at.open(t,e)}),(function(e,r){(function(t,e){return t?et.removeLikeCard(e):et.setLikeCard(e)})(e,t._id).then((function(t){return n.visualLike(r,t)})).catch((function(t){return console.log(t)}))}));return n.getUserId(tt.userId()),n.createCard()}at.setEventListeners(),x.addEventListener("click",(function(){var t;t=tt.getUserInfo(),$.value=t.name,G.value=t.about,W.renewValidation(),ot.open()})),D.addEventListener("click",(function(){X.renewValidation(),it.open()})),N.addEventListener("click",(function(){Y.renewValidation(),rt.open()}));var ct=[et.getInitialProfile(),et.getInitialCards()];Promise.all(ct).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1],a=o.name,u=o.about;tt.setUserInfo({name:a,about:u}),tt.setUserAvatar(o.avatar),tt.setUserId(o._id),i.forEach((function(t){T.unshift(t)})),nt.renderItems()})).catch((function(t){console.log(t)}))})();