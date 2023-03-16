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
    email: "apedell88@gmail.com",
    password: "Chaw",
  });

  User.create({
    username: "Kok",
    email: "apedell88@gmail.com",
    password: "Kok",
  });

  User.create({
    username: "Fei",
    email: "apedell88@gmail.com",
    password: "Fei",
  });

  Order.create({
    orderDate: "2023-01-01",
    userId: 1,
    nameOfBuyer: "Chaw",
    receiverName: "Kok",
    receiverEmail: "apedell88@gmail.com",
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
    receiverEmail: "apedell88@gmail.com",
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
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday 3!",
    numberOfTrees: 3,
    amountReceived: 1.4,
    countryOfOrigin: "Malaysia",
  });

  Order.create({
    orderDate: "2023-01-04",
    userId: 1,
    nameOfBuyer: "Chaw",
    receiverName: "Kok",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday 3!",
    numberOfTrees: 3,
    amountReceived: 1.4,
    countryOfOrigin: "Malaysia",
  });

  Order.create({
    orderDate: "2023-01-05",
    userId: 1,
    nameOfBuyer: "Chaw",
    receiverName: "Kok",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday 3!",
    numberOfTrees: 3,
    amountReceived: 1.4,
    countryOfOrigin: "Malaysia",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 2,
    nameOfBuyer: "Chaw",
    receiverName: "Kok",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 1.2,
    countryOfOrigin: "Malaysia",
    orderStatus: "In Progress",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 2,
    nameOfBuyer: "Chaw",
    receiverName: "Kok",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 1.2,
    countryOfOrigin: "Malaysia",
    orderStatus: "In Progress",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 2,
    nameOfBuyer: "Chaw",
    receiverName: "Kok",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 1.2,
    countryOfOrigin: "Malaysia",
    orderStatus: "In Progress",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 2,
    nameOfBuyer: "Chaw",
    receiverName: "Kok",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 1.2,
    countryOfOrigin: "Malaysia",
    orderStatus: "In Progress",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 2,
    nameOfBuyer: "Chaw",
    receiverName: "Kok",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 1.2,
    countryOfOrigin: "Malaysia",
    orderStatus: "In Progress",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Partially Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Partially Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Partially Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Partially Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Partially Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Almost Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
    certLink:
      "https://drive.google.com/uc?id=1sbTWuCnDNKkxE_t0SDuYfxoUH9Cjtkz-&export=download",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Almost Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
    certLink:
      "https://drive.google.com/uc?id=1sbTWuCnDNKkxE_t0SDuYfxoUH9Cjtkz-&export=download",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Almost Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
    certLink:
      "https://drive.google.com/uc?id=1sbTWuCnDNKkxE_t0SDuYfxoUH9Cjtkz-&export=download",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Almost Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
    certLink:
      "https://drive.google.com/uc?id=1sbTWuCnDNKkxE_t0SDuYfxoUH9Cjtkz-&export=download",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Almost Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
    certLink:
      "https://drive.google.com/uc?id=1sbTWuCnDNKkxE_t0SDuYfxoUH9Cjtkz-&export=download",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
    certLink:
      "https://drive.google.com/uc?id=1sbTWuCnDNKkxE_t0SDuYfxoUH9Cjtkz-&export=download",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
    certLink:
      "https://drive.google.com/uc?id=1sbTWuCnDNKkxE_t0SDuYfxoUH9Cjtkz-&export=download",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
    certLink:
      "https://drive.google.com/uc?id=1sbTWuCnDNKkxE_t0SDuYfxoUH9Cjtkz-&export=download",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
    certLink:
      "https://drive.google.com/uc?id=1sbTWuCnDNKkxE_t0SDuYfxoUH9Cjtkz-&export=download",
  });

  Order.create({
    orderDate: "2021-01-01",
    userId: 3,
    nameOfBuyer: "Kok",
    receiverName: "Fei",
    receiverEmail: "apedell88@gmail.com",
    greetings: "Happy Birthday!",
    treeCoordinatesRequired: true,
    treeCoordinates: "12.231, 14.254",
    numberOfTrees: 1,
    amountReceived: 11.0,
    countryOfOrigin: "Malaysia",
    orderStatus: "Fulfilled",
    pdfLink:
      "https://drive.google.com/uc?id=1ehS1s1fUN42waTF5xKOetJOreWQf7rb2&export=download",
    photoLink: "https://tinyurl.com/2dweypw6",
    certLink:
      "https://drive.google.com/uc?id=1sbTWuCnDNKkxE_t0SDuYfxoUH9Cjtkz-&export=download",
  });
};
