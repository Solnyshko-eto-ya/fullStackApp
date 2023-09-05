const UserService = require("../service/user-service.js");
const TokenService = require("../service/token-service.js");

class UserController {
  async registration(req, res, next) {
    try {
      const { username, password, email } = req.body;
      const userData = await UserService.registration(
        username,
        password,
        email
      );
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      console.log(error);
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const userData = await UserService.loginUser(username, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (error) {
      console.log(error);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await UserService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(token);
    } catch (error) {}
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params["link"];
      console.log("user controller link", activationLink); //eaab823a-e6c6-4aa4-bde9-df97a71401ba
      await UserService.activate(activationLink);
      return res.redirect(config.SMTP.CLIENT_URL);
    } catch (error) {}
  }

  async refresh(req, res, next) {
    try {
    } catch (error) {}
  }

  async getUsers(req, res) {
    try {
      const userData = await UserService.getAllUsers();
      return res.json(userData);
    } catch (error) {
      console.log(error);
    }
  }

  getAllTokens(req, res) {
    try {
      const tokenData = TokenService.getAllTokens();
      return res.json(tokenData);
    } catch (error) {}
  }
}

module.exports = new UserController();
