app.post("/upload-news", async (req, res) => {
  try {
    const { title, content, image } = req.body;

    // Validate input data here (optional)

    const newNews = new News({
      title,
      content,
      image,
    });

    await newNews.save();

    res.status(201).json({ message: "News uploaded successfully" });
  } catch (error) {
    console.error("Error uploading news:", error);
    res.status(500).json({ message: "Error uploading news" });
  }
});
