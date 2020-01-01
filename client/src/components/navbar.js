import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default props => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand
          className="nav-brand"
          onClick={_ => {
            props.setPage(0);
          }}
        >
          Pizza Cabin
        </NavbarBrand>
      </Navbar>
    </div>
  );
};
