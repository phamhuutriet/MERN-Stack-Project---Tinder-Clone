import { TrendingUpOutlined } from "@material-ui/icons";
import express from "express";
import mongoose from "mongoose";
import Cards from "./modules/dbCards.js";
import Cors from "cors";

// App Config
const app = express();
const port = process.env.PORT || 3001;
const connection_url =
  "mongodb+srv://admin:Test123@cluster0.rkecn.mongodb.net/tinderClone?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
});
// API Endpoints
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`listening to local host: ${port}`));
