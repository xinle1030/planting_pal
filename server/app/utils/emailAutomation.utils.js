const nodemailer = require("nodemailer");
// let driveLink = $("google_drive").text();
const config = require("../config/email.config.js");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: config.USER,
    pass: config.PASS,
  },
});

async function sendMail(receiver) {
  try {
    await transporter.sendMail({
      from: "sarryt19@outlook.com",
      to: receiver,
      subject: "Together We Can Heal The Earth!",
      text:
        "The link attached below consists of certificate and tree photo:\r\n" +
        "sup",
      // driveLink,
    });

    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = {
  sendMail,
};
