import React, {Component} from 'react';
import './invoice_pay.css';
import { InvoiceList } from '../../components/invoice_list/invoice_list';
import { InvoiceDetail} from '../../components/invoice_detail/invoice_detail';

const title = 'Pagar facturas';

const element = (
  <h1 className="title">
    {title}
  </h1>
);

export class Invoice extends Component {
  render() {
    return (
      <div className="content">
        {element}

        <div className="invoice">
          <div className="invoice-list">
            <InvoiceList />
          </div>

          <div className="invoice-detail">
            <InvoiceDetail />
          </div>
        </div>
      </div>
    )
  }
}