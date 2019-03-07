import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import './App.css';

// Components for the Router
import Reports, { Sendungen, Programs } from './components/Reports/Reports';

// Importing FontAwesome Icons
import './helpers/fontIcons';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layout>
          <Switch>
            <Route exact path='/' component={Reports} />
            <Route path='/sendungen' component={Sendungen} />
            <Route path='/programs' component={Programs} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
