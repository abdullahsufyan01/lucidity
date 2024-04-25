import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
// import img1 from "../../../assets/images/landing/features/img-1.png";
import img2 from "../../../assets/images/Images Lucidity/At-Risk Customer.jpg";
import img3 from "../../../assets/images/Images Lucidity/Target-Retention.jpg";

const Features = () => {
    return (
        <React.Fragment>

            {/* <section className="section bg-light py-5" id="features">
                <Container>
                    <Row className="align-items-center gy-4">
                        <Col lg={6} sm={7} className="mx-auto">
                            <div>
                                <img src={img1} alt="" className="img-fluid mx-auto" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="text-muted">
                                <div className="avatar-sm icon-effect mb-4">
                                    <div className="avatar-title bg-transparent rounded-circle text-success h1">
                                        <i className="ri-collage-line fs-36"></i>
                                    </div>
                                </div>
                                <h3 className="mb-3 fs-20">Huge collection of widgets</h3>
                                <p className="mb-4 ff-secondary fs-16">Collection widgets specialize in displaying many elements of the same type, such as a collection of pictures from a collection of articles from a news app or a collection of messages from a communication app.</p>

                                <Row className="pt-3">
                                    <Col className="col-3">
                                        <div className="text-center">
                                            <h4>5</h4>
                                            <p>Dashboards</p>
                                        </div>
                                    </Col>
                                    <Col className="col-3">
                                        <div className="text-center">
                                            <h4>150+</h4>
                                            <p>Pages</p>
                                        </div>
                                    </Col>
                                    <Col className="col-4">
                                        <div className="text-center">
                                            <h4>7+</h4>
                                            <p>Functional Apps</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <section className="section">
                <Container>
                    <div className="text-center mb-5">
                        <h1 className="mb-3 ff-secondary fw-semibold lh-base">Drive Retention and Loyalty</h1>
                        <p className="text-muted">
                            By understanding your at-risk customers/members better, you can implement targeted
                            retention strategies that resonate with their needs and preferences. Keep your
                            customers/members engaged, satisfied, and loyal to your brand.
                        </p>
                    </div>
                    <Row className="align-items-center gy-4">
                        <Col lg={6} className="order-2 order-lg-1">
                            <div className="text-muted">
                                {/* <h5 className="fs-12 text-uppercase text-success">Design</h5> */}
                                <h4 className="mb-3">Understanding At-Risk Customers/Members</h4>
                                <p className="mb-4 ff-secondary">
                                    Gain deep insights into the behaviors and preferences of at-risk 
                                    customers/members to understand their motivations and pain points, 
                                    enabling targeted retention efforts.</p>

                                <Row>
                                    <Col sm={5}>
                                        <div className="vstack gap-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Data Analysis</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Segmentation</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Feedback Mechanisms</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={5}>
                                        <div className="vstack gap-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Predictive Modeling</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div
                                                            className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">Lifecycle Analysis</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="mt-4">
                                    <Link to="/index" className="btn btn-success">Learn More <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} sm={8} className="col-10 ms-lg-auto mx-auto order-1 order-lg-2">
                            <div>
                                <img src={img2} alt="" className="img-fluid rounded-4" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center mt-5 pt-lg-5 gy-4">
                        <Col lg={6} sm={8} className="col-10 mx-auto">
                            <div>
                                <img src={img3} alt="" className="img-fluid rounded-4" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="text-muted ps-lg-5">
                                {/* <h5 className="fs-12 text-uppercase text-success">structure</h5> */}
                                <h4 className="mb-3">Implementing Targeted Retention Strategies</h4>
                                <p className="mb-4">Implement personalized strategies tailored to the specific needs and preferences of at-risk customers/members, ensuring proactive engagement and retention.</p>

                                <div className="vstack gap-2">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">Personalized Communication</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">Omnichannel Engagement</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">Continuous Monitoring</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <section className="py-5 bg-primary position-relative">
                <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
                <Container>
                    <Row className="align-items-center gy-4">
                        <Col className="col-sm">
                            <div>
                                <h4 className="text-white mb-0 fw-semibold">Build your web App/SaaS with Velzon dashboard</h4>
                            </div>
                        </Col>
                        <Col className="col-sm-auto">
                            <div>
                                <Link to="/1.envato.market/velzon-admin" target="_blank" className="btn bg-gradient btn-danger"><i className="ri-shopping-cart-2-line align-middle me-1"></i> Buy Now</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
        </React.Fragment>
    );
};

export default Features;