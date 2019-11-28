import React from "react";

export default function renderFabric(graphics) {
  return (
    <Grid fluid>
      <Row>
        <Col className="fabricHeader" xs={12} sm={5} md={4} lg={4}>
          <h2 style={{textDecoration:"underline"}}><strong>{imgBreakDown.imgSubCat[graphicView]}</strong></h2>
        </Col>
      </Row>
      <Row>
        {graphics.map((graphic, i) => {
          if (graphicView === "all") {
            return (
              <Col key={i} xs={12} sm={5} md={3}>
                <Thumbnail className="renderThumb" key={i} src={graphic.fabricImgUrl} onClick={() => {setFabricChoice(fabric); setFabricChosen(true); }} alt="Image to be added soon....">
                  <h3>{fabric.fabricName}</h3>
                </Thumbnail>
              </Col>
            )
          } else if(fabric.fabricSubCat === fabricView){
            return (
              <Col key={i} xs={12} sm={5} md={4} lg={4}>
                <Thumbnail className="renderThumb" key={i} src={fabric.fabricImgUrl} onClick={() => {setFabricChoice(fabric); setFabricChosen(true); }} alt="Image to be added soon....">
                  <h3>{fabric.fabricName}</h3>
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