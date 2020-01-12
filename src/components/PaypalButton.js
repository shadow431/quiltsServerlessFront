import React from "react";
import SmartPaymentButtons, { PayPalSDKWrapper } from "react-smart-payment-buttons";
import "./PaypalButton.css";

export default function PayPalButton (props) {
  const CLIENT = {
    sandbox: "ASXEP2SpZf1QwO6SDyVEBgB_pOxIKC5fgNnrF4s-0RhkGLYhJnGx8fVRaZKnaICEIbJsvEmkVHQHGL8t",
    production: "AfdNscFujmkXKAenL1jP5Xo8RmTplWtmoml-toowjWOSmMxgg0as-sq5M7m4VxixSZEzgkZD9xWbmx4C"
  }
  let quantity = props.quantity;
  const {
    paypalId,
    fabric,
    color,
    colorChosen,
    productType
  } = props;

  return (
    <div>
      {/* <h1>Single Purchase Checkout</h1>
      <PayPalSDKWrapper disable-funding="credit,card" clientId={CLIENT.production}>
        <SmartPaymentButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                description: `${props.product} ${props.fabric} ${props.quantity}`,
                amount: {
                  value: Number(props.price)
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
      </PayPalSDKWrapper> */}
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value={paypalId} />
        <input type="hidden" name="on0" value={`${productType},${fabric}`} />
        <input type="hidden" name="os0" value="1" />
        {colorChosen &&
          <React.Fragment>
            <input type="hidden" name="on1" value={color} />
            <input type="hidden" name="os1" value="" />
          </React.Fragment>}
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>
  )
}
