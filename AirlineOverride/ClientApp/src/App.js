import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { AirlineOverrideList } from './components/AirlineOverrideList';
import { Home } from './components/Home';
import { AddAirlineOverride } from './components/AddAirlineOverride';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/airlineoverridelist' component={AirlineOverrideList} />
            <Route exact path='/addairlineoverride' component={AddAirlineOverride} />
      </Layout>
    );
  }
}
