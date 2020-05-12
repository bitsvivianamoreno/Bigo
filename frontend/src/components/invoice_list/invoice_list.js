import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './invoice.list.css';

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
      <div className="hhh" onClick={detail}>
        <div key={payment_reference}>
          <div>
            <span>
              (+{country_mobile_code}) {formatted_line_number}
            </span>

            <span>
              {currency}{amount}
            </span>
          </div>

          <div>
            <span>
              {invoice_status}
            </span>

            <span>
              {expiration_date}
            </span>
          </div>
        </div>
      </div>
    )
  }
}