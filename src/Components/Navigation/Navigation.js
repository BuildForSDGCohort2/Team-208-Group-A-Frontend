import React, { useState } from 'react'
import './Navigation.css'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Typography, TextField, Link } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            color: "white",
            borderColor: "white !important"
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '&:hover .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:hover': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#BC8430',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#BC8430',
            },
        },
    },
}));

function Navigation() {
    const classes = useStyles();

    const [search, setSearch] = useState();

    return (
        <Container fluid className="navigation">
            <Row>
                <Col md={3} className="section-1">
                    <Row>
                        <Col md={3}>
                            <div className="eclipse-1">
                                <Typography variant="h3" className="abrev">K</Typography>
                                <div className="eclipse-2"></div>
                                <div className="eclipse-3"></div>
                            </div>
                        </Col>
                        <Col md={9}>
                            <Typography variant="h5" className="companyName">KARANGA</Typography>
                            <Typography className="products">FOOD & GROCERY</Typography>
                        </Col>
                    </Row>
                </Col>

                <Col md={5} className="section-2">
                    <Row>
                        <Col md={9}>
                            <TextField
                                className={classes.root}
                                variant="outlined"
                                margin='normal'
                                fullWidth
                                id='search'
                                label='Search'
                                name='search'
                                type='text'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Col>
                        <Col md={3}>
                            <Button className="searchBtn">SEARCH</Button>
                        </Col>
                    </Row>

                </Col>

                <Col md={3} className="section-3">
                    <Row>
                        <Col md={6} className="divider">
                            <Typography className="signInBtn"><AccountCircleIcon /> Sign In/ Sign Up</Typography>
                        </Col>
                        <Col md={6}>
                            <Typography className="myCart"><ShoppingCartIcon /> <span className="ml-2">My Cart</span></Typography>
                            <div className="eclipse-4">
                                <Typography className="number">0</Typography>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}

export default Navigation
