import React, { Component } from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";

class PayPalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false
    };
    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const {
      isScriptLoaded,
      isScriptLoadSucceed
    } = this.props;
    if(isScriptLoadSucceed && isScriptLoaded) {
      this.setState({ showButton: true});
    }
  }

  return (
    <React.Fragment>
      <div id="paypal-button-container"></div>
      <script src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD" data-sdk-integration-source="button-factory"></script>
      <script>
        paypal.Buttons({
            style: {
                shape: 'rect',
                color: 'gold',
                layout: 'vertical',
                label: 'paypal'
            },
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '1'
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Transaction completed by ' + details.payer.name.given_name + '!');
                });
            }
        }).render('#paypal-button-container');
      </script>
    </React.Fragment>
  )
}

export default scriptLoader("https://www.paypalobjects.com/api/checkout.js")(PayPalButton);
