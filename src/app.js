import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

mongoose.set("useCreateIndex", true);

const app = express();

// Connecting DB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Load Model
import Character from "./models/character";

//Load Routes

import indexRoutes from "./routes/index";
import characterRoutes from "./routes/characters";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cors
const cors = require("cors");
app.use(cors());

app.use("/", indexRoutes);
app.use("/characters", characterRoutes);

module.exports = app;
