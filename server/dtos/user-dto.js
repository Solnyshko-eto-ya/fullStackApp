module.exports = class UserDto {
  email;
  username;
  isActivated;

  constructor(model) {
    this.email = model.email;
    this.username = model.username;
    this.isActivated = model.isActivated;
  }
};
