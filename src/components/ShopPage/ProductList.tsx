import React, { Component } from "react";
import { connect } from "react-redux";
import { Col } from "reactstrap";
import { getCategory } from "../../store/Actions/categoriesActionCreator";
import { getPosts } from "../../store/Actions/postsActionCreator";
import { getProducts } from "../../store/Actions/productsActionCreator";
import ProductCard from "./ProductCard";
import "./styles/ProductList.css";
interface IProps {
  category: any;
  products: any;
}
interface IState {}
class ProductList extends Component<any, IState> {
  componentDidMount() {
    this.props.getProducts();
    this.props.getCategories();
    // this.props.getPosts();
  }
  render() {
    const { category, products } = this.props;
    let prod =
      category === ""
        ? products
        : products.filter(
            (p: any) =>
              p.categories && p.categories.some((cat) => cat.id === category) //needs to be done after the devs add categories to products
          );
    return (
      <div className="ProductList">
        {prod &&
          prod.map((p: any) => {
            return (
              <Col xlg={3} lg={4} md={6} sm={12}>
                <ProductCard product={p} category={category} />
              </Col>
            );
          })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  getCategories: () => dispatch(getCategory()),
  getProducts: () => dispatch(getProducts()),
});

export default connect(null, mapDispatchToProps)(ProductList);
