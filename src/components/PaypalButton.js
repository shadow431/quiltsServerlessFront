import React, { Component } from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";

// const CLIENT = {
//   sandbox: process.env.PAYPAL_CLIENT_ID_SANDBOX,
//   production: process.env.PAYPAL_CLIENT_ID_PRODUCTION
// }

// const ENV = process.env.NODE_ENV === "production"
//   ? "production"
//   : "sandbox";

// class App extends Component {
//   render() {
//     const onSuccess = (payment) =>
//       console.log(`Successful payment: ${payment}`);

//     const onError = (error) =>
//       console.log("Erroneous payment or failed to load script!", error);

//     const onCancel = (data) =>
//       console.log("Cancelled payment!", data);

//     return (
//       <div>
//         <PaypayButton
//           client={CLIENT}
//           env={ENV}
//           commit={true}
//           currency={"USD"}
//           total={100}
//           onSuccess={onSuccess}
//           onError={onError}
//           onCancel={onCancel}
//         />
//       </div>
//     )
//   }
// }

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

  componentWillReceiveProps(nextProps) {
    const {
      isScriptLoaded,
      isScriptLoadSucceed,
    } =  nextProps;

    const isLoadedButWasntLoadedBefore =
    !this.state.showButton &&
    !this.props.isScriptLoaded &&
    isScriptLoaded;

    if (isLoadedButWasntLoadedBefore) {
      if(isScriptLoadSucceed) {
        this.setState({ showButton: true });
      }
    }
  }

  render () {
    const {
      total,
      currency,
      env,
      commit,
      client,
      onSuccess,
      onError,
      onCancel,
    } = this.props;

    const {
      showButton,
    } = this.state;

    const payment = () =>
      paypal.rest.payment.create(env, client, {
        transactions: [
          {
            amount: {
              total,
              currency,
            }
          },
        ],
      });
    const onAuthorize = (data, actions) =>
      actions.payment.execute()
        .then(() => {
          const payment = {
            paid: true,
            cancelled: false,
            payerID: data.payerID,
            paymentID: data.paymentID,
            paymentToken: data.paymentToken,
            returnUrl: data.returnUrl,
          };
          onSuccess(payment);
        });

    return (
      <div>
        {showButton && <paypal.Button.react
          env={env}
          client={client}
          commit={commit}
          payment={payment}
          onAuthorize={onAuthorize}
          onCancel={onCancel}
          onError={onError}
        />}
      </div>
    );
  }
}




//   return (
//     <React.Fragment>
//       <div id="paypal-button-container"></div>
//       <script src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD" data-sdk-integration-source="button-factory"></script>
//       <script>
//         paypal.Buttons({
//             style: {
//                 shape: 'rect',
//                 color: 'gold',
//                 layout: 'vertical',
//                 label: 'paypal'
//             },
//             createOrder: function(data, actions) {
//                 return actions.order.create({
//                     purchase_units: [{
//                         amount: {
//                             value: '1'
//                         }
//                     }]
//                 });
//             },
//             onApprove: function(data, actions) {
//                 return actions.order.capture().then(function(details) {
//                     alert('Transaction completed by ' + details.payer.name.given_name + '!');
//                 });
//             }
//         }).render('#paypal-button-container');
//       </script>
//     </React.Fragment>
//   )
// }

export default scriptLoader("https://www.paypalobjects.com/api/checkout.js")(PayPalButton);
