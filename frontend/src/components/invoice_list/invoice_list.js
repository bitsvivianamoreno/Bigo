import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './invoice_list.css';

export class InvoiceList extends Component {
  static propTypes = {
    country_mobile_code: PropTypes.number,
    formatted_line_number: PropTypes.string,
    currency: PropTypes.string,
    amount: PropTypes.number,
    invoice_status: PropTypes.string,
    expiration_date: PropTypes.string
  }

  render() {

    const {
      country_mobile_code,
      formatted_line_number,
      currency,
      amount,
      invoice_status,
      expiration_date,
      payment_reference,
      detail
    } = this.props;

    return (
      <div className="invoice-data" key={payment_reference} onClick={detail}>
        <div className="d-flex">
          <div className="data">
            (+{country_mobile_code}) {formatted_line_number}
          </div>

          <div className= {`data status ${invoice_status === 'Vencida' ? "expired" : ""}`}>
            {invoice_status}
          </div>
        </div>

        <div className="d-flex">
          <div className="data amount">
            {currency} {amount}.000
          </div>

          <div className="data expiration-date">
            {expiration_date}
          </div>
        </div>
      </div>
    )
  }
}