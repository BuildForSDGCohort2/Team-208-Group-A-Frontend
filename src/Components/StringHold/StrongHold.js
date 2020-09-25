import React from 'react'
import './SrongHold.css'
import { Container, Row, Col } from 'react-bootstrap'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { Typography } from '@material-ui/core';

function StrongHold() {
    return (
        <Container fluid className="strongHolds">
            <Container className="topThree">
                <Row>
                    <Col md={4}>
                        <Row>
                            <Col md={3}>
                                <div className="eclipse1">
                                    <LocalShippingIcon className="icon" />
                                </div>
                            </Col>

                            <Col md={6}>
                                <Typography className="desc">Free & Next Day Delivery</Typography>
                            </Col>
                        </Row>

                    </Col>

                    <Col md={4}>
                        <Row>
                            <Col md={3}>
                                <div className="eclipse1">
                                    <ShoppingBasketIcon className="icon" />
                                </div>
                            </Col>

                            <Col md={6}>
                                <Typography className="desc">100% Satisfaction Guarantee</Typography>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={4}>
                        <Row>
                            <Col md={3}>
                                <div className="eclipse1">
                                    <LocalOfferIcon className="icon" />
                                </div>
                            </Col>

                            <Col md={6}>
                                <Typography className="desc">Great Daily Deals Discounts</Typography>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </Container>
    )
}

export default StrongHold
