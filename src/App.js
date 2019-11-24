import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import { API } from "aws-amplify";
import "./App.css";
import MainNav from "./components/MainNav";
import EmbroideryNav from "./components/EmbroideryNav";

function App(props) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { history } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const products = await API.get("quilts", "/products");
      setProducts(products);
      await Auth.currentSession();
      userHasAuthenticated(true);
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
              <Link to="/"><img className="NavHeaderBarLogo" src="https://wandaquilts.s3.us-east-2.amazonaws.com/private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4/top.ht2-trans.gif" alt="Embroidery by Wanda" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {isAuthenticated ? (
                <>
                  <LinkContainer to="/admin">
                    <NavItem><span className="NavHeaderBarSecondary">Admin</span></NavItem>
                  </LinkContainer>
                  <NavItem onClick={handleLogout}><span style={{color: '#00cc44'}}>Logout</span></NavItem>
                </>
                ) : (
                <>

                  <LinkContainer to="/login">
                    <NavItem><span style={{color: "#00cc44", fontSize: "16pt"}}>Admin</span></NavItem>
                  </LinkContainer>
                </>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <MainNav history={history} auth={isAuthenticated} />
        {window.location.pathname.includes("/embroidery") ? <EmbroideryNav history={history} auth={isAuthenticated} />:null}
        <div style={{display: 'flex'}}>
          <Routes appProps={{ isAuthenticated, userHasAuthenticated, products, isLoading }} />
        </div>
      </div>
    )
  );
}
export default withRouter(App);