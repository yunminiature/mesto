export default class UserInfo{
  constructor({nameSelector, infoSelector}){
    this._userNameSelector = nameSelector;
    this._userInfoSelector = infoSelector;
  }

  getUserInfo(){
    const userName = document.querySelector(this._userNameSelector).textContent;
    const userInfo = document.querySelector(this._userInfoSelector).textContent;

    return {userName, userInfo}
  }

  setUserInfo(name, info){
    document.querySelector(this._userNameSelector).textContent = name;
    document.querySelector(this._userInfoSelector).textContent = info;
  }
}