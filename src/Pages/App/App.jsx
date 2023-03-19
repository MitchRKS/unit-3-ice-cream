import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./App.module.scss";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar";
import { getUser } from "../../utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* IF THE USER IS AUTHENTICATED SHOW THE MENU PAGE FOR THE USER TO
          INTIATE THE ORDER  */}
            <Route
              path="/orders/new"
              element={<NewOrderPage user={user} setUser={setUser} />}
            />
            {/* THIS PAGE WILL SHOW THE ORDER DETAILS OF THE CURRENT ORDER
          (SHOPPING CART) */}
            <Route
              path="/orders"
              element={<OrderHistoryPage user={user} setUser={setUser} />}
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
