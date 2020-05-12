const { Router } = require("express");

module.exports = function({ InvoiceController }) {
  const router = Router();

  router.get("/:payment_reference", InvoiceController.get);
  router.get("", InvoiceController.getAll);
  router.patch("/:invoiceId", InvoiceController.update);

  return router;
};