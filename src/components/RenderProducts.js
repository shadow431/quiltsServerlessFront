import React, { useState } from "react";
import { Col, Grid, Row, Thumbnail, Button } from "react-bootstrap";
import Modal from "react-modal";

Modal.setAppElement('#root');

export default function RenderProducts(props) {
  const {products, handleProductChoice, typeToRender, handleLargeImage, isLargeImage} = props.productProps;
  const [currentProduct, setCurrentProduct] = useState([]);

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
        contentLabel={currentProduct.name}
      >
        <img alt="Large showing" src={currentProduct.imgUrl} />
        <br />
        <Button onClick={() => handleLargeImage()}>Close</Button>
        <Button onClick={() => handleProductChoice(currentProduct)}>Choose</Button>
      </Modal>
    )
  }

  return (
    <Grid fluid>
      <Row>
        {products.map((product, i) => {
          if (product.type === typeToRender) {
            return (
              <Col key={i} xs={12} sm={5} md={4} lg={4}>
                <React.Fragment>
                  <Thumbnail className="renderThumb" key={product._id} src={product.imgUrl} alt="Image to be added soon....">
                    <h3>{product.name}</h3>
                    <h4>{`$${product.price}`}</h4>
                    <Button onClick={() => {setCurrentProduct(product); handleLargeImage()}}>Enlarge</Button>
                    <Button onClick={() => handleProductChoice(product)}>Choose</Button>
                  </Thumbnail>
                  {isLargeImage ? <LargerImage product={{product}} /> : null}
                </React.Fragment>
              </Col>
            )
          }
        })
        }
      </Row>
    </Grid>
  );
}