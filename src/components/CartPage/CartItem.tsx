/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Col, Input, Row } from "reactstrap";
import "./styles/CartItem.css";

interface IProps {
  cart: any;
  isUpdating: boolean;
  update: (e: any) => void;
  removeItem: (e: any) => any;
}
const CartItem: FC<IProps> = ({ update, cart, removeItem, isUpdating }) => {
  return (
    <>
      <Row>
        <Col md="4" lg="5" className="p-0">
          <Row>
            <img className="Cart-Item__img" src={cart.bannerImage}></img>
            <Col md="8" lg="6" className="Cart-Item__info">
              <h4>
                {cart.categories && cart.categories.map((c: any) => c.title)}
              </h4>
              <h3 className="mt-1">{cart.title}</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={{ size: 12, offset: 0 }} md="2" className="Cart-Item__price">
          <div>
            <p className="Cart-Item__mobileHeader">Price</p>
            <p>${cart.regularPrice}</p>
          </div>
        </Col>
        <Col
          xs={{ size: 12, offset: 0 }}
          md={{ size: 2, offset: 0 }}
          className="Cart-Item__Order"
        >
          <div>
            <p className="Cart-Item__mobileHeader">Quantity</p>
            <Input
              name="quantity"
              type="number"
              min={1}
              placeholder={cart.quantity}
              onChange={(e) => {
                update({ id: cart.id, quantity: e.target.value });
              }}
              disabled={isUpdating ? false : true}
            />
          </div>
        </Col>
        <Col
          xs={{ size: 12, offset: 0 }}
          md={{ size: 1, offset: 1 }}
          className="Cart-Item__Sub"
        >
          <div>
            <p className="Cart-Item__mobileHeader">Subtotal</p>
            <p>${cart.regularPrice * cart.quantity}</p>
          </div>
        </Col>
        <Col
          xs={{ size: 12, offset: 0 }}
          md={{ size: 1 }}
          className="Cart-Trash"
        >
          <button
            className={isUpdating ? "Cart-Trash_show" : "Cart-Trash_hide"}
            onClick={() => removeItem({ id: cart.id })}
          >
            <BsFillTrashFill className="Cart-Trash_icon" />
          </button>
        </Col>
      </Row>
      <hr
        style={{
          backgroundColor: "lightgray",
          height: 0.5,
        }}
      />
    </>
  );
};

export default CartItem;
