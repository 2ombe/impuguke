import React from "react";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import Team from "./Team";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import NewsFeed from "./news/NewsFeeds";

function Home() {
  return (
    <div>
      <Banner />
      <NewsFeed />
      <Skills />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
