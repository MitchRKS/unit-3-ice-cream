require("dotenv").config();
require("./backend/config/database");
const User = require("./backend/models/user");
(async function () {
  await User.collection.drop();
  process.exit();
})();
