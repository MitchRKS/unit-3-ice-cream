//*************************************************************************
// THIS PAGE WILL SHOW THE MENU ITEMS FOR THE USER TO INTIATE THE ORDER.
//*************************************************************************

import React from "react";

export default function ParlorMenu() {
  return (
    <div className="eachItem">
      <h2>Signature Ice Creams</h2>
      <div className="menuToOrder">
        <p>Coffee Lovers Only</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          harum fiure.
        </p>
        <div class="btnAndPrice">
          <button className="addToOrder">ADD TO ORDER</button>
          <button className="editItem">EDIT</button>
          <button className="delItem">DELETE</button>
          <p className="priceDisp">$12.75</p>
        </div>
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
            <input
              type="checkbox"
              id="haveItAll"
              name="size"
              value="size"
              checked
            />
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
              checked
            />
            <label for="chocoChips">Choco chips</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="caramel"
              name="toppings"
              value="toppings"
              checked
            />
            <label for="caramel">Caramel</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="heathBar"
              name="toppings"
              value="toppings"
              checked
            />
            <label for="heathBar">Heath bar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Sprinkle"
              name="toppings"
              value="toppings"
              checked
            />
            <label for="Sprinkle">Sprinkle`</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="peanuts"
              name="toppings"
              value="toppings"
              checked
            />
            <label for="peanuts">Peanuts</label>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
