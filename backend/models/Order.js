

const OrderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
        ref: User
    },
    orderItems: [{
        name: {
            type: String,
            required: true
        },
        qty: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectID,
            required: true,
            ref: Product
        }
    }],
    shippingAddress: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentResult: {
        id: {
            type: String
        },
        status: {
            type: String
        },
        update_time: {
            type: String
        },
        email_address: {
            type: String
        },
    },
    taxprice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingprice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalprice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date

    },
    deliveredAt: {
        type: Date

    }


}, {
    timestamps: true
});
const Order = mongoose.model("Order", OrderSchema);
export default Order;