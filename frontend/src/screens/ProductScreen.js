import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating'
import { listProductDetail } from '../store/actions/productAction'
import Loading from '../components/Loader';
import Message from '../components/Message'

const ProductScreen = (props) => {
    const [qty, setQty] = useState(0);
    const id = props.match.params.id
    const dispatch = useDispatch();
    const productdetail = useSelector(state => state.productDetails);
    const { loading, product, error } = productdetail;


    useEffect(() => {
        dispatch(listProductDetail(id))
    }, [id, dispatch]);
    const addToCartHandler = () => {
        props.history.push(`/cart/${id}?qty=${qty}`);
    }



    return (
        <>
            <Link className="btn btn-light my-3" to="/">Go Back</Link>
            {loading ? <Loading /> : error ? <Message variant="danger">{error}</Message> : <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} text={`of ${product.numReviews}  reviews`} color="red" />
                        </ListGroupItem>
                        <ListGroupItem>
                            Price:$ {`${product.price}`}
                        </ListGroupItem>
                        <ListGroupItem>
                            Description:{`${product.description}`}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Status</Col>
                                    <Col>
                                        {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            {product.countInStock > 0 && <ListGroupItem>
                                <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                        <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map(x => (
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            ))}

                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroupItem>}
                            <ListGroupItem>
                                <Button className="btn-block" type="button" disabled={product.countInStock === 0} onClick={addToCartHandler}>Add To Cart</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>

                </Col>
            </Row>}

        </>
    )
}

export default ProductScreen
