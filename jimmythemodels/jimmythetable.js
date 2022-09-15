import { Schema, model } from "mongoose";

const tableObj = {}
const keys = {
  fish: { type: String, required: false },
  date: { type: Date, required: false }, 
  amount: { type: Number, required: false },
  flows: { type: String, required: false },
  location: { type: String, required: false },
  fly: { type: String, required: false },
  other: { type: String, required: false },
  tagged: { type: String, required: false }
}
for (let i = 1; i < 32; i++) {
  for (const [key, value] of Object.entries(keys)) {
    tableObj[key + i] = value
  }
}

const tableSchema = new Schema(
  {
    userId: { type: String, unique: true, required: true, dropDups: true },
    ...tableObj
  },
  { collection: "tables" }
);

const Table = model("Table", tableSchema);

export default Table;
