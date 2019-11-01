import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import "./App.css";
import { register } from "./serviceWorker";

function App(props) {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    props.history.push("/login");
  }

  return (
    !isAuthenticating && (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Wanda's Quilts and Embroidery</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {isAuthenticated ? (
                <>
                  <LinkContainer to="/settings">
                    <NavItem>Settings</NavItem>
                  </LinkContainer>
                  <NavItem onClick={handleLogout}>Logout</NavItem>
                </>
              ) : (
                <>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <NavDropdown> */}
          <Nav bsStyle="pills" fixed stacked pullLeft activeKey={1}>
            <NavItem eventKey={1} to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} to="/schedule">
              Show Schedule
            </NavItem>
            <NavItem eventKey={3} to="/baby">
              Baby Quilts
            </NavItem>
            <NavItem eventKey={4} to="/potato">
              Baked Potato Bag
            </NavItem>
            <NavItem eventKey={5} to="/bowlSmall">
              Bowl Wrap Small
            </NavItem>
            <NavItem eventKey={6} to="/bowlLarge">
              Bowl Wrap Large
            </NavItem>
            <NavItem eventKey={7} to="/caps">
              Caps
            </NavItem>
            <NavItem eventKey={8} to="/dog">
              Dog Quilts
            </NavItem>
            <NavItem eventKey={9} to="/ovenMitt">
              Oven Mitts
            </NavItem>
            <NavItem eventKey={10} to="/sling">
              Sling
            </NavItem>
            <NavItem eventKey={11} to="/tortBag">
              Tortilla Bags
            </NavItem>
            <NavItem eventKey={12} to="/toteBag">
              Tote Bags
            </NavItem>
            <NavItem eventKey={13} to="/toteZip">
              Zipper Totes
            </NavItem>
            <NavItem eventKey={14} to="/contact">
              Contact Us
            </NavItem>
          </Nav>
        {/* </NavDropdown> */}
        <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
      </div>
    )
  );
}
register();
export default withRouter(App);


{/* <LinkContainer to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/schedule">
              <NavItem>Show Schedule</NavItem>
            </LinkContainer>
            <LinkContainer to="/baby">
              <NavItem>Baby Quilts</NavItem>
            </LinkContainer>
            <LinkContainer to="/potato">
              <NavItem>Baked Potato Bag</NavItem>
            </LinkContainer>
            <LinkContainer to="bowlSmall">
              <NavItem>Bowl Wrap Small</NavItem>
            </LinkContainer>
            <LinkContainer to="bowlLarge">
              <NavItem>Bowl Wrap Large</NavItem>
            </LinkContainer>
            <LinkContainer to="/caps">
              <NavItem>Caps</NavItem>
            </LinkContainer>
            <LinkContainer to="dog">
              <NavItem>Dog Quilts</NavItem>
            </LinkContainer>
            <LinkContainer to="ovenMitt">
              <NavItem>Oven Mitts</NavItem>
            </LinkContainer>
            <LinkContainer to="sling">
              <NavItem>Sling</NavItem>
            </LinkContainer>
            <LinkContainer to="tortBag">
              <NavItem>Tortilla Bags</NavItem>
            </LinkContainer>
            <LinkContainer to="toteBag">
              <NavItem>Tote Bags</NavItem>
            </LinkContainer>
            <LinkContainer to="toteZip">
              <NavItem>Zipper Totes</NavItem>
            </LinkContainer>
            <LinkContainer to="contact">
              <NavItem>Contact Us</NavItem>
            </LinkContainer> */}