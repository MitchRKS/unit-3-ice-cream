import styles from "./MenuListItem.module.scss";

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className={styles.MenuListItem}>
      {/* <div className={styles.emoji + " " + "flex-ctr-ctr"}>
        {menuItem.emoji}
      </div> */}
      {/* <div className={styles.name}>
        {menuItem.name}
        <div className={styles.buy}> */}
      <div className="nameAndPrice">
        {menuItem.name}
        <span className={styles.buy}>${menuItem.price.toFixed(2)}</span>
      </div>
      {/* <span>${menuItem.price.toFixed(2)}</span> */}
      <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
        ADD
      </button>
      <fieldset>
        <legend>Choose a size</legend>
        <div>
          <input type="checkbox" id="likeIt" name="size" value="size" />
          <label for="likeIt">Like it</label>
        </div>
        <div>
          <input type="checkbox" id="loveIt" name="size" value="size" />
          <label for="loveIt">Love it</label>
        </div>
        <div>
          <input type="checkbox" id="haveItAll" name="size" value="size" />
          <label for="haveItAll">Have it all</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Choose Toppings</legend>
        {/* <div>
             <input type="checkbox" id="nuts" name="toppings" value="toppings" />
             <label for="nuts">Nuts</label>
           </div> */}
        <div>
          <input
            type="checkbox"
            id="chocoChips"
            name="toppings"
            value="toppings"
          />
          <label for="chocoChips">Choco chips</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="caramel"
            name="toppings"
            value="toppings"
          />
          <label for="caramel">Caramel</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="heathBar"
            name="toppings"
            value="toppings"
          />
          <label for="heathBar">Heath bar</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Sprinkle"
            name="toppings"
            value="toppings"
          />
          <label for="Sprinkle">Sprinkle</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="peanuts"
            name="toppings"
            value="toppings"
          />
          <label for="peanuts">Peanuts</label>
        </div>
      </fieldset>
    </div>
    //   </div>
    // </div>
  );
}
