export default class UserInfo{
  constructor({nameSelector, infoSelector}){
    this._userNameSelector = nameSelector;
    this._userInfoSelector = infoSelector;
    this._userName = document.querySelector(this._userNameSelector);
    this._userInfo = document.querySelector(this._userInfoSelector);
  }

  getUserInfo(){
    const userName = document.querySelector(this._userNameSelector).textContent;
    const userInfo = document.querySelector(this._userInfoSelector).textContent;

    return {userName, userInfo}
  }

  setUserInfo(name, info){
    this._userName.textContent = name;
    this._userInfo.textContent = info;
  }
}