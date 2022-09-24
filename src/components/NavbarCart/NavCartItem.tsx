/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from "react";
import { GrClose } from "react-icons/gr";
import { Col, Row } from "reactstrap";
interface IProps {
  item: any;
  removeItem: (e) => void;
}
const NavCartItem: FC<IProps> = ({ item, removeItem }) => (
  <Row>
    <Col className="pl-4 pr-1" mg="4">
      <img
        className="NavbarCart-img"
        src={
          !item.bannerImage
            ? "https://imagestycdeve.s3.us-east.cloud-object-storage.appdomain.cloud/post/nfc.png"
            : item.bannerImage
        }
      ></img>
    </Col>
    <Col className="NavbarCart-info pl-1" md="6">
      <p>{item.categories && item.categories[0].title}</p>
      <p>{item.title}</p>
      <p>
        <span>${item.regularPrice}</span>
      </p>
    </Col>
    <Col className="NavbarCart-Remove pl-0" md="2">
      <button onClick={() => removeItem(item.id)}>
        <GrClose />
      </button>
    </Col>
  </Row>
);

export default NavCartItem;
