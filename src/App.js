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
                  <LinkContainer to="/admin">
                    <NavItem>Inventory</NavItem>
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
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavItem eventKey={2} href="/schedule">
              Show Schedule
            </NavItem>
            <NavItem eventKey={3} href="/baby">
              Baby Quilts
            </NavItem>
            <NavItem eventKey={4} href="/potato">
              Baked Potato Bag
            </NavItem>
            <NavItem eventKey={5} href="/bowlSmall">
              Bowl Wrap Small
            </NavItem>
            <NavItem eventKey={6} href="/bowlLarge">
              Bowl Wrap Large
            </NavItem>
            <NavItem eventKey={7} href="/caps">
              Caps
            </NavItem>
            <NavItem eventKey={8} href="/dog">
              Dog Quilts
            </NavItem>
            <NavItem eventKey={9} href="/ovenMitt">
              Oven Mitts
            </NavItem>
            <NavItem eventKey={10} href="/sling">
              Sling
            </NavItem>
            <NavItem eventKey={11} href="/tortBag">
              Tortilla Bags
            </NavItem>
            <NavItem eventKey={12} href="/toteBag">
              Tote Bags
            </NavItem>
            <NavItem eventKey={13} href="/toteZip">
              Zipper Totes
            </NavItem>
            <NavItem eventKey={14} href="/contact">
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