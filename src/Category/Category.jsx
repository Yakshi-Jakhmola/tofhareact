import React from "react";
import "./Category.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Category = () => {
  //   const settings = {
  // fade: true,
  // dots: false,
  // infinite: true,
  // slidesToShow: 6,
  // slidesToScroll: 1,
  // autoplay: true,
  // speed: 3000,
  // autoplaySpeed: 0,
  // cssEase: "linear",
  // accessibility: false,
  // cssEase: "linear",
  // pauseOnHover: true,
  // rtl: reverse ? true : false,
  // initialSlide: 0,
  //   };
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="Category">
      <div className="Category-Heading">
        <h1>Our Category</h1>
      </div>
      <div className="main-Category-slick">
        <div className="Category-slick">
          <Slider {...settings}>
            <div className="slick-img">
              <img src="/img/category/bag.jpg" />
            </div>
            <div className="slick-img">
              <img src="/img/category/bottle.webp" />
            </div>
            <div className="slick-img">
              <img src="/img/category/diary.webp" />
            </div>
            <div className="slick-img">
              <img src="/img/category/giftset.webp" />
            </div>
            <div className="slick-img">
              <img src="/img/category/lunchbox.webp" />
            </div>
            <div className="slick-img">
              <img src="/img/category/pen.webp" />
            </div>
            <div className="slick-img">
              <img src="/img/category/quickdispatch.webp" />
            </div>
            <div className="slick-img">
              <img src="/img/category/techgadget.webp" />
            </div>
            <div className="slick-img">
              <img src="/img/category/trophies.webp" />
            </div>
            <div className="slick-img">
              <img src="/img/category/tshirt.webp" />
            </div>
            <div className="slick-img">
              <img src="/img/category/welcomekit.webp" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Category;
