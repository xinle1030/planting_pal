const db = require("../models");
const Order = db.order;
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.managerBoard = (req, res) => {
  res.status(200).send("Manager Content.");
};

exports.createOrder = async (req, res) => {
  console.log(req.body);
  const {
    orderDate,
    userId,
    nameOfBuyer,
    receiverName,
    receiverEmail,
    greetings,
    treeCoordinatesRequired,
    treeCoordinates,
    numberOfTrees,
    amountReceived,
    countryOfOrigin,
    status,
    pdfLink,
    certLink,
    photoLink,
  } = req.body;

  if (
    !orderDate ||
    !userId ||
    !nameOfBuyer ||
    !receiverName ||
    !receiverEmail ||
    !numberOfTrees ||
    !amountReceived
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (
    typeof orderDate !== "string" ||
    typeof userId !== "number" ||
    typeof nameOfBuyer !== "string" ||
    typeof receiverName !== "string" ||
    typeof receiverEmail !== "string" ||
    (greetings && typeof greetings !== "string") ||
    typeof treeCoordinatesRequired !== "boolean" ||
    (treeCoordinatesRequired && typeof treeCoordinates !== "string") ||
    typeof numberOfTrees !== "number" ||
    typeof amountReceived !== "number" ||
    typeof countryOfOrigin !== "string" ||
    typeof status !== "string" ||
    (pdfLink && typeof pdfLink !== "string") ||
    (certLink && typeof certLink !== "string") ||
    (photoLink && typeof photoLink !== "string")
  ) {
    return res.status(400).json({ message: "Invalid input data type 1" });
  }

  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(400).send({ message: "User not found." });
  }

  Order.create({
    orderDate,
    userId,
    nameOfBuyer,
    receiverName,
    receiverEmail,
    greetings,
    treeCoordinatesRequired,
    treeCoordinates,
    numberOfTrees,
    amountReceived,
    countryOfOrigin,
    status,
    pdfLink,
    certLink,
    photoLink,
  })
    .then((newOrder) => {
      res.status(201).json(newOrder);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error creating new order" });
    });
};

exports.getOrders = (req, res) => {
  Order.findAll()
    .then((orders) => {
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
    .then((order) => {
      if (!order) {
        res.status(404).json({ message: "Order not found" });
      } else {
        res.status(200).json({ message: "Order Retrieved.", order: order });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error retrieving order data" });
    });
};
