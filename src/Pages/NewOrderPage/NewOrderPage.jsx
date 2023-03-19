//*************************************************************************
// THIS PAGE WILL SHOW THE MENU ITEMS FOR THE USER TO INTIATE THE ORDER.
//*************************************************************************

import { useState, useEffect, useRef } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/order-api";
import styles from "./NewOrderPage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import MenuList from "../../components/MenuList/MenuList";
import CategoryList from "../../components/CategoryList/CategoryList";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import React from "react";

export default function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  // Providing an empty 'dependency array'
  // results in the effect running after
  // the FIRST render only

  /*-- Event Handlers --*/
  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate("/orders");
  }

  return (
    <main className={styles.NewOrderPage}>
      <aside>
        {/* <Logo /> */}
        <CategoryList
          categories={categoriesRef.current}
          cart={setCart}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">
          PREVIOUS ORDERS
        </Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <MenuList
        menuItems={menuItems.filter((item) => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}

//   return (
//     <div className="eachItem">
//       <h2>Signature Ice Creams</h2>
//       <div className="menuToOrder">
//         <p>Coffee Lovers Only</p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
//           harum fiure.
//         </p>
//         <div class="btnAndPrice">
//           <button className="addToOrder">ADD TO ORDER</button>
//           <button className="editItem">EDIT</button>
//           <button className="delItem">DELETE</button>
//           <p className="priceDisp">$12.75</p>
//         </div>
//         <fieldset>
//           <legend>Choose a size</legend>
//           <div>
//             <input type="checkbox" id="likeIt" name="size" value="size" />
//             <label for="likeIt">Like it</label>
//           </div>
//           <div>
//             <input type="checkbox" id="loveIt" name="size" value="size" />
//             <label for="loveIt">Love it</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="haveItAll"
//               name="size"
//               value="size"
//               checked
//             />
//             <label for="haveItAll">Have it all</label>
//           </div>
//         </fieldset>

//         <fieldset>
//           <legend>Choose Toppings</legend>
//           {/* <div>
//             <input type="checkbox" id="nuts" name="toppings" value="toppings" />
//             <label for="nuts">Nuts</label>
//           </div> */}
//           <div>
//             <input
//               type="checkbox"
//               id="chocoChips"
//               name="toppings"
//               value="toppings"
//               checked
//             />
//             <label for="chocoChips">Choco chips</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="caramel"
//               name="toppings"
//               value="toppings"
//               checked
//             />
//             <label for="caramel">Caramel</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="heathBar"
//               name="toppings"
//               value="toppings"
//               checked
//             />
//             <label for="heathBar">Heath bar</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="Sprinkle"
//               name="toppings"
//               value="toppings"
//               checked
//             />
//             <label for="Sprinkle">Sprinkle`</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="peanuts"
//               name="toppings"
//               value="toppings"
//               checked
//             />
//             <label for="peanuts">Peanuts</label>
//           </div>
//         </fieldset>
//       </div>
//     </div>
//   );
// }
