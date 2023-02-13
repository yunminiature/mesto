export default class UserInfo{
  constructor({nameSelector, infoSelector}){
    this._userName = document.querySelector(nameSelector);
    this._userInfo = document.querySelector(infoSelector);
  }

  getUserInfo(){
    const userName = this._userName.textContent;
    const userInfo = this._userInfo.textContent;

    return {userName, userInfo}
  }

  setUserInfo(name, info){
    this._userName.textContent = name;
    this._userInfo.textContent = info;
  }
}