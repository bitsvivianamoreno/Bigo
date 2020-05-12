import React, {Component} from 'react';

export class Search extends Component {

  _filterUpdate() {
    const val = this.myValue.value;
    this.props._filterUpdate(val);
  }

  render() {
    return (
      <form>
        <input
          type="number" 
          placeholder="Filtrar por número..." 
          ref={(value) => {this.myValue = value}} 
          onChange={this._filterUpdate.bind(this)}
        />
      </form>
    )
  }

}