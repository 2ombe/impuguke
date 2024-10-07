const express = require("express");
const { createNews, getAllNews } = require("../controllers/newsController");
const router = express.Router();

router.post("/upload", createNews);
router.get("/", getAllNews);

module.exports = router;
