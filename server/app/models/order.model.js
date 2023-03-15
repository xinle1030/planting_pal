module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    orderId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    orderDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    nameOfBuyer: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    receiverName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    receiverEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    greetings: {
      type: Sequelize.STRING,
    },
    treeCoordinatesRequired: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    treeCoordinates: {
      type: Sequelize.STRING,
    },
    numberOfTrees: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    amountReceived: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    countryOfOrigin: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    orderStatus: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Unfulfilled",
    },
    pdfLink: {
      type: Sequelize.STRING,
    },
    certLink: {
      type: Sequelize.STRING,
    },
    photoLink: {
      type: Sequelize.STRING,
    },
  });

  return Order;
};
