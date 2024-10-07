import React, { useState, useContext } from "react";
import axios from "axios";
import { Store } from "../assets/context/AuthContext";

const UploadNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useContext(Store);

  const uploadNews = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    };
    await axios.post("/api/news/upload", { title, content }, config);
    alert("News uploaded successfully");
  };

  return (
    <form onSubmit={uploadNews}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <button type="submit">Upload News</button>
    </form>
  );
};

export default UploadNews;
