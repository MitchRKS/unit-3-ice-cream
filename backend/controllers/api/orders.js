const Order = require("../../models/order");

// Cart = unpaid order of a user
async function cart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

async function addToCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

async function setItemQtyInCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

async function checkout(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

async function history(req, res) {
  try {
    const orders = await Order.find({ user: req.user._id, isPaid: true })
      .sort("-updatedAt")
      .exec();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ msg: error.msg });
  }
}

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  history,
};
