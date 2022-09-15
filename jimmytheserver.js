import app from './jimmytheapp.js';
import mongoose from 'mongoose';

const url = "mongodb://localhost:27017/jimmy";
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) throw error;
    console.log("mehhhhhhhhhhhhhhhhhhhhhhhhhhh");
  }
);

app.listen(3000, function () {
  console.log("mehhhhhh");
});