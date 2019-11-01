import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
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
            {/* {"Created: " + new Date(product.createdAt).toLocaleString()} */}
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

  function renderLander() {
    return (
      <div className="lander">
        <h1>Quilting and Embroidery</h1>
        <p>A Quilts and Embroidery Provider</p>

      </div>
    );
  }

  function renderProducts() {
    return (
      <div className="products" className="row">
        <PageHeader>Products Available!!</PageHeader>
        <ListGroup className="col-md-6">
          {!isLoading && renderProductsList(products)}
        </ListGroup>

      </div>
    );
  }

  return (
    <div className="Home">
      {renderProducts()}

    </div>
  );
}


// {props.isAuthenticated ?  : renderLander()}