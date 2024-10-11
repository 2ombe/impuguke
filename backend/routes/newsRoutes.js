const express = require("express");
const { createNews, getAllNews } = require("../controllers/newsController");
const { isAuth } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/upload", isAuth, createNews);
router.get("/", getAllNews);

module.exports = router;
