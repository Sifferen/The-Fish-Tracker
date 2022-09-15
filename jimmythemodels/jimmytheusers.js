import { Schema, model } from "mongoose";
const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true, dropDups: true },
    email: { type: String, unique: true, required: true, dropDups: true },
    password: { type: String, required: true },
  },
  { collection: "users" }
);

const User = model("Users", userSchema);

export default User;
