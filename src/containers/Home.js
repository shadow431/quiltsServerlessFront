import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import {
  Button,
  Col,
  Grid,
  Row,
  Thumbnail,
  Glyphicon
} from "react-bootstrap";
import "./Home.css";
import "../components/LoaderButton.css";

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
          <Col key={i} xs={12} sm={5} md={3}>
            <Thumbnail style={{overflow:"auto"}} key={product._id} src={product.imgUrl} alt="Well, something didn't work...">
              {/* <h3>{product.imgName}</h3> */}
              <h3>${product.price}</h3>
              <Button style={{backgroundColor:"#5b5f97", color:"white"}}>
                Add to Cart!
              </Button>
              {props.isAuthenticated ?
                (
                  <React.Fragment>
                    <Button onClick={() => {props.history.push("/admin/product/edit", { props: product })}}>Edit</Button>
                    <Button onClick={
                      async () => {
                        await API.del("quilts", `/admin/products/${product._id}`);
                        setProducts(products.slice(products.indexOf(product._id, 1)));
                        onLoad();
                      }
                      }
                    >
                      Delete
                    </Button>
                  </React.Fragment>
                )
                :
                null
              }
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
                  // <div style={{height: 500, width: 500}}>

                  // <Glyphicon glyph="refresh" className="spinning" />
                  // </div>
                  <h4 style={{paddingLeft: 15}}>    loading...</h4>
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
      {renderProducts()}
    </div>
  );
}