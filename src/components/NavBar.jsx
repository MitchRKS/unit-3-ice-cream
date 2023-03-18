import React from "react";
import { Link } from "react-router-dom";
import UserLogOut from "../components/UserLogOut/UserLogOut";

export default function NavBar({ user, setUser }) {
  return (
    <nav>
      <Link to="/orders/new">Signature Ice Creams</Link>
      &nbsp; | &nbsp;
      <Link to="/orders">Your Order</Link>
      &nbsp; | &nbsp;
      <UserLogOut user={user} setUser={setUser} />
    </nav>
  );
}
