const bcrypt = require("bcrypt");
const User = require("../models/user.js");
const TokenService = require("./token-service.js");
const uuid = require("uuid");
const mailService = require("./mail-service.js");
const UserDto = require("../dtos/user-dto.js");
const configuration = require("../config/configuration.js");

class UserService {
  async registration(username, password, email) {
    const candidate = await User.findOne({
      where: { username: username, email: email },
    });
    if (candidate) {
      return {
        message: "Пользователь с таким username или email уже существует",
      };
    }
    const activationLink = uuid.v4();
    const hashPassword = bcrypt.hashSync(password, 5);
    const user = await User.create({
      username,
      password: hashPassword,
      email: email,
      activationLink,
    });
    await mailService.sendActivationMail(
      email,
      `${configuration.SMTP.API_URL}/api/activate/${activationLink}`
    );
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });
    await TokenService.saveToken(userDto.username, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }

  async getAllUsers() {
    const users = await User.findAll();
    return users;
  }

  async loginUser(username, password) {
    const user = await User.findOne({ where: { username: username } });
    if (!user) {
      return { message: "Пользователь не найден" };
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return { message: "Некорректный пароль" };
    }
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ userDto });
    await TokenService.saveToken(userDto.username, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async activate(activationLink) {
    console.log("mail service link", activationLink);
    const user = await User.findOne({
      where: { activationLink: activationLink },
    });
    console.log(user);

    await user.update({ isActivated: true });
    await user.save();
  }

  async logout() {
    const token = await TokenService.removeToken(refreshToken);
    return token;
  }
}

module.exports = new UserService();
