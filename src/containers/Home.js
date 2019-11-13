import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Grid, Row } from "react-bootstrap";
import "./Home.css";
import MainNav from "../components/MainNav";
import Admin from "./Admin";
import ProductHome from "../products/ProductHome";

export default function Home(props) {
  const [ products, setProducts] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const products = await API.get("quilts", "/products");
      setProducts(products);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    setIsLoading(false);
  }

  return (
    <div className="Home">
      {props.isAuthenticated ? <Admin /> : null}
      {!isLoading ? <MainNav props={products}/> :  <h3>Loading products now, please be patient :)</h3>}
    </div>
  );
}