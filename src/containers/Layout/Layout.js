import React, { Component } from "react";

import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import "./Layout.css";

// Imports for the Router
import { Route, Switch } from "react-router-dom";
import Reports, { Sendungen, Programs } from "../../components/Reports/Reports";

class Layout extends Component {
  render() {
    return (
      <main className="layout">
        <Header />
        <section className="main-section">
          <SideMenu />
          <div className="content-area">
            <Switch>
              <Route exact path="/" component={Reports} />
              <Route path="/sendungen" component={Sendungen} />
              <Route path="/programs" component={Programs} />
            </Switch>
          </div>
        </section>
      </main>
    );
  }
}

export default Layout;
