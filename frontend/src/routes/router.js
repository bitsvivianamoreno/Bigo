import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Invoice } from '../views/invoice_pay/invoice_pay';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Redirect
          from="/invoice"
          to="/invoice"
          />
        <Switch>
          <Route path='/invoice' exact component={Invoice}/>
        </Switch>
      </BrowserRouter>
    );
  }
}