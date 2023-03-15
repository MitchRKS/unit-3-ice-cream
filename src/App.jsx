import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "./Pages/AuthPage";
import ParlorMenu from "./Pages/ParlorMenu";
import ParlorOrder from "./Pages/ParlorOrder";

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? (
        <Routes>
          {/* WHEN AN AUTHENTICATED USER NAVIGATES, THE MENU PAGE IS SHOWN FOR THE USER TO INTIATE THE ORDER */}
          <Route path="/orders/new" element={<ParlorMenu />} />

          {/* THIS PAGE WILL SHOW THE ORDER DETAILS OF THE CURRENT ORDER (SHOPPING CART) */}
          <Route path="/orders" element={<ParlorOrder />} />
        </Routes>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
