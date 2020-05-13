import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import './header.css';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src='./img/logo.png' alt="user" className="user-img"/>
        </div>

        <div className="user">
          <div className="user-icon">
            <FontAwesomeIcon icon={faUser}/>
          </div>

          <span className="user-greeting">
            Hola, Juan
          </span>
        </div>
      </div>
    )
  }
}