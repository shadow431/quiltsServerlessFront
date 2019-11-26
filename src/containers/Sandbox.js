import React, { Component } from "react";
import PayPalButton from "../components/PaypalButton";

export default class Sandbox extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render () {
    return (
      <PayPalButton />
    )
  }
}