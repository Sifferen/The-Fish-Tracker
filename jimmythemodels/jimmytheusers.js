const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "users" }
);

const User = mongoose.model("Users", userSchema);

module.exports = {
  User,
  fetchData: (callback) => {
    User.find({}).exec((err, data) => {
      if (err) throw err;
      return callback(data);
    });
  },
};
