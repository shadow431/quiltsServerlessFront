import React, { useEffect } from "react";
import { Col, Grid, Row, Thumbnail } from "react-bootstrap";
import { API } from "aws-amplify";
import imgBreakDown from "./ImgBreakDown";

export default function renderGraphic(props) {
  const { graphicView, graphics, handleGraphicChoice } = props.graphicProps;
  const graphicToRender = [];

  // async function loadCategoryGraphic() {
  //   console.log("inside cat fab: ", graphicView);
  //   try {
  //     const categoryGraphics = await API.get("quilts", `/fabric/type/${graphicView}`);
  //     console.log("Graph Cat: ",categoryGraphics);
  //     graphicToRender = categoryGraphics;
  //   }
  //   catch (e) {
  //     if (e !== 'No current user') {
  //       loadCategoryGraphic();
  //       // return <ToastDemo />;
  //     }
  //   }
  // }



  function renderCategoryGraphics () {
    console.log("render cat: ", graphics);
    return (
      <React.Fragment>
        <Row>
          <Col className="graphicHeader" xs={12} sm={5} md={4} lg={4}>
            <h2 style={{textDecoration:"underline"}}><strong>{imgBreakDown.subCat[graphicView]}</strong></h2>
          </Col>
        </Row>
        <Row>
          {graphics.map((graphic, i) => {
            return (
              <Col key={i} xs={12} sm={5} md={3}>
                <Thumbnail className="renderThumb" key={i} src={graphic.imgUrl} onClick={() => handleGraphicChoice(graphic)} alt="Image to be added soon....">
                  <h3>{graphic.name}</h3>
                </Thumbnail>
              </Col>
            )})
          }
        </Row>
      </React.Fragment>
    )
  }

  function renderAllGraphics () {
    console.log("render all: ", graphics);
    return (
      graphics.map((graphic, i) => {
        return (
          <Row key={i}>
            <Col xs={12} sm={5} md={4} lg={4}>
              <Thumbnail className="renderThumb" key={graphic._id} src={graphic.imgUrl} onClick={() => handleGraphicChoice(graphic)} alt="Image to be added soon....">
                <h3>{graphic.name}</h3>
              </Thumbnail>
            </Col>
          </Row>
        )
      })
    )
  }
  return (
    <Grid fluid>
      {graphicView === "select" ? <h2>Please choose from the dropdown above!!</h2> : null}
      {graphicView === "all" ? renderAllGraphics() : null}
      {!graphicView === "all" || !graphicView === "select" ? renderCategoryGraphics() : null}
    </Grid>
  );
}