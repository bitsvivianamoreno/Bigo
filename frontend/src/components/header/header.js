import React, {Component} from 'react'
import { Link } from "react-router-dom";
import './header.css'

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          Bigo
        </div>

        <div className="user">
          <img src="" alt="user" className="user-img"/>
          <span className="user-greeting">
            hola Juan
          </span>
        </div>

        {/* <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
              </li>
            <li>
              <Link to="/users">
                Users
              </Link>
            </li>

            <li>
              <Link to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav> */}
      </div>
    )
  }
}