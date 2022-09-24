/* eslint-disable array-callback-return */
import { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Checkout from "../components/CartPage/cartCheckout";
import CartList from "../components/CartPage/CartList";
import Coupon from "../components/CartPage/Coupon";
import { editItem } from "../store/Actions/cartActionCreator";
import "./styles/Cart.css";

class Cart extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isUpdating: false,
      cart: this.props.cart,
    };
  }

  handleClick() {
    this.setState({ isUpdating: !this.state.isUpdating });
    if (this.state.isUpdating) {
      this.props.editItem(this.state.cart);
    }
  }

  updateQuantity = (e: { id: any; quantity: any }) => {
    let stateCart = this.state.cart;
    this.setState({
      cart: stateCart.map((c: any) => {
        if (c.id === e.id) c.quantity = parseInt(e.quantity);
        return c;
      }, stateCart),
    });
    console.log(this.props);
    console.log(this.state);
  };
  removeItem = (e: { id: any }) => {
    this.setState({
      ...this.state,
      cart: this.state.cart.filter((i: any) => i.id !== e.id),
    });
  };

  render() {
    const { cart } = this.state;
    console.log(cart);
    return (
      <Container className="Cart-Container" fluid>
        <Helmet>
          <title>TYC - Cart</title>
        </Helmet>
        <CartList
          cart={cart}
          isUpdating={this.state.isUpdating}
          update={(e) => this.updateQuantity(e)}
          removeItem={(e) => this.removeItem(e)}
        />
        <Row>
          <Col lg="6">
            <Coupon />
          </Col>
          <Col lg={{ size: 2, offset: 4 }}>
            <button onClick={() => this.handleClick()} className="Cart-Update">
              {this.state.isUpdating ? "Save Cart" : "Update Cart"}
            </button>
          </Col>
        </Row>
        <Checkout cart={cart} />
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
  editItem: (item: ICart) => dispatch(editItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
