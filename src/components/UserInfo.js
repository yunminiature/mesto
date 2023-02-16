export default class UserInfo{
  constructor({nameSelector, infoSelector, photoSelector}){
    this._userName = document.querySelector(nameSelector);
    this._userInfo = document.querySelector(infoSelector);
    this._userPhoto = document.querySelector(photoSelector);
  }

  setUserId(id){
    this._userId = id
  }
  
  getUserId(){
    return this._userId;
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

  setUserPhoto(photo){
    this._userPhoto.src = photo;
  }
}