const Item = require("../../models/item");

async function index(req, res) {
  try {
    const items = await Item.find({}).sort("name").populate("category").exec();
    items.sort((a, b) => (a.category.sortOrder = b.category.sortOrder));
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

async function show(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

module.exports = {
  index,
  show,
};
