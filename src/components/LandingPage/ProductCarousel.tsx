import React, { Component } from "react";
import { IconContext } from "react-icons";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./styles/ProductCarousel.css";

interface Props {
  data: any;
  title: any;
  nslide: number;
}

interface State {}

export default class ProductCarousel extends Component<Props, State> {
  slider: any;
  constructor(props: any) {
    super(props);
    this.slider = React.createRef();
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    console.log("Carousel", this.props.data);
    const num = this.props.nslide;
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: num,
      slidesToScroll: 3,
      centerMode: false,
      speed: 1000,
      pauseOnHover: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,

            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            centerMode: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            centerMode: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    };

    return (
      <div className="Product-Carousel__Container">
        <p className="Product-smallTextHeader">
          THE MANY WAYS YOU CAN SHARE YOUR INFO
        </p>
        <div className="Product-header">
          <h2>{this.props.title}</h2>
          <div>
            <button className="Feature-Arrow" onClick={this.previous}>
              <IconContext.Provider value={{ size: "40px" }}>
                <div>
                  <BsArrowLeft />
                </div>
              </IconContext.Provider>
            </button>
            <button className="Feature-Arrow" onClick={this.next}>
              <IconContext.Provider value={{ size: "40px" }}>
                <div>
                  <BsArrowRight />
                </div>
              </IconContext.Provider>
            </button>
          </div>
        </div>

        <Slider
          className="Product-Slider"
          ref={(c) => (this.slider = c)}
          {...settings}
        >
          {this.props.data &&
            this.props.data.map((prod: any) => {
              console.log("prod", prod);
              return (
                <div className="Product-Carousel">
                  <div className="Product-Carousel__Card">
                    <Link  to={`/Product/${prod && prod.id}/${
                prod &&
              prod.categories &&
            prod.categories[0].id
              }}`}>
                    <img
                      src={
                        !prod.bannerImage
                          ? "https://imagestycdeve.s3.us-east.cloud-object-storage.appdomain.cloud/post/nfc.png"
                          : prod.bannerImage
                      }
                      alt="Products-Category"
                    />
                    </Link>
                    <Link className="Product-Carousel__Text"   to={`/Product/${prod && prod.id}/${
                prod &&
              prod.categories &&
            prod.categories[0].id
              }}`}>
                      <h3>{prod.title}</h3>
                    </Link>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }
}
