import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <>
            <h1> Latest Products</h1>
            <Row>
                {products.map(product => <Col key={product._id}>
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Container>

                            <Product product={product} />
                        </Container>
                    </Col>
                </Col>)}
            </Row>
        </>
    )
}

export default HomeScreen