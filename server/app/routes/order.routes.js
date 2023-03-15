const { authJwt } = require("../middleware");
const { createOrder, updateOrder, viewOrder } = require("../controllers/order");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/orders",
    // [authJwt.verifyToken, authJwt.isAdmin],
    createOrder.createOrder
  );

  app.get(
    "/api/orders",
    // [authJwt.verifyToken, authJwt.isAdmin],
    viewOrder.getOrders
  );

  app.get(
    "/api/orders/:id",
    // [authJwt.verifyToken, authJwt.isAdmin],
    viewOrder.getOrder
  );

  app.put("/api/orders/:flag", upload.array("image"), updateOrder.updateOrder);
};
