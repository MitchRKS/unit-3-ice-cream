const item = require("./item");

const Schema = require("mongoose").Schema;

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    size: { type: String, required: true },
    flavor: { type: String, required: true },
    toppings: { type: Number, required: false, default: 0 },
    price: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;
