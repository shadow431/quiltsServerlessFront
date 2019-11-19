import React, { useState, useEffect } from "react";
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

  // function renderProductsList(products) {
  //   return [{}].concat(products).map((product, i) => {
  //     if(i !== 0) {
  //       return (
  //         <Col key={i} xs={12} sm={5} md={3}>
  //           <Thumbnail key={product._id} src={product.imgUrl} alt="Well, something didn't work...">
  //             <h3>{product.imgName}</h3>
  //             <h3>${product.price}</h3>
  //             {/* <div id="paypal-button-container"></div>
  //             <script src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD" data-sdk-integration-source="button-factory"></script> */}
  //             {props.isAuthenticated ?
  //               (
  //                 <React.Fragment>
  //                   <Button onClick={() => {props.history.push("/admin/product/edit", { props: product })}}>Edit</Button>
  //                   <Button onClick={() => {props.history.push(`/admin/product/delete`, { props: product })}}>Delete</Button>
  //                 </React.Fragment>
  //               )
  //               :
  //               null
  //             }
  //           </Thumbnail>
  //         </Col>
  //       )
  //     }
  //   })
  // }

  function renderProducts() {
    const s3imgUrl = "https://wandaquilts.s3.us-east-2.amazonaws.com/private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4/Show1.jpg";

    return (
      <div className="container">
        <img className="HomePhotos" src={s3imgUrl} alt="Show pics"/>
        <h1>WELCOME TO OUR WEBSITE!!</h1>
        <p className="container">
          My name is Wanda, I operate a home based business located in Maple Falls, WA.
          It all started when I was four years old and my Grandmother sat me on her lap while she was sewing blocks for a quilt on her “White” treadle sewing machine. I have never gotten up.  That was 78 years ago.
          Besides selling directly from my web site, I am a vendors at Festivals, Craft Shows, and Dog Shows. I sell at up to 40 shows each year in Western Washington traveling in my motor home along with my two rescue cats.
          My love for sewing and embroidery started this business in 2004. All of the products that are sewn are produced by me in the USA. We purchase the other products to do my embroidery on. My love for animals made it a must to embellish these items with designs of the many breeds of dogs and cats available.
          On the days I am home you will find me down in my sewing rooms with the machines working. I strive to make quality products that last for many years.
          Enjoy looking through our web site. Please contact us if you have any
          questions.

          Thank you for the many customers that keep me working.
        </p>
      </div>
    );
  }

  return (
    <div className="Home">
      {renderProducts()}
    </div>
  );
}