(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=e,this._inputList=Array.from(this._formElement.querySelectorAll(n)),this._buttonElement=this._formElement.querySelector(r)}var n,r;return n=t,(r=[{key:"_showInputError",value:function(t,e){this._formElement.querySelector(".".concat(t.id,"-error")).textContent=e}},{key:"_hideInputError",value:function(t){this._formElement.querySelector(".".concat(t.id,"-error")).textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._buttonElement.setAttribute("disabled","disabled"):this._buttonElement.removeAttribute("disabled")}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var t=this;this.clear(),this._renderedItems.forEach((function(e){t._renderer(e)}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n,r,o,i){var u=n._id,a=n.name,c=n.link,l=n.likes,s=n.owner,f=i.likeCard,p=i.dontLikeCard,y=i.deleteCard;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userId=e,this._id=u,this._description=a,this._image=c,this._likes=l,this._likesCount=l.length,this._ownerId=s._id,this._template=r,this._handleCardClick=o,this._likeCard=f,this._dontLikeCard=p,this._deleteCard=y}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".elements__item").cloneNode(!0)}},{key:"handleLikeCard",value:function(t){this._cardLike.classList.add("elements__item-like-button_active"),this._element.querySelector(".elements__item-like-count").textContent=t.likes.length}},{key:"handleDontLikeCard",value:function(t){this._element.querySelector(".elements__item-like-count").textContent=t.likes.length,this._cardLike.classList.remove("elements__item-like-button_active")}},{key:"handleDeleteCard",value:function(){}},{key:"_setEventListeners",value:function(){var t=this;this._cardImage.addEventListener("click",this._handleCardClick),this._cardLike=this._element.querySelector(".elements__item-like-button"),this._cardLike.addEventListener("click",(function(){t._cardLike.classList.contains("elements__item-like-button_active")?t._dontLikeCard(t._id):t._likeCard(t._id)})),this._element.querySelector(".elements__item-delete").addEventListener("click",(function(){return t._deleteCard()}))}},{key:"generateCard",value:function(){var t=this;return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".elements__item-poster"),this._cardImage.src=this._image,this._cardImage.alt=this._description,this._userId!==this._ownerId&&(this._element.querySelector(".elements__item-delete").style.display="none"),this._element.querySelector(".elements__item-title").textContent=this._description,this._element.querySelector(".elements__item-like-count").textContent=this._likesCount,this._likes.forEach((function(e){e._id===t._userId&&t._element.querySelector(".elements__item-like-button").classList.add("elements__item-like-button_active")})),this._setEventListeners(),this._element}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&t.close()}))}},{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},d.apply(this,arguments)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(r);if(o){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".poster-popup__image"),e._description=e._popup.querySelector(".poster-popup__description"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;this._image.src=n,this._image.alt=e,this._description.textContent=e,d(m(u.prototype),"open",this).call(this)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,g(r.key),r)}}function g(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===b(e)?e:String(e)}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submit=e,n}return e=u,(n=[{key:"_getInputValues",value:function(){return this._inputList=Array.from(this._popup.querySelectorAll(".popup__form-input")),Object.assign.apply(Object,[{}].concat(function(t){if(Array.isArray(t))return _(t)}(t=this._inputList.map((function(t){return e={},n=t.id,r=t.value,(n=g(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e;var e,n,r})))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));var t}},{key:"setEventListeners",value:function(){var t=this;this._form=this._popup.querySelector(".popup__form"),this._form.addEventListener("submit",(function(e){t._submit(e,t._getInputValues())})),k(j(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),k(j(u.prototype),"close",this).call(this)}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var O=function(){function t(e){var n=e.nameSelector,r=e.infoSelector,o=e.photoSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r),this._userPhoto=document.querySelector(o)}var e,n;return e=t,(n=[{key:"setUserId",value:function(t){this._userId=t}},{key:"getUserId",value:function(){return this._userId}},{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userInfo:this._userInfo.textContent}}},{key:"setUserInfo",value:function(t,e){this._userName.textContent=t,this._userInfo.textContent=e}},{key:"setUserPhoto",value:function(t){this._userPhoto.src=t}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var q=function(){function t(e){var n=e.baseUrl,r=e.authorization;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=n,this.authorization=r}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:{authorization:this.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getUserData",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:{authorization:this.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"editUserData",value:function(t,e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:e})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"editUserPhoto",value:function(t){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"addCard",value:function(t,e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:{authorization:this.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:e})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"likeCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"dontLikeCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),T=document.querySelector(".profile__edit"),U=document.querySelector(".profile__avatar"),x=document.querySelector(".popup-profile"),z=x.querySelector(".popup__form"),R=x.querySelector(".popup__form-input_type_name"),D=x.querySelector(".popup__form-input_type_description"),A=document.querySelector(".profile__add"),N=document.querySelector(".popup-card").querySelector(".popup__form"),V=new q({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",authorization:"0000691e-e91a-4354-99a8-58e471776d5e"}),B=new O({nameSelector:".profile__name",infoSelector:".profile__description",photoSelector:".profile__avatar-photo"}),H=new v(".poster-popup"),J=new E(".popup-card",(function(t,e){t.preventDefault(),document.querySelector(".popup-card").querySelector(".popup__submit").textContent="Сохранение...",V.addCard(e["title-input"],e["link-input"]).then((function(){W(),J.close(),document.querySelector(".popup-card").querySelector(".popup__submit").textContent="Сохранить"})).catch((function(t){return console.log(t)}))})),M=new E(".delete-popup",(function(t){t.preventDefault()})),$=new E(".popup-profile",(function(t,e){t.preventDefault(),document.querySelector(".popup-profile").querySelector(".popup__submit").textContent="Сохранение...",V.editUserData(e["name-input"],e["description-input"]).then((function(t){B.setUserInfo(t.name,t.about),$.close(),document.querySelector(".popup-profile").querySelector(".popup__submit").textContent="Сохранить"})).catch((function(t){return console.log(t)}))})),F=new E(".popup-avatar",(function(t,e){t.preventDefault(),document.querySelector(".popup-avatar").querySelector(".popup__submit").textContent="Сохранение...",V.editUserPhoto(e["url-input"]).then((function(t){B.setUserPhoto(t.avatar),F.close(),document.querySelector(".popup-avatar").querySelector(".popup__submit").textContent="Сохранить"})).catch((function(t){return console.log(t)}))})),G=Q(z),K=Q(N);function Q(t){var e=new n(t,".popup__form-input",".popup__submit");return e.enableValidation(),e}function W(){V.getInitialCards().then((function(t){var e=new i({items:Array.from(t),renderer:function(t){var n,r,o,i=(n=t,"#card-template",r=function(){H.open(t)},V.likeCard,V.dontLikeCard,o=new c(B.getUserId(),n,"#card-template",r,{likeCard:function(t){V.likeCard(t).then((function(t){o.handleLikeCard(t)})).catch((function(t){return console.log(t)}))},dontLikeCard:function(t){V.dontLikeCard(t).then((function(t){o.handleDontLikeCard(t)})).catch((function(t){return console.log(t)}))},deleteCard:function(){M.open()}}),o.generateCard());e.addItem(i)}},".elements__list");e.renderItems()})).catch((function(t){return console.log(t)}))}H.setEventListeners(),J.setEventListeners(),M.setEventListeners(),$.setEventListeners(),F.setEventListeners(),N.reset(),T.addEventListener("click",(function(){var t=B.getUserInfo();R.value=t.userName,D.value=t.userInfo,G.resetValidation(),$.open()})),U.addEventListener("click",(function(){F.open()})),A.addEventListener("click",(function(){K.resetValidation(),J.open()})),V.getUserData().then((function(t){B.setUserId(t._id),B.setUserInfo(t.name,t.about),B.setUserPhoto(t.avatar)})).catch((function(t){return console.log(t)})),W()})();