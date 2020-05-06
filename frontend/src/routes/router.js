import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Invoice } from '../views/invoice_pay/invoice_pay';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Redirect
          from="/"
          to="/invoice"
          />
        <Switch>
          <Route path='/invoice' exact component={Invoice}/>
          {/* <Route path='/index' exact />
          <Route path='/post/:id' />
          <Route path='/user' component={User} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}