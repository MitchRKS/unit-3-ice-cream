import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <h1>ICE CREAM PARLOR</h1>
      <nav>
        <Link to="/orders/new">Signature Ice Creams</Link>
        &nbsp; | &nbsp;
        <Link to="/orders">Your Order</Link>
      </nav>
    </>
  );
}
