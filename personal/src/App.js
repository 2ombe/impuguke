import "./App.css";
import { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import navIcon1 from "./assets/img/nav-icon1.svg";
import navIcon2 from "./assets/img/nav-icon2.svg";
import navIcon3 from "./assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignupScreen from "./components/SignupScreen";
import Welcome from "./components/welcome";
import OfferTrainingProgramForm from "./components/OfferTrainingProgramForm";
import SingleTrainingProgram from "./components/training/SingleTrainingProgram";
import TraineeManagement from "./components/TraineeManagement/TraineeManagement";
import { Store } from "./assets/context/AuthContext";

function App() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "LOGOUT" });
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };

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
          {!userInfo || userInfo === null ? (
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
          ) : (
            <Navbar
              style={{
                backgroundColor: " rgb(2, 24, 2)",
              }}
              variant="dark"
              expand="lg"
            >
              <Container>
                <LinkContainer to="/">
                  <Navbar.Brand>
                    <img
                      src="/logo.png"
                      width={40}
                      height={40}
                      style={{ borderRadius: "50%" }}
                      alt="logo"
                    />
                  </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto w-100 justify-content-end ">
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignupScreen />} />
            <Route exact path="/welcome" element={<Welcome />} />
            <Route exact path="/trainees" element={<TraineeManagement />} />
            <Route
              exact
              path="/training"
              element={<OfferTrainingProgramForm />}
            />
            <Route
              exact
              path="/training/:id"
              element={<SingleTrainingProgram />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
