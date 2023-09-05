const nodemailer = require("nodemailer");
const configuration = require("../config/configuration.js");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: configuration.SMTP.SMTP_HOST,
      port: configuration.SMTP.SMTP_PORT,
      secure: false,
      auth: {
        user: configuration.SMTP.SMTP_USER,
        pass: configuration.SMTP.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: configuration.SMTP.SMTP_USER,
      to,
      subject: "Активация аккаунта на" + configuration.SMTP.API_URL,
      text: "",
      html: `
      <div>
      <h1>Для активации перейдите по ссылке</h1>
      <a href="${link}">${link}</a>
      </div>
      `,
    });
  }
}

module.exports = new MailService();
