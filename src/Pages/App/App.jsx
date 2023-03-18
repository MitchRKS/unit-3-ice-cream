import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "../AuthPage";
import ParlorMenu from "../ParlorMenu/ParlorMenu";
import ParlorOrder from "../ParlorOrder/ParlorOrder";
import NavBar from "../../components/NavBar";
import { getUser } from "../../utilities/users-service";

function App() {
  const [user, setUser] = useState({});

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            {/* IF THE USER IS AUTHENTICATED SHOW THE MENU PAGE FOR THE USER TO
          INTIATE THE ORDER  */}
            <Route
              path="/orders/new"
              element={<ParlorMenu user={user} setUser={setUser} />}
            />
            {/* THIS PAGE WILL SHOW THE ORDER DETAILS OF THE CURRENT ORDER
          (SHOPPING CART) */}
            <Route
              path="/orders"
              element={<ParlorOrder user={user} setUser={setUser} />}
            />
          </Routes>
        </>
      ) : (
        /* IF THE USER IS UNAUTHENTICATED SHOW THE LOGIN/SIGNUP PAGE */
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
