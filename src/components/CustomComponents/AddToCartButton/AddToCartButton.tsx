import React, { Component } from "react";
import { FaParachuteBox, FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import "./AddToCartButton.css";
interface State {
  clicked: boolean;
}
interface Props {
  addItem: any;
  isLoggedIn: any;
}
class AddToCartButton extends Component<any, State> {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  render() {
    const { isLoggedIn } = this.props;
    console.log("isLoggedIn", isLoggedIn);
    return (
      <div>
        <button
          className={`cart-button ${this.state.clicked && "clicked"}`}
          onClick={() => {
            //    if (isLoggedIn === true) {
            this.props.addItem();
            this.setState({ clicked: true });
            setTimeout(() => {
              this.setState({ clicked: false });
            }, 3500);
            //   } else {
            //     window.location.href = "/SignIn";
            //     }
          }}
        >
          <span className="add-to-cart">Add to cart</span>
          <span className="added">
            <svg
              className={`${this.state.clicked && "checkmark"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className={`${this.state.clicked && "checkmark__circle"}`}
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className={`${this.state.clicked && "checkmark__check"}`}
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </span>
          <span className="cart-icon">
            {" "}
            <FaShoppingCart />
          </span>
          <span className="box-icon">
            {" "}
            <FaParachuteBox />
          </span>
        </button>
      </div>
    );
  }
}

export default AddToCartButton;
