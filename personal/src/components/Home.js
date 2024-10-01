import React from "react";
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import Team from "./Team";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

function Home() {
  return (
    <div>
      <Banner />
      <Skills />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
