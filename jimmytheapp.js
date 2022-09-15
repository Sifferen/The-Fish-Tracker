import Express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import router from './jimmytheroutes.js'

const app = new Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Express.static("./public"))
app.use(cookieParser())
app.use('/', router);

const url = "mongodb://localhost:27017/jimmy";
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) throw error;
    console.log("mehhhhhhhhhhhhhhhhhhhhhhhhhhh");
  }
);

export default app;