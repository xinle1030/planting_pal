const { google } = require("googleapis");
const { path } = require("path");
const fs = require("fs");
const config = require("../config/gdrive.config");

const CLIENT_ID = config.CLIENT_ID;
const CLIENT_SECRET = config.CLIENT_SECRET;
const REDIRECT_URI = config.REDIRECT_URI;
const REFRESH_TOKEN = config.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

async function uploadFile(fileName) {
  console.log(fileName);
  const filePath = `assets/pdf/output/${fileName}`;

  try {
    const response = await drive.files.create({
      requestBody: {
        name: fileName,
        mimeType: "application/pdf",
      },

      media: {
        mimeType: "application/pdf",
        body: fs.createReadStream(filePath),
      },
    });
    console.log(`File ID: ${response.data.id}`);
    return response.data.id;
  } catch (error) {
    console.log(error.message);
  }
}

async function generatePublicUrl(fileName) {
  try {
    const fileId = await uploadFile(fileName);
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });
    const result = await drive.files.get({
      fileId: fileId,
      fields: "webViewLink, webContentLink",
    });
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  generatePublicUrl,
};
