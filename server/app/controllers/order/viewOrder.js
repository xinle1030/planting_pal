const db = require("../../models");
const Order = db.order;
const config = require("../../config/s3.config");
const { S3, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3 = new S3({
  credentials: {
    accessKeyId: config.ACCESS_KEY,
    secretAccessKey: config.SECRET_ACCESS_KEY,
  },
  region: config.BUCKET_REGION,
});

exports.getOrders = (req, res) => {
  Order.findAll()
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
      res.status(200).json({ message: "Orders Retrieved.", orders: orders });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error retrieving orders data" });
    });
};

exports.getOrder = (req, res) => {
  const orderId = parseInt(req.params.id);
  if (isNaN(orderId)) {
    res
      .status(400)
      .json({ message: "Invalid input: orderId must be an integer" });
    return;
  }

  Order.findOne({ where: { orderId: orderId } })
    .then(async (order) => {
      if (!order) {
        res.status(404).json({ message: "Order not found" });
      } else {
        if (order.photoLink !== null) {
          const parameters = {
            Bucket: config.BUCKET_NAME,
            Key: order.photoLink,
          };

          const command = new GetObjectCommand(parameters);

          const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

          order.photoLink = url;
        }

        res.status(200).json({ message: "Order Retrieved.", order: order });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error retrieving order data" });
    });
};
