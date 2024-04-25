import React from 'react';

import { Col, Container, Row } from 'reactstrap';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Images
import risk from "../../../assets/images/Images Lucidity/SliderImages/risk.jpg";
import proactive from "../../../assets/images/Images Lucidity/SliderImages/Proactive.jpg";
import warning from "../../../assets/images/Images Lucidity/SliderImages/Warning.jpg";
import customer from "../../../assets/images/Images Lucidity/SliderImages/Customer.jpg";
import data from "../../../assets/images/Images Lucidity/SliderImages/Data.jpg";
import strategy from "../../../assets/images/Images Lucidity/SliderImages/Strategy.jpg";

const Client = () => {
    return (
        <React.Fragment>
            <div className="pt-5 mt-5">
                <Container>
                    <Row>
                        <Col lg={12}>

                            <div className="text-center mt-5">
                                <h5 className="fs-20 mb-5">Identify <span className="text-primary text-decoration-underline">Red</span> Flags Early</h5>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    // pagination={{
                                    //     clickable: true,
                                    // }}
                                    pagination={false}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1
                                        },
                                        768: {
                                            slidesPerView: 2
                                        },
                                        1024: {
                                            slidesPerView: 3
                                        },
                                    }}
                                    loop={true}
                                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                                    modules={[Pagination, Autoplay]}
                                    className="mySwiper swiper trusted-client-slider mt-sm-5 mt-4 mb-sm-5 mb-4"
                                >
                                    <SwiperSlide>
                                        <div className="p-3">
                                            <div className="d-flex justify-content-center">
                                                <i className="las la-flag-checkered fs-1"></i>
                                            </div>
                                            <h5 className="text-center mt-3">Detecting Red Flags</h5>
                                            <p className="text-center mt-3 p-3">
                                                Lucidity's advanced analytics engine is your vigilant sentinel, 
                                                tirelessly scanning customer/member data to pinpoint subtle indications of potential churn. 
                                                Stay ahead of the curve by swiftly identifying red flags and implementing proactive retention measures
                                            </p>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide >
                                    <div className="p-3">
                                        <div className="d-flex justify-content-center">
                                            <i className="las la-bullhorn fs-1"></i>
                                        </div>
                                        <h5 className="text-center mt-3">Proactive Measures</h5>
                                        <p className="text-center mt-3 p-3">
                                        With Lucidity, proactive retention becomes your mantra. 
                                        Armed with early warning signals, you can leap into action, 
                                        engaging at-risk customers/members with tailored strategies that preempt churn and foster long-term loyalty.
                                        </p>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <div className="p-3">
                                            <div className="d-flex justify-content-center">
                                                <i className="las la-exclamation-triangle fs-1"></i>
                                            </div>
                                            <h5 className="text-center mt-3">Early Warning Signs</h5>
                                            <p className="text-center mt-3 p-3">
                                                Lucidity illuminates the path ahead, casting light on early warning signs that might otherwise go unnoticed. 
                                                Stay vigilant, for these signs are your guideposts, 
                                                signaling the need for immediate intervention to secure your customer/member base.
                                            </p>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="p-3">
                                            <div className="d-flex justify-content-center">
                                                <i className="las la-hand-holding-heart fs-1"></i>
                                            </div>
                                            <h5 className="text-center mt-3">Valuable Customers</h5>
                                            <p className="text-center mt-3 p-3">
                                                Within every sea of data, Lucidity helps you identify the pearls – your valuable customers/members. 
                                                With their loyalty as your compass, you can navigate turbulent waters, 
                                                ensuring their satisfaction and retention remain top priorities.
                                            </p>
                                        </div>

                                    </SwiperSlide>

                                    <SwiperSlide >
                                        <div className="p-3">
                                            <div className="d-flex justify-content-center">
                                                <i className="las la-chart-line fs-1"></i>
                                            </div>
                                            <h5 className="text-center mt-3">Data Insights</h5>
                                            <p className="text-center mt-3 p-3">
                                                Lucidity transforms raw data into actionable insights, 
                                                offering you a panoramic view of your customer/member landscape. 
                                                Dive deep into the ocean of information, where trends emerge and opportunities abound, 
                                                guiding your strategic decisions with clarity and precision.
                                            </p>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <div className="p-3">
                                            <div className="d-flex justify-content-center">
                                                <i className="las la-retweet fs-1"></i>
                                            </div>
                                            <h5 className="text-center mt-3">Retention Strategies</h5>
                                            <p className="text-center mt-3 p-3">
                                                Lucidity equips you with a treasure trove of retention strategies, 
                                                tailored to fit the unique contours of your business. 
                                                From personalized communications to targeted incentives, 
                                                unleash a toolkit designed to fortify relationships and bolster loyalty at every turn.
                                            </p>
                                        </div>

                                    </SwiperSlide>
                                </Swiper>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Client;