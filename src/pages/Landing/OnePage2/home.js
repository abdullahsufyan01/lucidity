import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Images
import imgpattern from "../../../assets/images/landing/img-pattern.png";
import background from "../../../assets/images/Images Lucidity/HeaderbannerImageSmall.jpg"

import sliderimage1 from '../../../assets/images/Images Lucidity/HeaderSlider/Identify Red Flags Early.jpg'
import sliderimage2 from '../../../assets/images/Images Lucidity/HeaderSlider/Unlock Customer Insights.jpg'
import sliderimage3 from '../../../assets/images/Images Lucidity/HeaderSlider/Identify Red Flags Early.jpg'
import sliderimage4 from '../../../assets/images/Images Lucidity/HeaderSlider/Personalized Retention Strategies-2.jpg'
import sliderimage5 from '../../../assets/images/Images Lucidity/HeaderSlider/Maximize Customer Lifetime Value.jpg'
import sliderimage6 from '../../../assets/images/Images Lucidity/HeaderSlider/Streamlined Insights, Actionable Results.jpg'
import sliderimage7 from '../../../assets/images/Images Lucidity/HeaderSlider/Empower Your Team with Data.jpg'


const Home = () => {
    return (
        <React.Fragment>
            <section className="section pb-0 hero-section" id="hero">
                <div className="bg-overlay bg-overlay-pattern"></div>
                    
                    <Row className="align-items-center gy-4 gx-2 gx-lg-5 px-3 px-lg-5 w-100">
                        <Col lg={5} className="order-2 order-lg-1">
                            <div className="text-muted">
                                <h1 className="display-6 fw-semibold mb-3 lh-base">Empowering Your Business using Data Insights with <span className="text-success">Lucidity</span></h1>
                                <p className="lead lh-base text-muted">
                                    Unlock the Power of Customer Intelligence to Safeguard Your Retail Business. 
                                    With our help you get Identifcation of Red Flags, Prevent at risk Customer Behavior, 
                                    Tailored Solutions for you Business, Drive Retention, Easy Integration and Seamless Implementation
                                </p>
                                <div className="d-flex gap-2 justify-content-start mt-4">
                                    <Link to="/register" className="btn btn-lg btn-success">Get Solutions<i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7} className="col-12 ms-lg-auto mx-auto order-1 order-lg-2">
                            <div>
                                <img src={background} alt="" className="img-fluid w-100 mt-4 mt-lg-0 rounded-4" />
                            </div>
                        </Col>
                    </Row>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={10}>
                            <div className='mt-4 mt-sm-5 pt-sm-5 mb-sm-n5 demo-carousel'>
                                <div className="demo-img-patten-top d-none d-sm-block">
                                    <img src={imgpattern} className="d-block img-fluid" alt="..." />
                                </div>
                                <div className="demo-img-patten-bottom d-none d-sm-block">
                                    <img src={imgpattern} className="d-block img-fluid" alt="..." />
                                </div>
                                <Swiper
                                    spaceBetween={30}
                                    effect={"fade"}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                                    modules={[EffectFade, Autoplay]}
                                    className="mySwiper" >

                                    <SwiperSlide className="carousel-inner rounded-4">
                                        <img className="rounded-4 w-100 h-auto" src={sliderimage1} alt='HeaderSlider1'/>
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-inner rounded-4">
                                        <img className="rounded-4 w-100 h-auto" src={sliderimage2} alt='HeaderSlider2' />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-inner rounded-4">
                                        <img className="rounded-4 w-100 h-auto" src={sliderimage3} alt='HeaderSlider3' />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-inner rounded-4">
                                        <img className="rounded-4 w-100 h-auto" src={sliderimage4} alt='HeaderSlider4' />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-inner rounded-4">
                                        <img className="rounded-4 w-100 h-auto" src={sliderimage5} alt='HeaderSlider5' />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-inner rounded-4">
                                        <img className="rounded-4 w-100 h-auto" src={sliderimage6} alt='HeaderSlider6' />
                                    </SwiperSlide>
                                    <SwiperSlide className="carousel-inner rounded-4">
                                        <img className="rounded-4 w-100 h-auto" src={sliderimage7} alt='HeaderSlider7' />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="position-absolute start-0 end-0 bottom-0 hero-shape-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 1440 120">
                        <g mask="url(&quot;#SvgjsMask1003&quot;)" fill="none">
                            <path d="M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z">
                            </path>
                        </g>
                    </svg>
                </div>

            </section>
        </React.Fragment>
    );
};

export default Home;