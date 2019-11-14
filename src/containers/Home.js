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
import MainNav from "../components/MainNav";
import Admin from "./Admin";

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

  function renderProductsList(products) {
    return [{}].concat(products).map((product, i) => {
      if(i !== 0) {
        return (
          <Col key={i} xs={12} sm={4} md={3}>
            <Thumbnail key={product._id} src={product.imgUrl} alt="Well, something didn't work..." style={{"width":product.width}}>
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
      <div>
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
      </div>
    );
  }

  return (
    <div className="Home">
      <MainNav />
      {props.isAuthenticated ? <Admin /> : null}
      {renderProducts()}
    </div>
  );
}