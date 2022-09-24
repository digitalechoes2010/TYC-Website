import { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import CTA from "../components/LandingPage/CTA";
import FeatureCarousel from "../components/LandingPage/FeatureCarousel/FeatureCarousel";
import HeroCarousel from "../components/LandingPage/HeroCarousel";
import HowItWorks from "../components/LandingPage/HowItWorks";
import MessageForm from "../components/LandingPage/MessageForm";
import ProductCarousel from "../components/LandingPage/ProductCarousel";
import WhatYouCanShare from "../components/LandingPage/WhatYouCanShare";
import data from "../Dummy-Data.json";
import { getCategory } from "../store/Actions/categoriesActionCreator";
import { getPosts } from "../store/Actions/postsActionCreator";
import { getProducts } from "../store/Actions/productsActionCreator";
import "./styles/Home.css";
interface Props {}
interface State {}
class Home extends Component<any, State> {
  componentDidMount() {
    this.props.getProducts();
    this.props.getCategories();
    // this.props.getPosts();
  }
  render() {
    const { categories } = this.props;
    const { products } = this.props;
    //const { posts } = this.props;
    console.log("categories ", categories);
    console.log("products ", products);
    //console.log("posts ", posts);
    return (
      <div className="Home-Container">
        <Helmet>
          <title>TYC - Home</title>
        </Helmet>
        <HeroCarousel />

        <FeatureCarousel
          title="App Features"
          data={data.data.Features}
          nslide={4}
        />

        <HowItWorks />

        <ProductCarousel
          title="Our Range Of Chips"
          data={products}
          nslide={3}
        />

        <WhatYouCanShare />

        <CTA />

        <div id="Form">
          <MessageForm />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    categories: state.CategoriesReducer.category,
    products: state.ProductsReducer.products,
    posts: state.PostsReducer.post,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  getCategories: () => dispatch(getCategory()),
  getPosts: () => dispatch(getPosts()),
  getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
