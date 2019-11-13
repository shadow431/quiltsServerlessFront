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
      console.log("products on load: ", products)

      setProducts(products);

    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    setIsLoading(false);
  }

  function renderProducts() {
    console.log("products at render: ", products)
    return (
      <div>
        <Grid fluid>
          <Row>
            <ProductHome products={products} />
          </Row>
        </Grid>
      </div>
    );
  }

  return (
    <div className="Home">
      {props.isAuthenticated ? <Admin /> : null}
      {!isLoading ? <MainNav /> : null}
      {
        isLoading ?
          (
            <h3>Loading products now, please be patient :)</h3>
          )
        : renderProducts()
      }
    </div>
  );
}