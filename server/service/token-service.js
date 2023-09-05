const jwt = require("jsonwebtoken");
const configuration = require("../config/configuration.js");
const Token = require("../models/token.js");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(
      payload,
      configuration.tokenKeys.JWT_ACCESS_KEY,
      {
        expiresIn: "1h",
      }
    );
    const refreshToken = jwt.sign(
      payload,
      configuration.tokenKeys.JWT_REFRESH_KEY,
      {
        expiresIn: "30d",
      }
    );
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(username, refreshToken) {
    const tokenData = await Token.findOne();
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await Token.create({
      refreshToken: refreshToken,
    });
    return token;
  }

  async removeToken() {
    const tokenData = await Token.destroy({ refreshToken });
    return tokenData;
  }

  async getAllTokens() {
    const token = await Token.findAll();
    return token;
  }
}

module.exports = new TokenService();
