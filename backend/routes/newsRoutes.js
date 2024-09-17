const express = require("express");
const { createNews, getAllNews } = require("../controllers/newsController");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

router.post("/upload", protect, createNews);
router.get("/", getAllNews);

module.exports = router;
