const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://your_mongodb_url", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.static(path.join(path.resolve(), "/personal/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(path.resolve(), "/personal/build/index.html"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
});
