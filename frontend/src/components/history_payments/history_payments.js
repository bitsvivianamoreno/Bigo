import React, {Component} from 'react';
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import './history_payments.scss';

export class HistoryPayments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      history_payments: [],
    }
  };

  async componentDidMount() {
    const guardado = JSON.parse(localStorage.getItem('detail'));
    this.setState({ history_payments: guardado.payment_history});
  }

  render() {

    const {
      close
    } = this.props;

    this.items = this.state.history_payments.map((item, key) =>
      <Tr key={item._id}>
        <Td>
          {item.period}
        </Td>

        <Td>
          $ {item.amount}.000
        </Td>

        <Td>
          $ {item.balance}
        </Td>
      </Tr>
        // <li key={item.id}>{item.name}</li>
    );

    return (
      <div className="content-history">
        <div className="header-modal">
          <h2 className="header-modal-title">
            Historial de pagos
          </h2>

          <FontAwesomeIcon onClick={close} className="header-modal-icon" icon={faTimesCircle}/>
        </div>

        <Table className="table">
          <Thead>
            <Tr>
              <Th>Periodo</Th>
              <Th>Valor de la factura</Th>
              <Th>Saldo</Th>
            </Tr>
          </Thead>
          <Tbody>
            {this.items}
          </Tbody>
        </Table>
      </div>
    )
  }
}