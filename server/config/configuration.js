const configuration = {
  SMTP: {
    SMTP_HOST: "smtp.gmail.com",
    SMTP_PORT: 587,
    SMTP_USER: "projectsolnyshko@gmail.com",
    SMTP_PASSWORD: "eklmtrwykvqlfndj",
    API_URL: "http://localhost:8080",
    CLIENT_URL: "http://localhost:5173/",
  },

  tokenKeys: {
    JWT_ACCESS_KEY: "SECRET_KEY_RANDOM_ACCESS",
    JWT_REFRESH_KEY: "SECRET_KEY_RANDOM_REFRESH",
  },

  dialect: "postgres",
  username: "postgres",
  password: "0000",
  database: "postgres",
  host: "localhost",
};

module.exports = configuration;
