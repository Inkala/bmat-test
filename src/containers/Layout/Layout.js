import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import Reports from '../../components/Reports/Reports';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <main className="layout">
        <Header />
        <section className="main-section">
          <SideMenu />
          <Reports />
        </section>
      </main>
    );
  }
}

export default Layout;
