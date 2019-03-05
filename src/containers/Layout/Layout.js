import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <main className='layout'>
        <Header />
        <p>SideMenu</p>
        <p>Content</p>
      </main>
    );
  }
}

export default Layout;
