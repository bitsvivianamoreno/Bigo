let _invoiceService = null;

class InvoiceController {
  constructor({ InvoiceService }) {
    _invoiceService = InvoiceService;
  }

  async get(req, res) {
    const { payment_reference } = req.params;
    const invoice = await _invoiceService.get(payment_reference);
    return res.send(invoice);
  }

  async getAll(req, res) {
    const invoices = await _invoiceService.getAll();
    return res.send(invoices);
  }

  async update(req, res) {
    const { body } = req;
    const { invoiceId } = req.params;
    const updateInvoice = await _invoiceService.update(invoiceId, body);
    return res.send(updateInvoice);
  }
}

module.exports = InvoiceController;