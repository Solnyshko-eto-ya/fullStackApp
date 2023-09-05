const { Sequelize, DataTypes, STRING } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Token = sequelize.define(
  "Token",
  {
    refreshToken: {
      type: DataTypes.STRING,
    },
    user: {
      type: DataTypes.JSONB,
    },
  },
  {
    // Здесь определяются другие настройки модели
  }
);

Token.sync();

module.exports = Token;
