import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import CartItem from "./CartItem";

interface IProps {
  cart: any;
  isUpdating: boolean;
  update: (e: any) => void;
  removeItem: (e: any) => any;
}
interface IState {}
export default class CartList extends Component<IProps, IState> {
  render() {
    const { update, cart, isUpdating, removeItem } = this.props;
    return (
      <>
        <Row className="CartList-Headers">
          <Col md="3" lg="5">
            <h3 className="CartList-Headers__Products">Products</h3>
          </Col>
          <Col md="3" lg="2">
            <h3 className="CartList-Headers__Price">Price</h3>
          </Col>
          <Col md="3" lg="3">
            <h3 className="CartList-Headers__Quantity">Quantity</h3>
          </Col>
          <Col md="3" lg="2">
            <h3 className="CartList-Headers__Subtotal">Subtotal</h3>
          </Col>
        </Row>
        <hr
          style={{
            color: "gray",
            backgroundColor: "gray",
            height: 1,
          }}
        />
        {cart.map((c: any, i) => {
          return (
            <CartItem
              cart={c}
              isUpdating={isUpdating}
              update={update}
              removeItem={removeItem}
            />
          );
        })}
      </>
    );
  }
}
