import React from "react";
import './Clients.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 7,
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
    return(
        <>
            <div className="clients section">
                <div className="container">
                    <div className="heading">
                        <h2>Client's</h2>
                    </div>
                    <div className="main-Category-slick">
                        <div className="Category-slick">
                            <Slider {...settings}>
                                <div className="client-image">
                                    <img src="img/clients/anytime-fitness.png"/>
                                </div>
                                <div className="client-image">
                                    <img src="img/clients/bharat-pe.webp"/>
                                </div>
                                <div className="client-image">
                                    <img src="img/clients/component-fitness.webp"/>
                                </div>
                                <div className="client-image">
                                    <img src="img/clients/everyday.webp"/>
                                </div>
                                <div className="client-image">
                                    <img src="img/clients/ultratech-cement.png"/>
                                </div>
                                <div className="client-image">
                                    <img src="img/clients/vlcc.png"/>
                                </div>
                                <div className="client-image">
                                    <img src="img/clients/wow-momos.webp"/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Clients;