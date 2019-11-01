import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
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
    return [{}].concat(products).map((product, i) =>
      i !== 0 ? (
        <LinkContainer key={product._id} to={`/products/${product._id}`}>
          <ListGroupItem header={product.imgName.trim().split(".")[0]}>
            <img src={product.imgUrl} alt="Product View"></img>
          </ListGroupItem>

        </LinkContainer>
      ) : (
        <LinkContainer key="new" to="/products/new">
          <ListGroupItem>
            <h4>
              <b>{"\uFF0B"}</b> Create a new note
            </h4>
          </ListGroupItem>
        </LinkContainer>
      )
    );
  }

  function renderProducts() {
    return (
      <Col id="homeHead" md={6}>
        <ListGroup>
          {!isLoading && renderProductsList(products)}
        </ListGroup>

      </Col>
    );
  }

  return (
    <div className="Home">
      {renderProducts()}
    </div>
  );
}


// {props.isAuthenticated ?  : renderLander()}