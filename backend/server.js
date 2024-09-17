const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/authRoutes");
const newsRoutes = require("./routes/newsRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);

app.use(express.static(path.join(path.resolve(), "/personal/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(path.resolve(), "/personal/build/index.html"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
});
