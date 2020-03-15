import React from "react";
import { Grid, Row, Col, Button, Thumbnail } from "react-bootstrap";

export default function NewItems (props) {
  const {
    setGraphicView,
    handleGraphicChoice,
    fabrics,
    designs,
    handleLargeImage,
  } = props;
  const graphics = [];

  setGraphicView("all");

  fabrics.map(fabric => {
    if(fabric.newGraphic === true) {
      graphics.push(fabric);
    }
  });

  designs.map(design => {
    if(design.newGraphic === true) {
      graphics.push(design);
    }
  });

  return(
    <Grid>
      {graphics.length !== 0 ?
        <Row>
          {graphics.map((graphic, i) => {
            return (
              <Col key={i} xs={12} sm={5} md={4} lg={4}>
                <Thumbnail className="renderThumb" key={graphic._id} src={graphic.imgUrl} alt="Image to be added soon....">
                  <h3>{graphic.name}</h3>
                  <Button onClick={() => handleLargeImage(graphic)}>Enlarge</Button>
                  <Button onClick={() => handleGraphicChoice(graphic)}>Choose</Button>
                </Thumbnail>
              </Col>
            )
          })}
        </Row>
        : <h1>No New Items at this time!!  Check back later!</h1>
      }
    </Grid>
  )
}