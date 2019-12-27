import React from "react";
import { Col, Grid, Row, Thumbnail, Button } from "react-bootstrap";
import Modal from "react-modal";

Modal.setAppElement('#root');

const RenderProducts = (props) => {
  const {products, handleProductChoice, typeToRender, handleLargeImage, isLargeImage} = props.productProps;
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  return (
    <Grid fluid>
      <Row>
          {products.map((product, i) => {
            if (product.type === typeToRender) {
              return (
                <Col key={i} xs={12} sm={5} md={4} lg={4}>
                  <Thumbnail className="renderThumb" key={product._id} src={product.imgUrl} alt="Image to be added soon....">
                    <h3>{product.name}</h3>
                    <h4>{`$${product.price}`}</h4>
                    <Button onClick={() => handleLargeImage(product)}>Enlarge</Button>
                    <Button onClick={() => handleProductChoice(product)}>Choose</Button>
                  </Thumbnail>
                  <Modal
                    isOpen={isLargeImage}
                    // onRequestClose={handleLargeImage}
                    style={customStyles}
                    contentLabel={product.name}
                  >
                    <img alt="Large showing" src={product.imgUrl} onClick={() => handleLargeImage()} />
                  </Modal>
                </Col>
              )
            }
          })
        }
      </Row>
    </Grid>
  );
}

export default RenderProducts;