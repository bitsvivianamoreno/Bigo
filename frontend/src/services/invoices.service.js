const baseUrl = 'http://localhost:1000/api';

export async function getListInvoices() {
  const response = await fetch(`${baseUrl}/invoices`);
  const invoicesJson = await response.json();
  return invoicesJson;
}

export async function getDetailInvoice(id) {
  const response = await fetch(`${baseUrl}/invoice/${id}`);
  const invoiceJson = await response.json();
  return invoiceJson;
}

export default {
  getListInvoices,
  getDetailInvoice
}