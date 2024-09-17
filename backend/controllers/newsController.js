const News = require("../models/New");

const createNews = async (req, res) => {
  const { title, content } = req.body;
  const news = new News({ title, content, author: req.user._id });
  await news.save();
  res.status(201).json(news);
};

const getAllNews = async (req, res) => {
  const news = await News.find().populate("author", "username");
  res.json(news);
};

module.exports = { createNews, getAllNews };
