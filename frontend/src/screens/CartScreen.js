import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../components/Message';
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap';
import { addItemToCart } from '../store/actions/cartAction'

const CartScreen = (props) => {
    const productid = props.match.params.id;

    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    console.log(cartItems.length);

    useEffect(() => {
        if (productid) {
            dispatch(addItemToCart(productid, qty));
        }
    }, [dispatch, productid, qty])
    const removeFromCartHandler = (id) => {
        console.log(id)
    }
    const checkoutHandler = () => {
        props.history.push("/login?=shipping")
    }
    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? <Message>Your Cart is empty <Link to="/">Go Back </Link></Message> : <ListGroup variant="flush">
                    {cartItems.map(item => (
                        <ListGroupItem key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.name} fluid rounded />
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`} >{item.name}</Link>

                                </Col>
                                <Col md={2}>
                                    ${item.price}
                                </Col>
                                <Col md={2}>
                                    <Form.Control as='select' value={item.qty} onChange={(e) => dispatch(addItemToCart(item.product, Number(e.target.value)))}>
                                        {[...Array(item.countInStock).keys()].map(x => (
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        ))}

                                    </Form.Control>
                                </Col>
                                <Col md={2}>
                                    <Button variant="danger" type="button" onClick={() => removeFromCartHandler(item.product)}>
                                        <i className="fas fa-trash" />
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    ))}
                </ListGroup>}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h2>
                                SubTotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                               </h2>
                               ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button type="button" className="btn-block" disabled={cartItems.length === 0}
                                onClick={checkoutHandler}>Proceed To Checkout</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>

        </Row>
    )
}

export default CartScreen
