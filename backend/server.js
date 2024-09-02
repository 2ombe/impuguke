const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
app.use(express.json());

app.use(express.static(path.join(path.resolve(), "/personal/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(path.resolve(), "/personal/build/index.html"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
});
