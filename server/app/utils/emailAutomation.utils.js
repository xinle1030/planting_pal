const nodemailer = require("nodemailer");
let recipientEmail = $("customer_email").text();
let driveLink = $("google_drive").text();

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "sarryt19@outlook.com",
    pass: "Sarry1999",
  },
});

console.log("created");

async function sendMail(receiver, subject, content) {
  try {
    await transporter.sendMail({
      from: "sarryt19@outlook.com",
      to: recipientEmail,
      subject: "Together We Can Heal The Earth!",
      text:
        "The link attached below consists of certificate and tree photo:\r\n" +
        driveLink,
    });

    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = {
  sendMail,
};
