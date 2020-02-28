import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";
import { API } from "aws-amplify";
import MainNav from "./components/MainNav";
import LetterNav from "./components/LetterNav";
import Modal from "react-modal";
import { greenTheme, greyTheme } from "./containers/theme";
import { GlobalStyles } from "./containers/globalCSS";

function App(props) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);
  const [fabrics, setFabrics] = useState([]);
  const [designs, setDesigns] = useState([]);
  const [theme, setTheme] = useState('greyTheme');
  const [isLoading, setIsLoading] = useState(true);
  const [price, setPrice] = useState("");
  const { history } = props;
  const [schedule, setSchedule] = useState([]);
  const [graphicChoice, setGraphicChoice] = useState([]);
  const [graphicChosen, setGraphicChosen] = useState(false);
  const [productChoice, setProductChoice] = useState([]);
  const [productChosen, setProductChosen] = useState(false);
  const [productTypeChosen, setProductTypeChosen] = useState("");
  const [graphicView, setGraphicView] = useState("all");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [isLargeImage, setIsLargeImage] = useState(false);
  const [currentLargeImg, setCurrentLargeImg] = useState([]);
  const [colorChoice, setColorChoice] = useState("");
  const [colorChosen, setColorChosen] = useState(false);
  const [sizeChoice, setSizeChoice] = useState("");
  const [priceSizes, setPriceSizes] = useState([]);
  const [showByLetter, setShowByLetter] = useState(false);
  const [letterView, setLetterView] = useState("");
  const [letterNavKey, setLetterNavKey] = useState("");
  const [showLetterNav, setShowLetterNav] = useState(false);

  const kitchenGraphicCategories = ["bir", "bug", "cat", "dog", "fdk", "flr", "frm", "hol", "mil", "mis", "nat", "wdl"];
  const embroideryGraphicCategories = ["all", "afg", "air", "aki", "abd", "esk", "asc", "aus", "atr", "baj", "bas", "bea", "brd", "bed", "blm", "bls", "bel", "ber", "bic", "btc", "bch", "bld", "brc", "bod", "bor", "bos", "bou", "box", "brr", "brt", "bru", "blt", "car", "can", "cah", "cat", "kcs", "che", "chi", "chc", "cho", "clb", "cos", "col", "cor", "cot", "dox", "dal", "ddt", "dob", "bul", "eng", "spr", "flt", "fox", "fbl", "she", "grs", "gon", "gol", "gor", "grd", "grp", "gsm", "gry", "hav", "pul", "hus", "ice", "irh", "irw", "iwh", "itg", "jrt", "jpc", "kes", "ker", "lad", "lab", "lag", "lak", "leo", "lhp", "mal", "man", "mas", "min", "mor", "lgm", "new", "nor", "now", "nov", "egs", "pap", "pek", "pic", "pit", "plh", "pom", "pod", "por", "pug", "rat", "rod", "rot", "sal", "sam", "sci", "sch", "sco", "sha", "shl", "shb", "shi", "sil", "smc", "stb", "stf", "tib", "tre", "vis", "wei", "wss", "whi", "wht", "wip", "wfx", "yor"];
  const sizesToChoose = ["sm", "md", "lg", "x1", "x2", "x3", "x4", "x5"];
  const sizesToDisplay = ["Sm", "Md", "Lg", "1X", "2X", "3X", "4X", "5X"];

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const schedule = await API.get("quilts", "/schedule");
      setSchedule(schedule);
      const products = await API.get("quilts", "/products");
      setProducts(products);
      const designs = await API.get("quilts", "/design");
      setDesigns(designs);
      const fabrics = await API.get("quilts", "/fabric");
      setFabrics(fabrics);
      setGraphicView("all");
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        onLoad();
      }
    }
    setIsLoading(false);
    setIsAuthenticating(false);
    if(!isAuthenticating && isAuthenticated) {
      props.history.push("/adminLoggedIn");
    };
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    props.history.push("/");
  }

  function toggleTheme () {
    if(theme === 'greenTheme') {
      setTheme('greyTheme');
    } else {
      setTheme("greenTheme");
    }
  }

  function startOver() {
    setProductChosen(false);
    setProductChoice([]);
    setGraphicChosen(false);
    setGraphicChoice([]);
    setGraphicView("all");
    setColorChoice("");
    setColorChosen(false);
    setShowByLetter(false);
    setShowLetterNav(false);
    setLetterNavKey("");
  }

  function LargerImage () {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        maxHeight             : "90%"
      }
    };
    return (
      <Modal
        isOpen={isLargeImage}
        // onRequestClose={handleLargeImage}
        style={customStyles}
        contentLabel={currentLargeImg.name}
      >
        <img alt="Large showing" src={currentLargeImg.imgUrl} />
        <br />
        <h3>{currentLargeImg.name}</h3>
        <h5>{currentLargeImg.desc}</h5>
        <h5>{currentLargeImg.price}</h5>
        <Button onClick={() => {setCurrentLargeImg([]); setIsLargeImage(false);}}>Close</Button>
      </Modal>
    )
  }

  function handleProductChoice(product) {
    setProductChoice(product);
    setProductTypeChosen(product.subCat.toUpperCase());
    setProductChosen(true);
    setPrice(product.price);
    setPurchasePrice(Number(product.price));
    setIsLargeImage(false);
    setShowByLetter(false);
    if(graphicChoice.type === "FAB" && product.type === "EMB") {
      setGraphicChoice([]);
      setGraphicChosen(false);
    } else if(graphicChoice.type === "EMB" && product.type === "KIT") {
      setGraphicChoice([]);
      setGraphicChosen(false);
    }
    // setQuantity(1);
  }

  function handleLargeImage(product) {
    setCurrentLargeImg(product);
    setIsLargeImage(true);
  }

  function handleColorChoice(e) {
    setColorChoice(e.target.value);
    setColorChosen(true);
  }

  function handleGraphicChoice(graphic) {
    setGraphicChoice(graphic);
    setGraphicChosen(true);
    setIsLargeImage(false);
    setShowByLetter(false);
    if(graphic.type === "FAB" && productChoice.type === "EMB") {
      setProductChoice([]);
      setProductChosen(false);
      history.push("/kitchen");
    } else if(graphic.type === "EMB" && productChoice.type === "KIT") {
      setProductChoice([]);
      setProductChosen(false);
      history.push("/embroidery");
    } else if(graphic.type === "FAB") {
      history.push("/kitchen");
    } else if(graphic.type === "EMB") {
      history.push("/embroidery");
    }
  }

  function handleGraphicView(e) {
    if(e.target.value === "select" || "all") {
      setLetterView("all");
      setLetterNavKey("");
    }
    setGraphicView(e.target.value);
    setIsLargeImage(false);
    setShowByLetter(false);
  }

  return (
    !isAuthenticating && (
      <ThemeProvider theme={theme === 'greenTheme' ? greyTheme : greenTheme}>
        <div className="App container">
          <Navbar className="appNav" fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/"><img className="NavHeaderBarLogo" src="https://wandaquilts.s3.us-east-2.amazonaws.com/private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4/top.ht2-trans.gif" alt="Embroidery by Wanda" /></Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <GlobalStyles />
                <NavItem className="adminLink" onClick={toggleTheme}>Color Scheme</NavItem>
                {isAuthenticated ? <NavItem onClick={handleLogout}><span className="logoutLink">Logout</span></NavItem> : null }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <MainNav navProps={{history, isAuthenticated, startOver, setShowLetterNav}}/>
          {showLetterNav ?
            <LetterNav letterNavProps={{setLetterView, setLetterNavKey, letterNavKey, setGraphicView, setShowByLetter}}/> : null
          }
          <div className="MainSection" style={{display: 'flex'}}>
            {!isLoading ?
              <Routes appProps={
                {
                  kitchenGraphicCategories,
                  embroideryGraphicCategories,
                  isAuthenticated,
                  userHasAuthenticated,
                  schedule,
                  isLoading,
                  products,
                  designs,
                  fabrics,
                  handleProductChoice,
                  handleLargeImage,
                  handleGraphicView,
                  handleGraphicChoice,
                  isLargeImage,
                  graphicChoice,
                  graphicChosen,
                  productChoice,
                  productChosen,
                  colorChoice,
                  colorChosen,
                  setColorChoice,
                  setColorChosen,
                  handleColorChoice,
                  productTypeChosen,
                  setGraphicView,
                  graphicView,
                  setGraphicChosen,
                  setGraphicChoice,
                  purchasePrice,
                  setProductChosen,
                  setProductChoice,
                  currentLargeImg,
                  setCurrentLargeImg,
                  LargerImage,
                  priceSizes,
                  setPriceSizes,
                  letterView,
                  setLetterView,
                  letterNavKey,
                  setLetterNavKey,
                  showByLetter,
                  sizesToChoose,
                  sizesToDisplay
                }
              } />
              :
              <h3>Loading, please be patient... Still working on speeding up load times!!</h3>
            }
          </div>
        </div>
      </ThemeProvider>
    )
  );
}
export default withRouter(App);