/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, cleanCart } from "../../store/Actions/cartActionCreator";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {
  errorToast,
  successToast,
  warningToast,
} from "../../utils/toasthelper";
// import { PayPalButton } from "react-paypal-button-v2";
import { PathApi } from "../../config/api.path.config";
import { API } from "../../config/api.config";
import { v4 as uuidv4 } from "uuid";
import { formatNumber } from "../../utils/numberHelper";
// import { PayPalButton } from "react-paypal-button-v2";

const currency = "USD";
const initialOptions = {
  "client-id":
    // "AYsAj_fCZknRDGtqFabi2Tbm7Ic9rcir_eBoRt8pdR4TNEWelz7fAOlBuIDaIVlGln59BcGe-hnl0cG7", //own
    "AfQkKW8fbWpCGLMWFNQb2OwY9X2WLRtPq8YViXqrO-jTKwPUigx_Z1fvl8agNPw5kr6cLYLAdosZMIPV", //tyc
  currency,
  intent: "capture",
  // "data-client-token": "7RRXB4PF82XLS",
};

class Paypal extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      TotalPrice: 0,
      purchase_units: [],
    };
  }
  componentDidMount() {
    const cuID = uuidv4();
    const totalPrice = formatNumber(
      this.props.cart.reduce(
        (accumulator, current) =>
          accumulator + current.regularPrice * current.quantity,
        0
      )
    );
    this.setState(
      {
        TotalPrice: totalPrice,
        purchase_units: [
          {
            invoice_id: "inv" + cuID,
            reference_id:
              this.props.userData !== null
                ? this.props.userData.id
                : "ref" + cuID,
            amount: {
              breakdown: {
                item_total: {
                  currency_code: currency,
                  value: totalPrice,
                },
              },
              value: totalPrice,
              currency_code: currency,
            },
            items: this.props.cart.map((i: any) => ({
              name: i.title,
              quantity: i.quantity,
              unit_amount: {
                value: formatNumber(i.regularPrice),
                currency_code: currency,
              },
            })),
          },
        ],
      },
      () => console.log("this.state", this.state)
    );
  }

  render() {
    // return (
    //   <PayPalButton
    //     amount="0.01"
    //     style={{
    //       layout: "vertical",
    //       color: "black",
    //       shape: "rect",
    //       label: "checkout",
    //     }}
    //     options={initialOptions}
    //     // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
    //     onSuccess={(details, data) => {
    //       alert("Transaction completed by " + details.payer.name.given_name);
    //       return {};
    //       // OPTIONAL: Call your server to save the transaction
    //       // return fetch("/paypal-transaction-complete", {
    //       //   method: "post",
    //       //   body: JSON.stringify({
    //       //     orderID: data.orderID,
    //       //   }),
    //       // });
    //     }}
    //     createOrder={(data, actions) => {
    //       return actions.order.create({
    //         purchase_units,
    //         intent: "CAPTURE",
    //       });
    //     }}
    //     onApprove={(data, actions) => {
    //       console.log(data);

    //       return actions.order
    //         .capture()
    //         .then((payload) => {
    //           console.log("success", payload, JSON.stringify(payload));
    //           // call server-side endpoint to finish the sale
    //           successToast("Payment successfull");
    //         })
    //         .catch((e) => {
    //           console.log("capture faild", e);
    //           errorToast("Something went wrong.");
    //         });
    //     }}
    //     // onCancel={(data, actions) => {
    //     //   console.log("cancel");
    //     //   warningToast("Payment cancellation successfull.");
    //     // }}
    //     onError={(err) => {
    //       console.log("error", err);
    //       errorToast("Something went wrong.");
    //     }}
    //   />
    // );
    const { purchase_units } = this.state;
    return (
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            label: "checkout",
            layout: "vertical",
            color: "black",
            shape: "rect",
          }}
          createOrder={(data, actions) => {
            console.log("purchase_units", purchase_units);

            return actions.order.create({
              purchase_units,
              intent: "CAPTURE",
            });
          }}
          onApprove={(data, actions: any) => {
            console.log("data", data);
            console.log("actions", actions);
            return actions.order
              .capture()
              .then((res) => {
                console.log("res", res);
                console.log("success", JSON.stringify(res));
                // call server-side endpoint to finish the sale
                const postData = {
                  // paypalData: res,
                  paypalOrderToken: data.facilitatorAccessToken,
                };
                console.log("postData", postData, JSON.stringify(postData));
                API.post(PathApi.paypalOrderSuccess + data.orderID, postData)
                  .then((data: any) => {
                    console.log("success", data);
                    successToast("Payment successfull");
                    //discart all items
                    console.log("discart");
                    this.props.clearCart();
                    setTimeout(() => {
                      window.location.reload();
                    }, 2000);
                  })
                  .catch((error: any) => {
                    console.log("error", error);
                    //payment successful but server not updated
                    errorToast("Something went wrong.");
                  });
              })
              .catch((e) => {
                console.log("capture faild", JSON.stringify(e));
                errorToast("Something went wrong.");
              });
          }}
          onCancel={(data, actions) => {
            console.log("cancel");
            warningToast("Payment cancellation successfull.");
          }}
          onError={(err) => {
            console.log("error", err);
            errorToast("Something went wrong.");
          }}
        />
      </PayPalScriptProvider>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    products: state.ProductsReducer.products,
    cart: state.CartReducer.Cart,
    userData: state.LoginReducer.userData,
  };
};
const mapDispatchToProps = (dispatch: DispatchType) => ({
  clearCart: () => dispatch(cleanCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Paypal);
