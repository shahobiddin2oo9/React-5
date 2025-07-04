import React, { Component, Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <div>{<Outlet />}</div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
