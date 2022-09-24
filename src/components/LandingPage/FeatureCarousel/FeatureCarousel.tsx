import React, { Component } from "react";
import { IconContext } from "react-icons";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FeatureCard from "./FeatureCard";
import "./styles/FeatureCarousel.css";

interface Props {
  data: { id: number; text: string; name: string }[];
  title: any;
  nslide: number;
}

interface State {}

export default class FeatureCarousel extends Component<Props, State> {
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

  handleClick() {}

  render() {
    const num = this.props.nslide;
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: num,
      slidesToScroll: 1,
      centerMode: true,
      speed: 500,
      pauseOnHover: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 2150,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            centerMode: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
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
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
      ],
    };

    return (
      <div className="Feature-Container">
        <p id="Features" className="Feature-SectionMsg">
          MEANINGFUL INTERACTIONS THAT CREATE LASTING IMPRESSIONS
        </p>
        <div className="Feature-header">
          <h2>{this.props.title}</h2>
          <div className="Feature-Arrow__div">
            <button className="Feature-Arrow" onClick={this.previous}>
              <IconContext.Provider value={{ size: "40px" }}>
                <div>
                  <BsArrowLeft className="Arrow" />
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
          className="Feature-Slider"
          ref={(c) => (this.slider = c)}
          {...settings}
        >
          {this.props.data.map((feat: any) => {
            return (
              <FeatureCard
                name={feat.name}
                text={feat.text}
                title={feat.title}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}
