import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './search.css';

export class Search extends Component {

  _filterUpdate() {
    const val = this.myValue.value;
    this.props._filterUpdate(val);
  }

  render() {
    return (
      <form className="search-container">
        <input
          id="search-bar"
          type="number" 
          placeholder="Filtrar por número..." 
          ref={(value) => {this.myValue = value}} 
          onChange={this._filterUpdate.bind(this)}
        />

        <FontAwesomeIcon className="icon-search" icon={faSearch} rotation={90}/>
      </form>
    )
  }

}