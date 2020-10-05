import React, { useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
// import products from '../products'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listproducts } from '../store/actions/productAction'
import Message from '../components/Message'
import Loader from '../components/Loader'


const HomeScreen = () => {
    const dispatch = useDispatch();
    const productlist = useSelector(state => state.productList)
    const { loading, error, products } = productlist
    useEffect(() => {
        dispatch(listproducts());

    }, [dispatch]);


    return (
        <>
            <h1> Latest Products</h1>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : <Row>
                {products.map(product => <Col key={product._id}>
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Container>

                            <Product product={product} />
                        </Container>
                    </Col>
                </Col>)}
            </Row>}

        </>
    )
}

export default HomeScreen
