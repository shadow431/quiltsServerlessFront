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
        <Col xs={12} sm={9} md={10} lg={5}>
          <Carousel interval={5000}>
            {homeImgs.map((img, i) => {
              return (
                <Carousel.Item key={i}>
                  <img width={450} height={350} alt="Embroidery Shows" src={s3location + homeImgs[i]} style={{margin:"0 auto"}}/>
                </Carousel.Item>
            )})}
          </Carousel>
        </Col>
        <Col xs={12} sm={9} md={10} lg={7}>
          <div className="HomeBlurb">
            <h1 className="HomeBlurbHeader">WELCOME TO OUR WEBSITE!!</h1>
            <p>
              My name is Wanda, I operate a home based business located in Maple Falls, WA.
            </p>
            <p>
              It all started when I was four years old and my Grandmother sat me on her lap while she was sewing blocks for a quilt on her “White” treadle sewing machine. I have never gotten up.  That was 78 years ago.
              Besides selling directly from my web site, I am a vendor at Festivals, Craft Shows, and Dog Shows. I sell at up to 40 shows each year in Western Washington traveling in my motor home along with my two rescue cats.
            </p>
            <p>
              My love for sewing and embroidery started this business in 2004. All of the products that are sewn are produced by me in the USA. We purchase the other products to do my embroidery on. My love for animals made it a must to embellish these items with designs of the many breeds of dogs and cats available.
              On the days I am home you will find me down in my sewing rooms with the machines working. I strive to make quality products that last for many years.
              Enjoy looking through our web site. Please contact us if you have any
              questions.
            </p>
            <p>
              Thank you for the many customers that keep me working.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
      </Row>
      <Row>
      </Row>
    </Grid>
  );
}