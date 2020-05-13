import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './invoice_detail.css';

export class InvoiceDetail extends Component {

  static propTypes = {
    country_mobile_code: PropTypes.number,
    formatted_line_number: PropTypes.string,
    expiration_date: PropTypes.string,
    payment_reference: PropTypes.number,
    last_payment_date: PropTypes.string,
    invoice_status: PropTypes.string,
    currency: PropTypes.string,
    amount: PropTypes.number
  }

  render() {
    const {
      country_mobile_code,
      formatted_line_number,
      expiration_date,
      payment_reference,
      last_payment_date,
      invoice_status,
      currency,
      amount,
      payment_history,
      pay
    } = this.props;

    return (
      <div className="detail">
        <div className="line-number">
          (+{country_mobile_code}) {formatted_line_number}
        </div>

        <div className="d-flex data">
          <div>
            <div>
              Fecha de vencimiento
            </div>

            <div>
              {expiration_date}
            </div>
          </div>

          <div className="payment-reference">
            <div>
              Referencia de pago
            </div>

            <div className="number-reference">
              {payment_reference}
            </div>
          </div>
        </div>

        <div className="d-flex data">
          <div>
            <div>
              <div>
                Fecha último pago
              </div>

              <div>
                {last_payment_date}
              </div>
            </div>

            <div className="invoice-status">
              <div>
                Estado de factura
              </div>

              <div className= {`status ${invoice_status === 'Vencida' ? "expired" : ""}`}>
                {invoice_status}
              </div>
            </div>
          </div>

          <div className="currency-amount">
            <div>
              Valor a pagar
            </div>

            <div className="amount">
              {currency} {amount}.000
            </div>
          </div>
        </div>

        <div className="d-flex data">
          <div className="history-payment">
            <small className="pointer" onClick={payment_history}>
              Ver historial de pagos
            </small>
          </div>

          <div className="invoice-pay">
            <button className="pay pointer" onClick={pay}>
              Pagar
            </button>
          </div>  
        </div>
      </div>
    )
  }
}