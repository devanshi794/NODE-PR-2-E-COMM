import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import UserContext from "../context/user/UserContext";

const Cart = () => {

    const { cart, removeFromCart } = useContext(UserContext);

    const totalPrice = cart.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);

    return (
        <>

            <Header />

            <div className="container mt-5">

                <h2 className="mb-4">
                    My Cart
                </h2>

                {
                    cart.length > 0 ? (

                        <div className="row">

                            <div className="col-md-8">

                                {
                                    cart.map((item) => (

                                        <div
                                            className="card shadow mb-3"
                                            key={item._id}
                                        >

                                            <div className="card-body">

                                                <div className="row align-items-center">

                                                    <div className="col-md-3">

                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="img-fluid"
                                                            style={{
                                                                height: "150px",
                                                                width: "150px",
                                                                objectFit: "cover"
                                                            }}
                                                            onError={(e) => {
                                                                e.target.src = "https://via.placeholder.com/150";
                                                            }}
                                                        />

                                                    </div>

                                                    <div className="col-md-6">

                                                        <h5>{item.name}</h5>

                                                        <p>{item.description}</p>

                                                        <h5 className="text-success">
                                                            ₹ {item.price}
                                                        </h5>

                                                        <p>
                                                            <strong>Category :</strong>{" "}
                                                            {item.category?.name}
                                                        </p>

                                                    </div>

                                                    <div className="col-md-3 text-end">

                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() => removeFromCart(item._id)}
                                                        >
                                                            Remove
                                                        </button>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    ))
                                }

                            </div>

                            <div className="col-md-4">

                                <div className="card shadow">

                                    <div className="card-body">

                                        <h4>Price Details</h4>

                                        <hr />

                                        <p className="d-flex justify-content-between">
                                            <span>Total Items</span>
                                            <strong>{cart.length}</strong>
                                        </p>

                                        <p className="d-flex justify-content-between">
                                            <span>Total Price</span>
                                            <strong className="text-success">
                                                ₹ {totalPrice}
                                            </strong>
                                        </p>

                                        <hr />

                                        <button className="btn btn-success w-100">
                                            Place Order
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ) : (

                        <div className="text-center mt-5">

                            <h3>Your Cart is Empty</h3>

                            <p>Please add some products.</p>

                            <Link
                                to="/"
                                className="btn btn-primary mt-3"
                            >
                                Continue Shopping
                            </Link>

                        </div>

                    )

                }

            </div>

        </>

    );

};

export default Cart;