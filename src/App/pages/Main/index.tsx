import React, { Fragment, ReactElement } from "react";
import Header from "../../layouts/Header";
import Content from "../../layouts/Content";
import Footer from "../../layouts/Footer";
import DialogLogin from "../../layouts/DialogLogin";
import DialogGame from "../../layouts/DialogGame";

const Main = (): ReactElement => {
  return (
    <Fragment>
      <Header />
      <Content />
      <Footer />
      <DialogLogin />
      <DialogGame />
    </Fragment>
  );
};
export default Main;
