import React from 'react'
import { Card, } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'



const Product = (props) => {
    const { product } = props;

    return (
        <Card className="my-3 mx-3 p-3 rounded" style={{ width: '13rem' }}>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />

            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div"><strong>{product.name}</strong></Card.Title>

                </Link>
                <Card.Text as="div">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>
                <Card.Text as="h3">${product.price}</Card.Text>
            </Card.Body>

        </Card>

    )
}

export default Product
