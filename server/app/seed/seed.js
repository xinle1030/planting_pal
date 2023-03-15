const db = require("../models");
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
    username: "Chaw",
    email: "chawkokfei@gmail.com",
    password: "Chaw",
  });

  User.create({
    username: "Kok",
    email: "chawkokfei@gmail.com",
    password: "Kok",
  });

  User.create({
    username: "Fei",
    email: "chawkokfei@gmail.com",
    password: "Fei",
  });

  Order.create({
    orderDate: "2023-01-01",
    userId: 1,
    nameOfBuyer: "Chaw",
    receiverName: "Kok",
    receiverEmail: "chawkokfei@gmail.com",
    greetings: "Happy Birthday!",
    numberOfTrees: 1,
    amountReceived: 1.0,
    countryOfOrigin: "Malaysia",
  });

  Order.create({
    orderDate: "2023-01-02",
    userId: 2,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "chawkokfei@gmail.com",
    greetings: "Happy Birthday 2!",
    numberOfTrees: 2,
    amountReceived: 1.2,
    countryOfOrigin: "Malaysia",
  });

  Order.create({
    orderDate: "2023-01-03",
    userId: 1,
    nameOfBuyer: "Chaw",
    receiverName: "Kok",
    receiverEmail: "chawkokfei@gmail.com",
    greetings: "Happy Birthday 3!",
    numberOfTrees: 3,
    amountReceived: 1.4,
    countryOfOrigin: "Malaysia",
  });

  // Order.create({
  //   orderDate: "2021-01-01",
  //   userId: 2,
  //   nameOfBuyer: "user2",
  //   receiverName: "user2",
  //   receiverEmail: "chawkokfei@gmail.com",
  //   greetings: "Happy Birthday!",
  //   treeCoordinatesRequired: true,
  //   treeCoordinates: "test",
  //   numberOfTrees: 1,
  //   amountReceived: 1.2,
  //   countryOfOrigin: "Malaysia",
  //   orderStatus: "Partially Fulfilled",
  //   orderStatus: "In Progress",
  //   pdfLink:
  //     "https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?pid=ImgDet&rs=1",
  // });

  // Order.create({
  //   orderDate: "2021-01-01",
  //   userId: 3,
  //   nameOfBuyer: "user3",
  //   receiverName: "user3",
  //   receiverEmail: "chawkokfei@gmail.com",
  //   greetings: "Happy Birthday!",
  //   treeCoordinatesRequired: true,
  //   treeCoordinates: "test",
  //   numberOfTrees: 1,
  //   amountReceived: 11.0,
  //   countryOfOrigin: "Malaysia",
  //   orderStatus: "Partially Fulfilled",
  //   pdfLink:
  //     "https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?pid=ImgDet&rs=1",
  //   photoLink:
  //     "12fd20616246da3ee5d42347bea24c5340ba77afd772213ec60ddead95030bb2.jpg",
  // });

  // Order.create({
  //   orderDate: "2021-01-01",
  //   userId: 3,
  //   nameOfBuyer: "user4",
  //   receiverName: "user4",
  //   receiverEmail: "chawkokfei@gmail.com",
  //   greetings: "Happy Birthday!",
  //   treeCoordinatesRequired: true,
  //   treeCoordinates: "test",
  //   numberOfTrees: 1,
  //   amountReceived: 1.0,
  //   countryOfOrigin: "Malaysia",
  //   orderStatus: "Almost fulfilled",
  //   pdfLink:
  //     "https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?pid=ImgDet&rs=1",
  //   photoLink:
  //     "12fd20616246da3ee5d42347bea24c5340ba77afd772213ec60ddead95030bb2.jpg",
  // });

  // Order.create({
  //   orderDate: "2021-01-01",
  //   userId: 3,
  //   nameOfBuyer: "user5",
  //   receiverName: "user5",
  //   receiverEmail: "chawkokfei@gmail.com",
  //   greetings: "Happy Birthday!",
  //   treeCoordinatesRequired: true,
  //   treeCoordinates: "test",
  //   numberOfTrees: 1,
  //   amountReceived: 1.0,
  //   countryOfOrigin: "Malaysia",
  //   orderStatus: "Fulfilled",
  //   pdfLink:
  //     "https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?pid=ImgDet&rs=1",
  //   certLink:
  //     "https://pulpbits.net/wp-content/uploads/2014/01/Gray-Tabby-Cat1.jpg",
  //   photoLink:
  //     "12fd20616246da3ee5d42347bea24c5340ba77afd772213ec60ddead95030bb2.jpg",
  // });
};
