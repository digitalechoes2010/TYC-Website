import React, { Component } from "react";
import { Field, Form } from "react-final-form";
export default class Coupon extends Component {
  onSubmit = async (values: any) => {
    alert(window.alert(JSON.stringify(values, undefined, 2)));
  };
  render() {
    return (
      <>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="Coupon">
                <Field
                  className="Coupon-Input"
                  name="coupon"
                  component="input"
                  type="text"
                  placeholder="Redeem Coupon Code"
                />

                <button className="Coupon-Btn" type="submit">
                  Apply Coupon
                </button>
              </div>
            </form>
          )}
        />
        <hr
          style={{
            color: "gray",
            backgroundColor: "gray",
            height: 1,
          }}
        />
      </>
    );
  }
}
