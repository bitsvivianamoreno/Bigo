const BaseRepository = require("./base.repository");
let _invoice = null;

class InvoiceRepository extends BaseRepository {
  constructor({ Invoice }) {
    super(Invoice);
    _invoice = Invoice;
  }
}

module.exports = InvoiceRepository;