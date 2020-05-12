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
      <div>
        <div>
          (+{country_mobile_code}) {formatted_line_number}
        </div>

        <div>
          <div>
            <div>
              Fecha de vencimiento
            </div>

            <div>
              {expiration_date}
            </div>
          </div>

          <div>
            <div>
              Referencia de pago
            </div>

            <div>
              {payment_reference}
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <div>
                Fecha último pago
              </div>

              <div>
                {last_payment_date}
              </div>
            </div>

            <div>
              <div>
                Estado de factura
              </div>

              <div>
                {invoice_status}
              </div>
            </div>
          </div>

          <div>
            <div>
              Valor a pagar
            </div>

            <div>
              {currency} {amount}
            </div>
          </div>
        </div>

        <div>
          <div>
            <button onClick={payment_history}>
              Ver historial de pagos
            </button>
          </div>

          <div>
            <button onClick={pay}>
              Pagar
            </button>
          </div>  
        </div>
      </div>
    )
  }
}