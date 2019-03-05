import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faUserCircle, faSortDown } from '@fortawesome/free-solid-svg-icons';

import Layout from './containers/Layout/Layout';
import './App.css';

library.add(far, faUserCircle, faSortDown);

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layout />
      </div>
    );
  }
}

export default App;
