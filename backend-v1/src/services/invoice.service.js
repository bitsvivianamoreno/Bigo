const BaseService = require("./base.service");
let _invoiceRepository = null;

class InvoiceService extends BaseService {

  constructor(InvoiceRepository ) {
    super(InvoiceRepository);
    _invoiceRepository = InvoiceRepository;
  }
}

module.exports = InvoiceService;