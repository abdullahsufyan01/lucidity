import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const Services = () => {
    return (
        <React.Fragment>
            <section className="section" id="services">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-5">
                                <h1 className="mb-3 ff-secondary fw-semibold lh-base">Personalized Insights, Tailored Solutions</h1>
                                <p className="text-muted">Every retail business is unique, and Success Play understands that. Our Lucidity platform
                                provides personalized insights and actionable recommendations tailored to your specific
                                business needs, ensuring maximum impact and ROI.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-3">
                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-store-3-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Unlock Your Retail Potential</h5>
                                    <p className="text-muted my-3 ff-secondary">
                                        Discover the untapped possibilities within your retail business. 
                                        Our personalized insights will help you uncover new opportunities for growth and success.
                                    </p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-shopping-bag-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Tailored Solutions for Every Store</h5>
                                    <p className="text-muted my-3 ff-secondary">
                                        No two retail businesses are the same. 
                                        We understand your unique needs and provide customized solutions that align with your store's individual requirements.
                                    </p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-line-chart-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Personalized Insights, Maximum Impact</h5>
                                    <p className="text-muted my-3 ff-secondary">
                                        Harness the power of data-driven insights tailored specifically to your retail operations.
                                        With actionable recommendations, you'll make informed decisions for maximum impact on your bottom line.
                                    </p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-lightbulb-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Actionable Recommendations for Growth</h5>
                                    <p className="text-muted my-3 ff-secondary">
                                        Receive actionable recommendations designed to fuel your business growth. 
                                        From optimizing inventory management to enhancing customer experiences, our solutions pave the way for success.
                                    </p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-hand-heart-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Your Success, Our Priority</h5>
                                    <p className="text-muted my-3 ff-secondary">
                                        At Lucidity, your success is our top priority. 
                                        We're committed to partnering with you every step of the way, 
                                        providing support and guidance to help you achieve your retail goals.
                                    </p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-lock-unlock-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Unlocking Retail Excellence</h5>
                                    <p className="text-muted my-3 ff-secondary">
                                        Unleash the full potential of your retail business with Lucidity. 
                                        Our tailored solutions and personalized insights empower you to navigate challenges and seize opportunities, 
                                        driving excellence in every aspect of your operations
                                    </p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Services;