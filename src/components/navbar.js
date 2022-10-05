import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import navIcon1 from "../images/nav-icon1.svg";
import navIcon2 from "../images/nav-icon4.svg";
import navIcon3 from "../images/nav-icon3.svg";
import logo from "../images/Z (4).png"
import pdf from "../images/resumecopy.pdf";




function NavBar() {

    const { activeLink, setActiveLink } = useState('home');

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
         </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick= {()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick= {()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick= {()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/nashzangio/"><img src={navIcon1} alt="linkedinicon"/></a>
                <a href="https://github.com/nzang5"><img src={navIcon2} alt="githubicon"/></a>
                <a href="https://www.instagram.com/imsonashty5/"><img src={navIcon3} alt="instagramicon"/></a>

            </div>
            <button className="vvd">
            <span><a href={pdf} className="resumelink">My Resume</a></span>
            </button>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;