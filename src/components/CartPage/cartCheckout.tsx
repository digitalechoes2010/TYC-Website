import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { formatNumber } from "../../utils/numberHelper";
import Paypal from "../Paypal/Paypal";
import "./styles/Checkout.css";
interface IProps {
  cart: any;
}
interface IState {}
export default class Checkout extends Component<IProps, IState> {
  render() {
    const { cart } = this.props;
    console.log(cart);
    return (
      <>
        <Row className="cartCheckout-Title">
          <Col md="6">
            <h3>Cart Totals</h3>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <h3 className="cartCheckout-Title__Subtotal">Subtotal</h3>
          </Col>
          <Col md="6">
            <p className="cartCheckout-Totals__Subtotal">
              $
              {formatNumber(
                cart.reduce((sum: number, a: any) => {
                  return sum + a.regularPrice * a.quantity;
                }, 0)
              )}
            </p>
          </Col>
        </Row>
        <hr
          style={{
            color: "gray",
            backgroundColor: "gray",
            height: 1,
          }}
        />
        <Row>
          <Col md="6">
            <h3 className="cartCheckout-Title__Total">Total</h3>
          </Col>

          <Col md="6">
            <p className="cartCheckout-Totals__Total">
              $
              {formatNumber(
                cart.reduce((sum: number, a: any) => {
                  return sum + a.regularPrice * a.quantity;
                }, 0)
              )}
            </p>
          </Col>
        </Row>
        <hr
          style={{
            color: "gray",
            backgroundColor: "gray",
            height: 1,
          }}
        />
        <Row>
          <Col md={{ size: 12, offset: 0 }} lg={{ size: 2, offset: 10 }}>
            <Paypal />
          </Col>
        </Row>
      </>
    );
  }
}
