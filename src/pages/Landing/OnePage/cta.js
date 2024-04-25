import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const Cta = () => {
    return (
        <React.Fragment>
            <section className="py-5 bg-success position-relative">
                <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
                <Container>
                    <Row className="align-items-center justify-content-center text-center gy-5">
                        <Col className="col-12">
                            <div>
                                <h4 className="text-white mb-0 fw-semibold">Get Started Today</h4>
                                <p className="text-white text-center mt-4"> 
                                    Don't wait until it's too late to safeguard your retail business. Take control of your
                                    customer/member retention strategy with Lucidity. Sign up for a demo today and see how
                                    Lucidity can transform your business.
                                </p>
                            </div>
                        </Col>
                        <Col className="col-12">
                            <div className='d-flex justify-content-center'>
                                <div className='me-2'>
                                    <Link to="//1.envato.market/velzon-admin" target="_blank" rel="noreferrer" className="btn bg-gradient btn-dark"><i className="ri-login-circle-line align-middle me-1"></i> Sign In</Link>
                                </div>
                                <div>
                                    <Link to="//1.envato.market/velzon-admin" target="_blank" rel="noreferrer" className="btn bg-gradient btn-dark"><i className="ri-upload-line align-middle me-1"></i> Sign Up</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};
export default Cta;