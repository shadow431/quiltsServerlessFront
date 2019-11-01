import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";
import {
  Button,
  Col,
  Grid,
  Thumbnail
} from "react-bootstrap";
import "./Home.css";

export default function Home(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!props.isAuthenticated) {
        return;
      }

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
          <Thumbnail key={product._id} src={product.imgUrl} alt="Well, something didn't work...">
            <h3>{product.imgName}</h3>
            <Button bsStyle="primary">
              Add to Cart!
            </Button>
          </Thumbnail>
        )
      }
    })
}

  function renderProducts() {
    return (
      <Grid fluid>
        <Col md={4} mdOffset={2} xs={6} xsOffset={3}>
            {
              isLoading ?
                (
                  <h3>Loading products now, please be patient :)</h3>
                )
              : renderProductsList(products)
            }
        </Col>
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
{/* <LinkContainer key="new" to="/products/new">
          <ListGroupItem>
            <h4>
              <b>{"\uFF0B"}</b> Create a new note
            </h4>
          </ListGroupItem>
        </LinkContainer> */}