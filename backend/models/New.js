const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String, // Optional field for storing image URLs
  createdAt: { type: Date, default: Date.now },
});

const News = mongoose.model("News", newsSchema);
