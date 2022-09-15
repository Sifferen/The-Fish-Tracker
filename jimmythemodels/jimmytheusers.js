const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true, dropDups: true },
    email: { type: String, unique: true, required: true, dropDups: true },
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
