import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import {
  Button,
  Col,
  Grid,
  Row,
  Thumbnail
} from "react-bootstrap";
import "./Home.css";

export default function Home(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      // if (!props.isAuthenticated) {
      //   return;
      // }

      try {
        const products = await loadProducts();
        setProducts(products);
      } catch (e) {
        alert(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [props.isAuthenticated]);

  function loadProducts() {
    return API.get("products", "/products");
  }

  function renderProductsList(products) {
    return [{}].concat(products).map((product, i) => {
      if(i !== 0) {
        return (
          <Col md={3} align-self-start>
            <Thumbnail key={product._id} src={product.imgUrl} alt="Well, something didn't work...">
              <h3>{product.imgName}</h3>
              <Button bsStyle="primary">
                Add to Cart!
              </Button>
            </Thumbnail>
          </Col>
        )
      }
    })
}

  function renderProducts() {
    return (
      <Grid fluid>
        <Row>
          {
            isLoading ?
              (
                <h3>Loading products now, please be patient :)</h3>
              )
            : renderProductsList(products)
          }
        </Row>
      </Grid>
    );
  }

  return (
    <div className="Home">
      {renderProducts()}
    </div>
  );
}


// {props.isAuthenticated ?  : renderLander()}
// to={`/products/${product._id}`}
{/*  */}