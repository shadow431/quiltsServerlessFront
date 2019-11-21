import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import "../components/LoaderButton.css";

export default function Home(props) {
  const s3location = "https://wandaquilts.s3.us-east-2.amazonaws.com/private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4/"
  const homeImgs = ["Show1.jpg", "Show2.jpg", "Show3.jpg", "Show4.jpg", "Show5.jpg", "Show6.jpg", "Show7.jpg"];

  // paypal.Buttons({
  //   style: {
  //       shape: 'rect',
  //       color: 'gold',
  //       layout: 'vertical',
  //       label: 'paypal'
  //   },
  //   createOrder: function(data, actions) {
  //       return actions.order.create({
  //           purchase_units: [{
  //               amount: {
  //                   value: '1'
  //               }
  //           }]
  //       });
  //   },
  //   onApprove: function(data, actions) {
  //       return actions.order.capture().then(function(details) {
  //           alert('Transaction completed by ' + details.payer.name.given_name + '!');
  //       });
  //   }
  // }).render('#paypal-button-container');

  return (
    <div className="Home">
      <div className="container">
        <h1 className="construction">THIS SITE IS STILL UNDER CONSTRUCTION, FEEL FREE TO BROWSE THROUGH THE NEW FUNCTIONS</h1>
        <Carousel interval={5000}>
          {homeImgs.map((img, i) => {
            return (
              <Carousel.Item key={i}>
                <img width={450} height={350} alt="Embroidery Shows" src={s3location + homeImgs[i]} style={{margin:"0 auto"}}/>
              </Carousel.Item>
          )})}
        </Carousel>
        <h1 className="HomeBlurbHeader">WELCOME TO OUR WEBSITE!!</h1>
        <div className="HomeBlurb">
          <p>
            My name is Wanda, I operate a home based business located in Maple Falls, WA.
          </p>
          <p>
            It all started when I was four years old and my Grandmother sat me on her lap while she was sewing blocks for a quilt on her “White” treadle sewing machine. I have never gotten up.  That was 78 years ago.
            Besides selling directly from my web site, I am a vendors at Festivals, Craft Shows, and Dog Shows. I sell at up to 40 shows each year in Western Washington traveling in my motor home along with my two rescue cats.
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
      </div>
    </div>
  );
}