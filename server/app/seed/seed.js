const db = require("../models");
var bcrypt = require("bcryptjs");
const Role = db.role;
const User = db.user;
const Order = db.order;

exports.initial = () => {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "manager",
  });

  Role.create({
    id: 3,
    name: "admin",
  });

  User.create({
    username: "user1",
    email: "user1@mail.com",
    password: bcrypt.hashSync("user1", 8),
    roles: ["admin"],
  });

  User.create({
    username: "user2",
    email: "user2@mail.com",
    password: bcrypt.hashSync("user2", 8),
    roles: ["manager"],
  });

  User.create({
    username: "user3",
    email: "user3@mail.com",
    password: bcrypt.hashSync("user3", 8),
    roles: ["user"],
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 1,
    nameOfBuyer: "user1",
    receiverName: "user1",
    receiverEmail: "user1@mail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "test",
    numberOfTrees: 1,
    amountReceived: 1.0,
    countryOfOrigin: "Malaysia",
    status: "unfulfilled",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 2,
    nameOfBuyer: "user2",
    receiverName: "user2",
    receiverEmail: "user2@mail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "test",
    numberOfTrees: 1,
    amountReceived: 1.2,
    countryOfOrigin: "Malaysia",
   status: "in progress",
    pdfLink:
      "https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?pid=ImgDet&rs=1",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "user3",
    receiverName: "user3",
    receiverEmail: "user3@mail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "test",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    status: "partially fulfilled",
    pdfLink:
      "https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?pid=ImgDet&rs=1",
    photoLink:
      "12fd20616246da3ee5d42347bea24c5340ba77afd772213ec60ddead95030bb2.jpg",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "user4",
    receiverName: "user4",
    receiverEmail: "user1@mail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "test",
    numberOfTrees: 1,
    amountReceived: 1.0,
    countryOfOrigin: "Malaysia",
    status: "almost fulfilled",
    pdfLink:
      "https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?pid=ImgDet&rs=1",
    photoLink:
      "12fd20616246da3ee5d42347bea24c5340ba77afd772213ec60ddead95030bb2.jpg",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "user5",
    receiverName: "user5",
    receiverEmail: "user5@mail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "test",
    numberOfTrees: 1,
    amountReceived: 1.0,
    countryOfOrigin: "Malaysia",
    status: "fulfilled",
    pdfLink:
      "https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?pid=ImgDet&rs=1",
    certLink:
      "https://pulpbits.net/wp-content/uploads/2014/01/Gray-Tabby-Cat1.jpg",
    photoLink:
      "12fd20616246da3ee5d42347bea24c5340ba77afd772213ec60ddead95030bb2.jpg",
  });
};
