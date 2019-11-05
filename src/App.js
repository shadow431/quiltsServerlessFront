import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import { API } from "aws-amplify";
import "./App.css";
import { register } from "./serviceWorker";

function App(props) {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [navKey, setNavKey] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
      const products = await API.get("products", "/products");
      setProducts(products);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    setIsLoading(false);
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
          <Nav bsStyle="pills" fixed="true" stacked pullLeft activeKey={navKey}>
            <NavItem eventKey={1} onClick={() => {props.history.push('/'); setNavKey(1);}}>
              Home
            </NavItem>
            <NavItem eventKey={2} onClick={() => {props.history.push('/schedule'); setNavKey(2);}}>
              Show Schedule
            </NavItem>
            <NavItem eventKey={3} onClick={() => {props.history.push('/baby'); setNavKey(3);}}>
              Baby Quilts
            </NavItem>
            <NavItem eventKey={4} onClick={() => {props.history.push('/potato'); setNavKey(4);}}>
              Baked Potato Bag
            </NavItem>
            <NavItem eventKey={5} onClick={() => {props.history.push('/bowlSmall'); setNavKey(5);}}>
              Bowl Wrap Small
            </NavItem>
            <NavItem eventKey={6} onClick={() => {props.history.push('/bowlLarge'); setNavKey(6);}}>
              Bowl Wrap Large
            </NavItem>
            <NavItem eventKey={7} onClick={() => {props.history.push('/caps'); setNavKey(7);}}>
              Caps
            </NavItem>
            <NavItem eventKey={8} onClick={() => {props.history.push('/dog'); setNavKey(8);}}>
              Dog Quilts
            </NavItem>
            <NavItem eventKey={9} onClick={() => {props.history.push('/ovenMitt'); setNavKey(9);}}>
              Oven Mitts
            </NavItem>
            <NavItem eventKey={10} onClick={() => {props.history.push('/sling'); setNavKey(10);}}>
              Sling
            </NavItem>
            <NavItem eventKey={11} onClick={() => {props.history.push('/tortBag'); setNavKey(11);}}>
              Tortilla Bags
            </NavItem>
            <NavItem eventKey={12} onClick={() => {props.history.push('/toteBag'); setNavKey(12);}}>
              Tote Bags
            </NavItem>
            <NavItem eventKey={13} onClick={() => {props.history.push('/toteZip'); setNavKey(13);}}>
              Zipper Totes
            </NavItem>
            <NavItem eventKey={14} onClick={() => {props.history.push('/contact'); setNavKey(14);}}>
              Contact Us
            </NavItem>
          </Nav>
        {/* </NavDropdown> */}
        <Routes appProps={{ isAuthenticated, userHasAuthenticated, products, isLoading }} />
      </div>
    )
  );
}
register();
export default withRouter(App);