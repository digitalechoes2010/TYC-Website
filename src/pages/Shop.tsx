import { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import CategoryTabs from "../components/ShopPage/categoryTabsComponent/categoryTabs";
import ProductList from "../components/ShopPage/ProductList";
import "./styles/Shop.css";

interface IPropsProps {
  cat: string;
}
// interface IProps extends RouteComponentProps<MatchProps> {}
interface IState {
  activeCategory: any;
}
class Shop extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeCategory: "",
    };
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleCategory(i: any) {
    this.setState({ activeCategory: i });
  }
  render() {
    const { categories } = this.props;
    const { products } = this.props;
    console.log(products);
    return (
      <Container fluid={true} className="Shop">
        <Helmet>
          <title>TYC - Shop</title>
        </Helmet>
        <Row className="Shop-Title">
          <Col lg={3}>
            <h1 className="Shop-Title">Reinvent Socializing</h1>
          </Col>
        </Row>
        {/* <Row className="Shop-Categories">
          <Col sm={12}>
            <CategoryTabs
              handleCategory={this.handleCategory}
              category={categories}
            />
          </Col>
        </Row> */}
        <Row className="Shop-ProductList">
          <Col xs={12} className="Shop-ProductList">
            <ProductList
              category={this.state.activeCategory}
              products={products}
            />
          </Col>
        </Row>
        <Row className="Product-Description__Tabs"></Row>
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    categories: state.CategoriesReducer.category,
    products: state.ProductsReducer.products,
  };
};

export default connect(mapStateToProps, null)(Shop);
