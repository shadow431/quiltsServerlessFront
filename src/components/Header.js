import React from 'react';
import MainNav from './MainNav';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalStyles } from '../containers/globalCSS';


export default function Header(props) {
  const {
    isAuthenticated,
    toggleTheme,
    handleLogout,
    history,
    startOver,
    setLetterView,
    setShowLetterNav,
    LetterNav,
    setGraphicView,
    setShowByLetter,
    showLetterNav,
    setLetterNavKey,
    letterNavKey
  } = props.headerProps;

  return (
    <React.Fragment>
      <Navbar className="headerLogoNav" fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><img className="NavHeaderBarLogo" src="https://wandaquilts-terraformtest.s3.us-east-2.amazonaws.com/top.ht2-trans.gif" alt="Embroidery by Wanda" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
      <Navbar className="headerNav" fluid>
        <Navbar.Collapse>
          <Nav pullRight>
            <GlobalStyles />
            <NavItem>Wanda 360-599-1816 wgunter90@gmail.com</NavItem>
            <NavItem className="contactLink" onClick={() => props.history.push("/contact")}>Contact Us</NavItem>
            <NavItem className="contactLink" onClick={() => props.history.push("/about")}>About Us</NavItem>
            <NavItem className="adminLink" onClick={toggleTheme}>Color Scheme</NavItem>
            {isAuthenticated ? <NavItem onClick={handleLogout}><span className="logoutLink">Logout</span></NavItem> : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <MainNav navProps={{ history, isAuthenticated, startOver, setShowLetterNav, setLetterView, setShowByLetter }} />
    </React.Fragment>
  )
}
