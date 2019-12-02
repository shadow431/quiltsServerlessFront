import React from "react";

export default function renderGraphic(graphicProps) {
  return (
    <Grid fluid>
      <Row>
        <Col className="graphicHeader" xs={12} sm={5} md={4} lg={4}>
          <h2 style={{textDecoration:"underline"}}><strong>{imgBreakDown.subCat[graphicView]}</strong></h2>
        </Col>
      </Row>
      <Row>
        {graphics.map((graphic, i) => {
          if (graphicView === "all") {
            return (
              <Col key={i} xs={12} sm={5} md={3}>
                <Thumbnail className="renderThumb" key={i} src={graphic.imgUrl} onClick={() => {graphicsProps.setGraphicChoice(graphic); graphicsProps.setGraphicChosen(true); }} alt="Image to be added soon....">
                  <h3>{graphic.name}</h3>
                </Thumbnail>
              </Col>
            )
          } else if(graphic.subCat === fabricView){
            return (
              <Col key={i} xs={12} sm={5} md={4} lg={4}>
                <Thumbnail className="renderThumb" key={i} src={graphic.imgUrl} onClick={() => {graphicProps.setGraphicChoice(graphic); graphicProps.setGraphicChosen(true); }} alt="Image to be added soon....">
                  <h3>{graphic.name}</h3>
                </Thumbnail>
              </Col>
            )
          }
        })
        }
      </Row>
    </Grid>
  );
}