import React from "react";
import "./CSS/carousel.css";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";

const Carousel = () => {
    return (
        <>
            <div
                id="carouselBasicExample"
                class="carousel slide carousel-fade"
                data-mdb-ride="carousel"
            >
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src={img1}
                            class="d-block w-100"
                            alt="Sunset Over the City"
                        />
                        <div class="carousel-caption ">
                            <h1>इस बार खेती की बारी</h1>
                            <h5 className="d-none d-md-block">
                                Empowering Farmers with technology and knowledge
                                for sustainable agriculture.
                            </h5>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img
                            src={img2}
                            class="d-block w-100"
                            alt="Canyon at Nigh"
                        />
                        <div class="carousel-caption ">
                            <h1>जय जवान जय किसान</h1>
                            <h5 className="d-none d-md-block">
                                Agricultural assistance at your fingure tips.
                            </h5>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img
                            src={img3}
                            class="d-block w-100"
                            alt="Cliff Above a Stormy Sea"
                        />
                        <div class="carousel-caption ">
                            <h1>
                                गाओ गीत करो गुणगान देश के किसानो का हो सम्मान!
                            </h1>
                            <h5 className="d-none d-md-block">
                                Agriculture made easy - your one stop solution
                                for all your farming needs.
                            </h5>
                        </div>
                    </div>
                </div>

                <button
                    class="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Carousel;
