import React, {Component} from 'react';
import Modal from 'react-modal'
import { getListInvoices, getDetailInvoice } from '../../services/invoices.service'
import './invoice_pay.css';
import { Search } from '../../components/search/search'
import { InvoiceList } from '../../components/invoice_list/invoice_list';
import { InvoiceDetail } from '../../components/invoice_detail/invoice_detail';
import { HistoryPayments } from '../../components/history_payments/history_payments'

const title = 'Pagar facturas';

const element = (
  <h1 className="title">
    {title}
  </h1>
);

export class Invoice extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isFetch: true,
      invoices: [],
      invoice: [],
      filter: '',
      modalIsOpen: false
    }
  };

  async componentDidMount() {
    const responseInvoices = await getListInvoices();
    this.setState({ invoices: responseInvoices.data, isFetch: false });

    let {invoices} = this.state;
    this._serviceDetail(invoices[0]._id);

    Modal.setAppElement('body')
  };

  async _serviceDetail(id) {
    const responseInvoiceDetail = await getDetailInvoice(id);
    this.setState({ invoice: responseInvoiceDetail.data, isFetch: false });

    let {invoice} = this.state;
    localStorage.setItem('detail', JSON.stringify(invoice));
  };

  _filterUpdate(value) {
    this.setState({
      filter: value
    })
  };

  _renderInvoices() {
    let {isFetch, invoices, filter} = this.state

    if(isFetch) {
      return 'Loading'
    }

    return invoices
      .filter(invoice => {
        return invoice.line_number.indexOf(filter) >= 0;
      })
      .map(invoice => {
      return(
        <InvoiceList
          key = {invoice.payment_reference}
          country_mobile_code = {invoice.country_mobile_code}
          formatted_line_number = {invoice.formatted_line_number}
          currency = {invoice.currency}
          amount = {invoice.amount}
          invoice_status = {invoice.invoice_status}
          expiration_date = {invoice.expiration_date}
          detail = { () => this._serviceDetail(invoice._id) }
          filter = {this.state.filter}
        />
      )
    })
  };

  _renderInvoice() {
    let {invoice} = this.state
      
    return (
      <InvoiceDetail
        country_mobile_code = {invoice.country_mobile_code}
        formatted_line_number = {invoice.formatted_line_number}
        expiration_date = {invoice.expiration_date}
        payment_reference = {invoice.payment_reference}
        last_payment_date = {invoice.last_payment_date}
        invoice_status = {invoice.invoice_status}
        currency = {invoice.currency}
        amount = {invoice.amount}
        payment_history = {() => this.setState({ modalIsOpen: true })}
      />
    )
  };

  render() {
    return (
      <div className="content">
        {element}

        <div className="invoice">
          <div className="invoice-list">
            <Search
              filter = {this.state.filter}
              _filterUpdate = {this._filterUpdate.bind(this)}
            />

              <div className="invoices">
                {this._renderInvoices()}
              </div>
          </div>

          <div className="invoice-detail">
            {this._renderInvoice()}
          </div>
        </div>

        <Modal isOpen={this.state.modalIsOpen}>
          <HistoryPayments close={() => this.setState({ modalIsOpen: false })}/>
        </Modal>
        
      </div>
    )
  };
};