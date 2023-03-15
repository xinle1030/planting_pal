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
const { sendMail } = require("../../utils/emailAutomation.utils");
const { generatePublicUrl } = require("../../utils/gdriveUpload.utils");

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

    let parameters = {};

    if (imageFiles !== null || imageFiles !== undefined) {
      if (imageFiles.length > 0) {
        let fileType = /\.(\w+)$/.exec(imageFiles[i].originalname);

        parameters = {
          Bucket: config.BUCKET_NAME,
          Key: randomKey + fileType[0],
          Body: imageFiles[i].buffer,
          ContentType: imageFiles[i].mimetype,
        };

        const command = new PutObjectCommand(parameters);
        await s3.send(command);
      }
    }

    if (flag === "tynote" || flag === "cert" || flag === "photo") {
      if (flag === "tynote") {
        await generatePDF("TqPDF.html", "assets/pdf/output/TqPDF.pdf");
        const { webContentLink } = await generatePublicUrl("TqPDF.pdf");

        await Order.update(
          {
            orderStatus: "In Progress",
            pdfLink: webContentLink,
          },
          {
            where: {
              orderId: orderIds[i],
            },
          }
        );
      } else if (flag === "cert") {
        await generatePDF("CertPDF.html", "assets/pdf/output/CertPDF.pdf");
        const { webContentLink } = await generatePublicUrl("CertPDF.pdf");

        await Order.update(
          {
            orderStatus: "Almost Fulfilled",
            certLink: webContentLink,
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
            orderStatus: "Partially Fulfilled",
            photoLink: parameters.Key,
            treeCoordinates: req.body.treeCoordinates,
          },
          {
            where: {
              orderId: orderIds[i],
            },
          }
        );
      }
    } else {
      await Order.findOne({ where: { orderId: orderIds[i] } })
        .then(async (order) => {
          sendMail(order.receiverEmail);

          await Order.update(
            {
              orderStatus: "Fulfilled",
            },
            {
              where: {
                orderId: orderIds[i],
              },
            }
          );
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ message: "Error retrieving order data" });
        });
    }
  }

  return res.status(200).json("Success");
};
