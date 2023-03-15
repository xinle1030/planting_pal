const db = require("../../models");
const Order = db.order;
const config = require("../../config/s3.config");
const {
  S3,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const crypto = require("crypto");
const { generatePDF } = require("../../utils/pdfgenerate.utils");

const s3 = new S3({
  credentials: {
    accessKeyId: config.ACCESS_KEY,
    secretAccessKey: config.SECRET_ACCESS_KEY,
  },
  region: config.BUCKET_REGION,
});

exports.updateOrder = async (req, res) => {
  const orderIds = req.query.orderIds;
  console.log(orderIds);
  console.log(req.files);
  const imageFiles = req.files;
  const flag = req.params.flag;

  for (i = 0; i < orderIds.length; i++) {
    const randomKey = crypto.randomBytes(32).toString("hex");

    let fileType = /\.(\w+)$/.exec(imageFiles[i].originalname);
    console.log(fileType);

    const parameters = {
      Bucket: config.BUCKET_NAME,
      Key: randomKey + fileType[0],
      Body: imageFiles[i].buffer,
      ContentType: imageFiles[i].mimetype,
    };

    const command = new PutObjectCommand(parameters);
    await s3.send(command);

    // Update order status and photoLink with parameters.Key
    if (flag === "tynote" || flag === "cert") {
      if (flag === "tynote") {
        await Order.update(
          {
            orderStatus: "In Progress",
          },
          {
            where: {
              orderId: orderIds[i],
            },
          }
        );
      } else if (flag === "cert") {
        generatePDF("CertPDF.html", "assets/pdf/output/Cert.pdf");
        await Order.update(
          {
            orderStatus: "Almost Fulfilled",
            treeCoordinates: req.body.treeCoordinates,
          },
          {
            where: {
              orderId: orderIds[i],
            },
          }
        );
      } else {
        await Order.update(
          {
            // orderStatus: flag === "tynote" ? "In Progress" : "Almost Fulfilled",
            orderStatus: "Partially Fulfilled",
            photoLink: parameters.Key,
          },
          {
            where: {
              orderId: orderIds[i],
            },
          }
        );
      }
    } else {
      await Order.update(
        {
          photoLink: parameters.Key,
        },
        {
          where: {
            orderId: orderIds[i],
          },
        }
      );
    }
  }

  return res.status(200).json("Success");
};
