/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";
import { Col, Container, Input, Row } from "reactstrap";
import { addItem } from "../../store/Actions/cartActionCreator";
import ProductCard from "./ProductCard";
import Tabs from "./productTabsComponent/Tabs";
import "./styles/Product.css";

class Product extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      quantity: 1,
    };
    
  }
  
  
  handleChange = (val: string) => {
    this.setState({ quantity: parseInt(val) });
  };
  handleAdd = () => {
    const productId = this.props.match.params.id;
    const newItem: any = {
      ...this.props.products.find((product: any) => product.id === productId),
      quantity: this.state.quantity,
    };
    console.log(newItem);
    return this.props.addItem(newItem);
  };

  render() {
    const ProductId = this.props.match.params.id;

    return this.props.products.map((prod: any) => {
      if (prod.id.toString() === ProductId) {
        {
          console.log("prod", prod);
        }

        return (
          <Container className="Product" fluid={true}>
            <Row className="Product-Section">
              <Col className="Product-Img__Container" lg="6" md="12">
                <img
                  className="Product-Img"
                  src={prod.bannerImage}
                  alt={prod.name}
                />
              </Col>
              <Col className="Product-Section__Info" lg="6" md="12">
                <p className="Product-Category">
                  {prod.categories && prod.categories[0].title}
                </p>
                <h1 className="Product-Name">{prod.title}</h1>
                <h4
                  className={`Product-Price ${
                    prod.salePrice !== prod.regularPrice &&
                    "Product-Price__Crossed"
                  }`}
                >{`$${prod.regularPrice}`}</h4>
                {prod.salePrice - prod.regularPrice * 1 !== 0 ? (
                  <h4
                    className="Product-Price"
                    style={{ marginTop: 0, marginBottom: "2rem" }}
                  >
                    {`$${prod.salePrice}`}
                  </h4>
                ) : null}

                <p
                  className="Product-info"
                  dangerouslySetInnerHTML={{ __html: prod.description }}
                />
                <Row className="Product-BuyingSection">
                  <Col lg="2">
                    <Input
                      type="number"
                      placeholder="1"
                      min={1}
                      onChange={(e) => this.handleChange(e.target.value)}
                    ></Input>
                  </Col>
                  <Col lg="6">
                    <button
                      onClick={() => this.handleAdd()}
                      className="Product-addToCart"
                    >
                      ADD TO CART
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col lg="12">
                <Tabs
                  description={prod.description}
                  info={prod.info}
                  reviews={prod.reviews}
                  additionalInfo={prod.additionalInfo}
                />
              </Col>
            </Row>
          </Container>
        );
      }
    });
  }
}
const mapStateToProps = (state: any) => {
  return {
    products: state.ProductsReducer.products,
  };
};
const mapDispatchToProps = (dispatch: DispatchType) => ({
  addItem: (item: ICart) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
