import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import Content from '../../components/Content/Content';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <main className="layout">
        <Header />
        <section className="main-section">
          <SideMenu />
          <Content />
        </section>
      </main>
    );
  }
}

export default Layout;
