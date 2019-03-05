import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import './App.css';

// Components for the Router
import Content, { Sendungen, Programs } from './components/Content/Content';

// Importing FontAwesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import {
  faUserCircle,
  faSortDown,
  faFileAlt,
  faDesktop,
  faListAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(far, faUserCircle, faSortDown, faFileAlt, faDesktop, faListAlt);

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layout>
          <Switch>
            <Route exact path='/' component={Content} />
            <Route path='/sendungen' component={Sendungen} />
            <Route path='/programs' component={Programs} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
