const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  admin_access: { type: Boolean, default: false },
  
});

module.exports = mongoose.model("User", userSchema);
