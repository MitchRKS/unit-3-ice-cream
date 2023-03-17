//*************************************************************************
// THIS PAGE WILL SHOW THE MENU ITEMS FOR THE USER TO INTIATE THE ORDER.
//*************************************************************************

import React from "react";

export default function ParlorMenu() {
  return (
    <div className="eachItem">
      <div className="menuToOrder">
        <p>Ice cream name goes here</p>
        <p>Ice Cream description goes here</p>
        <p class="priceDisp">$12.75</p>
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
              id="MandMs"
              name="toppings"
              value="toppings"
            />
            <label for="MandMs">M & M</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Sprinkle"
              name="toppings"
              value="toppings"
            />
            <label for="Sprinkle">Sprinkle`</label>
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
    </div>
  );
}
