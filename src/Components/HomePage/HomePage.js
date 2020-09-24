import React from 'react'
import './HomePage.css'
import Navigation from '../Navigation/Navigation'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Typography } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

function createData(index, image, discount, productName, currentPrice, pastPrice) {
    return { index, image, discount, productName, currentPrice, pastPrice };
}

const products = [
    createData(1, 'https://res.cloudinary.com/emacon-production/image/upload/v1600949726/Karanga/pexels-magda-ehlers-1300975_fayq69.jpg', 0, 'Orange Fruits', 150, 300),
    createData(2, 'https://res.cloudinary.com/emacon-production/image/upload/v1600949726/Karanga/pexels-magda-ehlers-1300975_fayq69.jpg', 0, 'Orange Fruits', 150, 300),
    createData(3, 'https://res.cloudinary.com/emacon-production/image/upload/v1600949726/Karanga/pexels-magda-ehlers-1300975_fayq69.jpg', 0, 'Orange Fruits', 150, 300),
    createData(4, 'https://res.cloudinary.com/emacon-production/image/upload/v1600949726/Karanga/pexels-magda-ehlers-1300975_fayq69.jpg', 0, 'Orange Fruits', 150, 300),
    createData(5, 'https://res.cloudinary.com/emacon-production/image/upload/v1600949726/Karanga/pexels-magda-ehlers-1300975_fayq69.jpg', 0, 'Orange Fruits', 150, 300),
    createData(6, 'https://res.cloudinary.com/emacon-production/image/upload/v1600949726/Karanga/pexels-magda-ehlers-1300975_fayq69.jpg', 0, 'Orange Fruits', 150, 300),
    createData(7, 'https://res.cloudinary.com/emacon-production/image/upload/v1600949726/Karanga/pexels-magda-ehlers-1300975_fayq69.jpg', 0, 'Orange Fruits', 150, 300),
    createData(8, 'https://res.cloudinary.com/emacon-production/image/upload/v1600949726/Karanga/pexels-magda-ehlers-1300975_fayq69.jpg', 0, 'Orange Fruits', 150, 300)
];

function HomePage() {
    return (
        <div className="homepage">
            <div className="section-1">
                <Navigation />
            </div>

            <Container className="section-2">
                <Row>
                    <Col md={2}>
                        <div className="eclipse-1">
                            <img src="https://res.cloudinary.com/emacon-production/image/upload/v1600949717/Karanga/pexels-angele-j-128402_n1edzy.jpg" alt=""/>
                        </div>
                        <Typography className="categoryName">Grocery</Typography>
                    </Col>

                    <Col md={2}>
                        <div className="eclipse-2">
                            <img src="https://res.cloudinary.com/emacon-production/image/upload/v1600949727/Karanga/pexels-valeriia-miller-3020919_lhjdhc.jpg" alt=""/>
                        </div>
                        <Typography className="categoryName">Beverages</Typography>
                    </Col>

                    <Col md={2}>
                        <div className="eclipse-3">
                            <img src="https://res.cloudinary.com/emacon-production/image/upload/v1600949727/Karanga/pexels-pixabay-289368_dvxas9.jpg" alt=""/>
                        </div>
                        <Typography className="categoryName">Breakfst/ Dairy</Typography>
                    </Col>

                    <Col md={2}>
                        <div className="eclipse-4">
                            <img src="https://res.cloudinary.com/emacon-production/image/upload/v1600949725/Karanga/pexels-leigh-patrick-298217_onbbmh.jpg" alt=""/>
                        </div>
                        <Typography className="categoryName">Snacks</Typography>
                    </Col>

                    <Col md={2}>
                        <div className="eclipse-5">
                            <img src="https://res.cloudinary.com/emacon-production/image/upload/v1600949729/Karanga/pexels-t-n-g-u-y-e-n-_-2664216_i8psvr.jpg" alt=""/>
                        </div>
                        <Typography className="categoryName">Noodles/ Instant foods</Typography>
                    </Col>

                    <Col md={2}>
                        <div className="eclipse-6">
                            <img src="https://res.cloudinary.com/emacon-production/image/upload/v1600949726/Karanga/pexels-magda-ehlers-1300975_fayq69.jpg" alt=""/>
                        </div>
                        <Typography className="categoryName">Fruits</Typography>
                    </Col>
                </Row>

            </Container>

            <div className="section-3">
                <Container>
                    <Row>
                        <Col md={6}>
                            <Typography className="productName">Avocado</Typography>
                            <Typography className="productDesc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type.
                            </Typography>
                            <Typography className="productPrice">KSH 20.00</Typography>
                            <Button className="addToCartBtn"><ShoppingCartIcon />Add to cart</Button>
                        </Col>

                        <Col md={6}>
                            <div className="productImage">
                                <img src="img/avocado.png" alt="product img" />
                            </div>
                            <div className="eclipse"></div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container fluid className="section-4">
                <Typography className="forYou">For You</Typography>
                <Typography className="categoryName">Grocery & Staples</Typography>

                <Row>
                    {(products).map((product) => (
                        <Card className="productCard" key={product.index}>
                            <div className="productImage">
                                <img src={product.image} alt="product img" />
                            </div>

                            <div className="discount">
                                <Typography className="mt-2">{product.discount}% OFF</Typography>
                            </div>

                            <div className="px-3">
                                <div>
                                    <Typography className="productName">{product.productName}</Typography>
                                </div>

                                <div className="productAvailability">
                                    <TurnedInNotIcon /> Available in - 1kg
                    </div>

                                <div>
                                    <Row>
                                        <Col md={6}>
                                            <Typography className="currentPrice">KSH {product.currentPrice}.00</Typography>
                                        </Col>

                                        <Col md={6}>
                                            <Typography className="pastPrice"><strike>KSH {product.pastPrice}.00</strike></Typography>
                                        </Col>
                                    </Row>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
                                <Button className="addToCartBtn"><ShoppingCartIcon /> Add to Cart</Button>
                            </div>
                        </Card>
                    ))}
                </Row>


            </Container>
        </div>
    )
}

export default HomePage
