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
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
    ],
  };

  return (
    <div className="Category section">
      <div className="container">
        <div className="heading">
          <h2>Our Category</h2>
        </div>
        <div className="main-Category-slick">
          <div className="Category-slick">
            <Slider {...settings}>
              <div className="slick-card">
                <div className="slick-img">
                  <img src="/img/category/bag.jpg" />
                </div>
                <div className="slick-name">
                  <h6>Bag</h6>
                </div>
              </div>
              <div className="slick-card">
                <div className="slick-img">
                  <img src="/img/category/bottle.webp" />
                </div>
                <div className="slick-name">
                  <h6>Bottle</h6>
                </div>
              </div>
              <div className="slick-card">
                <div className="slick-img">
                  <img src="/img/category/diary.webp" />
                </div>
                <div className="slick-name">
                  <h6>Diary</h6>
                </div>
              </div>
              <div className="slick-card">
                <div className="slick-img">
                  <img src="/img/category/giftset.webp" />
                </div>
                <div className="slick-name">
                  <h6>Giftset</h6>
                </div>
              </div>
              <div className="slick-card">
                <div className="slick-img">
                  <img src="/img/category/lunchbox.webp" />
                </div>
                <div className="slick-name">
                  <h6>Lunchbox</h6>
                </div>
              </div>
              <div className="slick-card">
                <div className="slick-img">
                  <img src="/img/category/pen.webp" />
                </div>
                <div className="slick-name">
                  <h6>Pen</h6>
                </div>
              </div>
              <div className="slick-card">
                <div className="slick-img">
                  <img src="/img/category/quickdispatch.webp" />
                </div>
                <div className="slick-name">
                  <h6>Quickdispatch</h6>
                </div>
              </div>
              <div className="slick-card">
                <div className="slick-img">
                  <img src="/img/category/techgadget.webp" />
                </div>
                <div className="slick-name">
                  <h6>Techgadget</h6>
                </div>
              </div>
              <div className="slick-card">
                <div className="slick-img">
                  <img src="/img/category/trophies.webp" />
                </div>
                <div className="slick-name">
                  <h6>Trophies</h6>
                </div>
              </div>
              <div className="slick-card">
                <div className="slick-img">
                  <img src="/img/category/tshirt.webp" />
                </div>
                <div className="slick-name"> 
                  <h6>T-Shirt</h6> 
                </div>
              </div>
              <div className="slick-card">
                <div className="slick-img">
                  <img src="/img/category/welcomekit.webp" />
                </div>
                <div className="slick-name">
                  <h6>Welcomekit</h6>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
