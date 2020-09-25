import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Typography, Link } from '@material-ui/core'
import CallIcon from '@material-ui/icons/Call';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailIcon from '@material-ui/icons/Mail';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md={2} className="contacts">
                    <Row>
                        <Col md="5">
                            <div className="eclipse-1">
                                <Typography variant="h3" className="abrev">K</Typography>
                                <div className="eclipse-2"></div>
                                <div className="eclipse-3"></div>
                            </div>
                        </Col>
                        <Col md="7">
                            <Typography variant="h5" className="companyName">KARANGA</Typography>
                            <Typography className="products">FOOD & GROCERY</Typography>
                        </Col>
                    </Row>
                    <div className="details">
                        <Typography><CallIcon /> +254 21 234567</Typography>
                        <Typography><PhoneAndroidIcon /> +254 71 234567</Typography>
                        <Typography><MailIcon /> info@karanga.com</Typography>
                        <Typography><LanguageIcon /> www.karanga.com</Typography>
                    </div>
                </Col>

                <Col md={2} className="topCities">
                    <Typography className="title">TOP CITIES</Typography>
                    <div className="cities">
                        <Typography>Nairobi</Typography>
                        <Typography>Kisumu</Typography>
                        <Typography>Mombasa</Typography>
                        <Typography>Nyeri</Typography>
                        <Typography>Nanyuki</Typography>
                    </div>

                </Col>

                <Col md={2} className="categories">
                    <Typography className="title">TOP CITIES</Typography>
                    <div className="products">
                        <Typography><Link>Grocery</Link></Typography>
                        <Typography><Link>Beverages</Link></Typography>
                        <Typography><Link>Breakfast/ Dairy</Link></Typography>
                        <Typography><Link>Snacks</Link></Typography>
                        <Typography><Link>Noodles/ Instant Foods</Link></Typography>
                        <Typography><Link>Fruits</Link></Typography>
                    </div>
                </Col>

                <Col md={2} className="aboutUs">
                    <Typography className="title">ABOUT US</Typography>
                    <div className="details">
                        <Typography><Link>Company Information</Link></Typography>
                        <Typography><Link>Store Location</Link></Typography>
                        <Typography><Link>Copyright</Link></Typography>
                    </div>
                </Col>

                <Col md={2} className="socialMedia">
                    <Typography className="title">GET IN TOUCH</Typography>
                    <div className="icons">
                        <span><Link><FacebookIcon/></Link></span>
                        <span><Link><TwitterIcon/></Link></span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
