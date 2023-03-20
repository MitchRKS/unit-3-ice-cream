import styles from "./LineItem.module.scss";

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div className={styles.LineItem}>
      <div className="flex-ctr-ctr">{lineItem.item.emoji}</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineItem.item.name}</span>
        <span>{lineItem.item.price.toFixed(2)}</span>
      </div>
      <div>
        <fieldset>
          <legend>Choose a Size</legend>
          <div>
            <input type="checkbox" id="likeIt" name="size" value="likeit" />
            <label for="likeIt">Like It</label>
          </div>
          <div>
            <input type="checkbox" id="loveIt" name="size" value="loveit" />
            <label for="loveIt">Love It</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="haveItAll"
              name="size"
              value="haveItAll"
            />
            <label for="haveItAll">Have it all</label>
          </div>
        </fieldset>
      </div>
      <div>
        <fieldset>
          <legend>Choose Toppings</legend>
          <div>
            <input
              type="checkbox"
              id="heathBar"
              name="toppings"
              value="heathBar"
            />
            <label for="heathbar">Heath Bar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="caramel"
              name="toppings"
              value="caramel"
            />
            <label for="caramel">Caramel</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="almonds"
              name="toppings"
              value="almonds"
            />
            <label for="almonds">Almonds</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="sprinkle"
              name="toppings"
              value="sprinkle"
            />
            <label for="sprinkle">Sprinkle</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="chocoChips"
              name="toppings"
              value="chocoChips"
            />
            <label for="chocoChips">Choco Chips</label>
          </div>
        </fieldset>
      </div>
      <div
        className={styles.qty}
        style={{ justifyContent: isPaid && "center" }}
      >
        {!isPaid && (
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
          >
            −
          </button>
        )}
        <span>{lineItem.qty}</span>
        {!isPaid && (
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
          >
            +
          </button>
        )}
      </div>
      <div className={styles.extPrice}>${lineItem.extPrice.toFixed(2)}</div>
    </div>
  );
}
