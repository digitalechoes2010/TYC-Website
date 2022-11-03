import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { Col, Input, Row } from "reactstrap";
import { addItem } from "../../store/Actions/cartActionCreator";
import AddToCartButton from "../CustomComponents/AddToCartButton/AddToCartButton";
import "./styles/ProductCard.css";

class ProductCard extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: any) {
    this.setState({ quantity: parseInt(e.target.value) });
  }
  handleAdd = () => {
    const newItem: any = {
      ...this.props.product,
      quantity: this.state.quantity,
    };
    return this.props.addItem(newItem);
  };

  render() {
    const { product } = this.props;

    return (
      <div className="Card">
        {product && product.inStock ? (
          <p className="Card-OutOfStock">Sold Out</p>
        ) : null}
        <Row className="Card-img__Container">
        <Link
              className="Card-Title__Link"
              to={`/Product/${product && this.props.product.id}/${
                product &&
                this.props.product.categories &&
                this.props.product.categories[0].id
              }}`}
            >
                   <img
            className="Card-Img"
            src={
              product && !product.bannerImage
                ? "https://imagestycdeve.s3.us-east.cloud-object-storage.appdomain.cloud/post/nfc.png"
                : product && this.props.product.bannerImage
            }
            alt=""
          />
            </Link>
    
          <span className="Card-addToCart">
            {" "}
            <AddToCartButton
              addItem={this.handleAdd}
            //  isLoggedIn={this.props.isLoggedIn.isLoggedIn}
              disabled={
                product && this.props.product.inStock === true ? false : true
              }
            />
          </span>
        </Row>

        <Row className="Card-Type-Rating">
          <Col lg={6}>
            <p className="Card-Type">
              {product &&
                product.categories &&
                product.categories.map((cat: any) => {
                  return cat.title;
                })}
            </p>
          </Col>
        </Row>
        <Row className="Card-Title">
          <Col lg={12}>
            <Link
              className="Card-Title__Link"
              to={`/Product/${product && this.props.product.id}/${
                product &&
                this.props.product.categories &&
                this.props.product.categories[0].id
              }}`}
            >
              {product && product.title}
            </Link>
          </Col>
        </Row>
        <Row className="Card-Price-Order">
          <Col lg={2}>
            <p className="Card-Price">{`$${
              product && product.regularPrice
            }`}</p>
          </Col>
          <Col lg={3}>
            <Input
              className="Card-Order"
              type="number"
              min={1}
              placeholder="1"
              onChange={this.handleChange}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return { Cart: state, isLoggedIn: state.LoginReducer };
};
const mapDispatchToProps = (dispatch: DispatchType) => ({
  addItem: (item: ICart) => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
