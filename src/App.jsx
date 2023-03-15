import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "./Pages/AuthPage";
import ParlorMenu from "./Pages/ParlorMenu";
import ParlorOrder from "./Pages/ParlorOrder";
import NavBar from "./components/NavBar";

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
            <Route path="/orders/new" element={<ParlorMenu />} />
            {/* THIS PAGE WILL SHOW THE ORDER DETAILS OF THE CURRENT ORDER
          (SHOPPING CART) */}
            <Route path="/orders" element={<ParlorOrder />} />
          </Routes>
        </>
      ) : (
        /* IF THE USER IS UNAUTHENTICATED SHOW THE LOGIN/SIGNUP PAGE */
        <AuthPage />
      )}
    </main>
  );
}

export default App;
