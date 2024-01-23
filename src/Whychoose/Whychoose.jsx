import React from "react";
import './Whychoose.css';

const Whychoose = () => {
    return(
        <>
            <div className="why-choose section">
                <div className="container">
                    <div className="heading">
                        <h2>Why Choose Us?</h2>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-lg-2 col-md-3 col-sm-6 mb-3">
                            <div className="why-choose-card">
                                <div className="why-choose-icon">
                                    <img src="img/choose/wide-range.png"/>
                                </div>
                                <div className="why-choose-name">
                                    <h5>Wide Range</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 mb-3">
                            <div className="why-choose-card">
                                <div className="why-choose-icon">
                                    <img src="img/choose/fast-delivery.png"/>
                                </div>
                                <div className="why-choose-name">
                                    <h5>Fast Delivery</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 mb-3">
                            <div className="why-choose-card">
                                <div className="why-choose-icon">
                                    <img src="img/choose/quick-quotes.png"/>
                                </div>
                                <div className="why-choose-name">
                                    <h5>Quick Quotes</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 mb-3">
                            <div className="why-choose-card">
                                <div className="why-choose-icon">
                                    <img src="img/choose/expert-team.png"/>
                                </div>
                                <div className="why-choose-name">
                                    <h5>Expert Team</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 mb-3">
                            <div className="why-choose-card">
                                <div className="why-choose-icon">
                                    <img src="img/choose/low-price.png"/>
                                </div>
                                <div className="why-choose-name">
                                    <h5>Low Price</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Whychoose;
