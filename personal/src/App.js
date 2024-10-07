import "./App.css";
import { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "./assets/img/nav-icon1.svg";
import navIcon2 from "./assets/img/nav-icon2.svg";
import navIcon3 from "./assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignupScreen from "./components/SignupScreen";
import Welcome from "./components/welcome";
import OfferTrainingProgramForm from "./components/OfferTrainingProgramForm";
import { Store } from "./assets/context/AuthContext";

function App() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      <div className="App">
        <Router>
          {!userInfo && (
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link
                      href="#home"
                      className={
                        activeLink === "home"
                          ? "active navbar-link"
                          : "navbar-link"
                      }
                      onClick={() => onUpdateActiveLink("home")}
                    >
                      Welcome
                    </Nav.Link>
                    <Nav.Link
                      href="#skills"
                      className={
                        activeLink === "skills"
                          ? "active navbar-link"
                          : "navbar-link"
                      }
                      onClick={() => onUpdateActiveLink("skills")}
                    >
                      Mission
                    </Nav.Link>
                    <Nav.Link
                      href="#projects"
                      className={
                        activeLink === "projects"
                          ? "active navbar-link"
                          : "navbar-link"
                      }
                      onClick={() => onUpdateActiveLink("projects")}
                    >
                      Projects
                    </Nav.Link>
                  </Nav>
                  <span className="navbar-text">
                    <div className="social-icon">
                      <a href="#">
                        <img src={navIcon1} alt="" />
                      </a>
                      <a href="#">
                        <img src={navIcon2} alt="" />
                      </a>
                      <a href="#">
                        <img src={navIcon3} alt="" />
                      </a>
                    </div>
                    <HashLink to="#connect">
                      <button className="vvd">
                        <span>Let’s Connect</span>
                      </button>
                    </HashLink>
                  </span>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )}
          <Routes>
            {!userInfo ? (
              <>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Home />} />
              </>
            ) : (
              <>
                <Route exact path="/signup" element={<SignupScreen />} />
                <Route exact path="/welcome" element={<Welcome />} />
              </>
            )}

            <Route
              exact
              path="/training"
              element={<OfferTrainingProgramForm />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
