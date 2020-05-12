const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");
require("express-async-errors");

module.exports = function({ InvoiceRoutes }) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());
  
  apiRoutes.use("/invoice", InvoiceRoutes);

  router.use("/v1/api", apiRoutes);

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);
  
  return router;
}