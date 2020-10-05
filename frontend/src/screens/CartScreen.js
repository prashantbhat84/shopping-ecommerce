import React from 'react'

const CartScreen = (props) => {
    const id = props.match.params.id;
    const search = props.location.search
    console.log(props);
    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen
