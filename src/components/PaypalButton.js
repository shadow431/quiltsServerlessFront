import React from "react";
import SmartPaymentButtons, { PayPalSDKWrapper } from "react-smart-payment-buttons";


export default function PayPalButton (paypalId) {
  const CLIENT = {
    sandbox: "ASXEP2SpZf1QwO6SDyVEBgB_pOxIKC5fgNnrF4s-0RhkGLYhJnGx8fVRaZKnaICEIbJsvEmkVHQHGL8t",
    production: "AfdNscFujmkXKAenL1jP5Xo8RmTplWtmoml-toowjWOSmMxgg0as-sq5M7m4VxixSZEzgkZD9xWbmx4C"
  }

  return (
    <div>
      <h1>Single Purchase Checkout</h1>
      <PayPalSDKWrapper clientId={CLIENT.production}>
        <SmartPaymentButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                description: "This is a test sale",
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
      {/* <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value={paypalId} />
        <table>
          <thead>
            <tr>
              <td>
                <input type="hidden" name="on0" value="Quantity" />Quantity
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select name="os0">
                  <option value="1 Bag">1 Bag $10.00 USD</option>
                  <option value="2 Bags">2 Bags $20.00 USD</option>
                  <option value="3 Bags">3 Bags $30.00 USD</option>
                  <option value="4 Bags">4 Bags $40.00 USD</option>
                  <option value="5 Bags">5 Bags $50.00 USD</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form> */}
    </div>
  )
}
