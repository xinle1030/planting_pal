const db = require("../../models");
const Order = db.order;
const User = db.user;

exports.createOrder = async (req, res) => {
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
    !amountReceived ||
    !countryOfOrigin ||
    treeCoordinatesRequired == null
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
    (pdfLink && typeof pdfLink !== "string") ||
    (certLink && typeof certLink !== "string") ||
    (photoLink && typeof photoLink !== "string")
  ) {
    return res.status(400).json({ message: "Invalid input data type" });
  }

  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(400).send({ message: "User not found." });
  }

  const orderStatus = "Unfulfilled";

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
