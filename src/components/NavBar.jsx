import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/orders/new">Signature Ice Creams</Link>
      &nbsp; | &nbsp;
      <Link to="/orders">Your Order</Link>
    </nav>
  );
}
