import React, {Component} from 'react';
import './footer.css';

export class Footer extends Component {
  today = new Date();
  year = this.today.getFullYear();

  render() {
    return (
      <div className="footer">
        Se recomienda utilizar Google Chrome - Firefox / Todos los derechos reservados © BIGO {this.year}
      </div>
    )
  }
}