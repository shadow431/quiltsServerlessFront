import React from "react";
import { Carousel, Grid, Row, Col } from "react-bootstrap";
import "./globalCSS.js";
import "../components/LoaderButton.css";

export default function Home(props) {
  const s3location = "https://wandaquilts.s3.us-east-2.amazonaws.com/private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4/"
  const homeImgs = ["Show2.jpg", "Show8.jpg", "Show5.jpg", "Show6.jpg", "Show7.jpg"];

  return (
    <Grid className="Home">
      <Row>
        <Col xs={12} sm={9} md={10} lg={12}>
          <Carousel interval={5000}>
            {homeImgs.map((img, i) => {
              return (
                <Carousel.Item key={i}>
                  <img width={450} height={350} alt="Embroidery Shows" src={s3location + homeImgs[i]} style={{ margin: "0 auto" }} />
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Col>
        <Col xs={12} sm={9} md={10} lg={12}>
          <div className="HomeBlurb">
            <h1 className="HomeBlurbHeader text-center">WELCOME TO OUR WEBSITE!!</h1>
            <p className="text-center">
              Thank you for the many customers that keep me working.
            </p>
          </div>
        </Col>
      </Row>
    </Grid>
  );
}
