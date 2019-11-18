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
      </div>
    );
  }

  return (
    <div className="Home">
      {renderProducts()}
    </div>
  );
}