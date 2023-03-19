require("dotenv").config();
require("./backend/config/database");

const Category = require("./backend/models/category");
const Item = require("./backend/models/item");

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: "Cones", sortOrder: 10 },
    { name: "Cups", sortOrder: 20 },
    { name: "Shakes", sortOrder: 30 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: "Vanilla Cone",
      category: categories[0],
      size: "Love It",
      toppings: 0,
      price: 2.0,
    },
    {
      name: "Chocolate Cone",
      category: categories[0],
      size: "Love It",
      toppings: 0,
      price: 2.0,
    },
    {
      name: "Strawberry Cone",
      category: categories[0],
      size: "Love It",
      toppings: 0,
      price: 2.0,
    },
    {
      name: "Vanilla Cup",
      category: categories[0],
      size: "Like It",
      toppings: 0,
      price: 1.0,
    },
    {
      name: "Chocolate Cup",
      category: categories[0],
      size: "Like It",
      toppings: 1,
      price: 2.0,
    },
    {
      name: "Strawberry Cup",
      category: categories[0],
      size: "Like It",
      toppings: 2,
      price: 3.0,
    },
    {
      name: "Vanilla Shake",
      category: categories[0],
      size: "Love It",
      toppings: 0,
      price: 5.0,
    },
    {
      name: "Chocolate Shake",
      category: categories[0],
      size: "Love It",
      toppings: 1,
      price: 7.0,
    },
    {
      name: "Strawberry Shake",
      category: categories[0],
      size: "Love It",
      toppings: 2,
      price: 9.0,
    },
  ]);

  console.log(items);

  process.exit();
})();

// {
//     name: { type: String, required: true },
//     category: { type: Schema.Types.ObjectId, ref: "Category" },
//     size: { type: String, required: true },
//     toppings: { type: Number, required: false, default: 0 },
//     price: { type: Number, required: true, default: 0 },
//   },
