const db = require("../../models");
const Order = db.order;
const config = require("../../config/s3.config");
const { S3, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const Sequelize = require("sequelize");

const s3 = new S3({
  credentials: {
    accessKeyId: config.ACCESS_KEY,
    secretAccessKey: config.SECRET_ACCESS_KEY,
  },
  region: config.BUCKET_REGION,
});

exports.getOrdersByStatus = (req, res) => {
  const status = req.query.status;

  console.log(status);

  Order.findAll({ where: { status: status } })
    .then(async (orders) => {
      for (i = 0; i < orders.length; i++) {
        if (orders[i].photoLink !== null) {
          const parameters = {
            Bucket: config.BUCKET_NAME,
            Key: orders[i].photoLink,
          };

          const command = new GetObjectCommand(parameters);

          const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

          orders[i].photoLink = url;
        }
      }
      res
        .status(200)
        .json({ message: "Orders with status " + status, orders: orders });
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error retrieving orders data with status" + status });
    });
};
