import React from "react";
import SmartPaymentButtons, { PayPalSDKWrapper } from "react-smart-payment-buttons";


// const ENV = process.env.NODE_ENV === "production"
//   ? "production"
//   : "sandbox";
// process.env.PAYPAL_CLIENT_ID_SANDBOX
export default function PayPalButton () {
  const CLIENT = {
    sandbox: "ASXEP2SpZf1QwO6SDyVEBgB_pOxIKC5fgNnrF4s-0RhkGLYhJnGx8fVRaZKnaICEIbJsvEmkVHQHGL8t",
    production: process.env.PAYPAL_CLIENT_ID_PRODUCTION
  }
  // const onSuccess = (payment) =>
  //   console.log(`Successful payment: ${payment}`);

  // const onError = (error) =>
  //   console.log("Erroneous payment or failed to load script!", error);

  // const onCancel = (data) =>
  //   console.log("Cancelled payment!", data);

  return (
    <div>
      <h1>Checkout</h1>
      <PayPalSDKWrapper clientId={CLIENT.sandbox}>
        <SmartPaymentButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                description: "This is a test sale",
                // item: [
                //   {
                //     name: "OVM",
                //     description: "Testing multiple items",
                //     unit_amount: "0.03"
                //   },
                //   {
                //     name: "CAP",
                //     description: "You wear it",
                //     unit_amount: "0.01"
                //   }
                // ],
                amount: {
                  value: "0.04"
                }
              }]
            })
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(function(details) {
              alert("Transaction completed by " + details.payer.name.given_name);
            })
          }}
        />
      </PayPalSDKWrapper>
    </div>
  )
}
