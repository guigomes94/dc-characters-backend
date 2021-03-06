require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const cors = require("cors");

const app = express();
const router = express.Router();

// connetion db
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Load Model
const Character = require("./models/character");

//Load Routes
const indexRoutes = require("./routes/index");
const characterRoutes = require("./routes/characters");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cors
app.use(cors());

app.use("/", indexRoutes);
app.use("/characters", characterRoutes);

module.exports = app;
