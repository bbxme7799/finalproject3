import { Fragment } from "react";
import MainHeader from "./main-header";

export default function Layout(props) {
  return (
    <Fragment>
      <div className="container">
      <MainHeader />
      <main>{props.children}</main>
      </div>
    </Fragment>
    
  );
}
