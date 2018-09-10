import React, { Component } from 'react';
import Layout from './components/layout';
import { Switch, Route } from 'react-router-dom';
import Currencies from './containers/Currencies';
import CurrencyDetail from './containers/CurrencyDetail';


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Currencies} />
          <Route path="/:currencyName" component={CurrencyDetail} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
