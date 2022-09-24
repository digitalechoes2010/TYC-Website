/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
import { removeItem } from "../../store/Actions/cartActionCreator";
import NavCartItem from "./NavCartItem";
import "./styles/NavbarCart.css";

class NavbarCart extends Component<any, any> {
  handleRemove = (id: string) => {
    this.props.removeItem(id);
  };
  render() {
    const { cart } = this.props;
    return (
      <Container className="p-0" fluid>
        {cart &&
          cart.map((product: any) => (
            <NavCartItem
              item={product}
              removeItem={(id) => this.handleRemove(id)}
            />
          ))}
        <Row className="NavbarCart-totals">
          <p>TOTAL COST:</p>
          <p>
            $
            {cart.reduce((sum: number, a: any) => {
              return sum + a.regularPrice * a.quantity;
            }, 0)}
          </p>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    cart: state.CartReducer.Cart,
  };
};
const mapDispatchToProps = (dispatch: DispatchType) => ({
  removeItem: (item: string) => dispatch(removeItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavbarCart);
