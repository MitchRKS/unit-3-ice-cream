import styles from "./OrderHistoryPage.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ordersAPI from "../../utilities/order-api";
import Logo from "../../components/Logo/Logo";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import OrderList from "../../components/OrderList/OrderList";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import Aside from "../../components/aside";

export default function OrderHistoryPage({ user, setUser }) {
  /*--- State --- */
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  /*--- Side Effects --- */
  useEffect(function () {
    // Load previous orders (paid)
    async function fetchOrderHistory() {
      const orders = await ordersAPI.getOrderHistory();
      setOrders(orders);
      // If no orders, activeOrder will be set to null below
      setActiveOrder(orders[0] || null);
    }
    fetchOrderHistory();
  }, []);

  /*--- Event Handlers --- */
  function handleSelectOrder(order) {
    setActiveOrder(order);
  }

  /*--- Rendered UI --- */
  return (
    <main className={styles.OrderHistoryPage}>
      <Aside user={user} setUser={setUser} styles={styles.aside}>
        <Link to="/orders/new" className="button btn-sm">
          NEW ORDER
        </Link>
      </Aside>
      <OrderList
        orders={orders}
        activeOrder={activeOrder}
        handleSelectOrder={handleSelectOrder}
      />
      <OrderDetail order={activeOrder} />
    </main>
  );
}
