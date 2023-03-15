const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

async function generatePDF(inputHtml, outputFile) {
  const formData = new FormData();
  formData.append(
    "instructions",
    JSON.stringify({
      parts: [
        {
          html: inputHtml,
          assets: [
            "style.css",
            "Inter-Regular.ttf",
            "Inter-Medium.ttf",
            "Inter-Bold.ttf",
            "SpaceMono-Regular.ttf",
            "plantingpal3.svg",
            "ribbon.svg",
          ],
        },
      ],
    })
  );
  formData.append(inputHtml, fs.createReadStream(inputHtml));
  formData.append("style.css", fs.createReadStream("assets/pdf/style.css"));
  formData.append(
    "Inter-Regular.ttf",
    fs.createReadStream("assets/pdf/Inter-Regular.ttf")
  );
  formData.append(
    "Inter-Medium.ttf",
    fs.createReadStream("assets/pdf/Inter-Medium.ttf")
  );
  formData.append(
    "Inter-Bold.ttf",
    fs.createReadStream("assets/pdf/Inter-Bold.ttf")
  );
  formData.append(
    "SpaceMono-Regular.ttf",
    fs.createReadStream("assets/pdf/SpaceMono-Regular.ttf")
  );
  formData.append(
    "plantingpal3.svg",
    fs.createReadStream("assets/pdf/plantingpal3.svg")
  );
  formData.append("ribbon.svg", fs.createReadStream("assets/pdf/ribbon.svg"));

  try {
    const response = await axios.post(
      "https://api.pspdfkit.com/build",
      formData,
      {
        headers: formData.getHeaders({
          Authorization:
            "Bearer pdf_live_8ZJtojugKfsGEj8KGoAm7x1mes4PSG5s8LCVNAAdYKO",
        }),
        responseType: "stream",
      }
    );

    response.data.pipe(fs.createWriteStream(outputFile));
  } catch (e) {
    if (e.response) {
      const errorString = await streamToString(e.response.data);
      console.log(errorString);
    } else {
      console.log(e);
    }
  }
}

function streamToString(stream) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on("error", (err) => reject(err));
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
}

module.exports = {
  generatePDF,
  streamToString,
};
