import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import UserContext from "../context/user/UserContext";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

const Cart = () => {

    const { cart, removeFromCart } = useContext(UserContext);

    const totalPrice = cart.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);

    return (

        <>

            <Header />

            <div
                className="container py-5"
                style={{ minHeight: "85vh" }}
            >

                <h2
                    className="fw-bold mb-4"
                    style={{ color: "#2874F0" }}
                >
                    <FaShoppingCart className="me-2" />
                    My Cart
                </h2>

                {

                    cart.length > 0 ? (

                        <div className="row">

                            {/* Left Side */}

                            <div className="col-lg-8">

                                {

                                    cart.map((item) => (

                                        <div
                                            className="card border-0 mb-4"
                                            key={item._id}
                                            style={{
                                                borderRadius: "15px",
                                                boxShadow: "0 3px 12px rgba(0,0,0,.08)"
                                            }}
                                        >

                                            <div className="card-body">

                                                <div className="row align-items-center">

                                                    {/* Image */}

                                                    <div className="col-md-3 text-center">

                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="img-fluid"
                                                            style={{
                                                                height: "140px",
                                                                width: "140px",
                                                                objectFit: "contain"
                                                            }}
                                                            onError={(e) => {
                                                                e.target.src =
                                                                    "https://via.placeholder.com/150";
                                                            }}
                                                        />

                                                    </div>

                                                    {/* Details */}

                                                    <div className="col-md-6">

                                                        <h5 className="fw-bold mb-2">
                                                            {item.name}
                                                        </h5>

                                                        <p
                                                            className="text-muted mb-2"
                                                            style={{
                                                                fontSize: "14px"
                                                            }}
                                                        >
                                                            {item.description}
                                                        </p>

                                                        <h4
                                                            className="fw-bold mb-2"
                                                            style={{
                                                                color: "#2874F0"
                                                            }}
                                                        >
                                                            ₹ {item.price}
                                                        </h4>

                                                        <span
                                                            className="badge bg-light text-dark border"
                                                            style={{
                                                                fontSize: "13px"
                                                            }}
                                                        >
                                                            {item.category?.name}
                                                        </span>

                                                    </div>

                                                    {/* Remove Button */}

                                                    <div className="col-md-3 text-center">

                                                        <button
                                                            className="btn btn-danger px-4"
                                                            onClick={() =>
                                                                removeFromCart(item._id)
                                                            }
                                                        >
                                                            <FaTrashAlt className="me-2" />
                                                            Remove
                                                        </button>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    ))

                                }

                            </div>                            {/* Price Details */}

                            <div className="col-lg-4">

                                <div
                                    className="card border-0"
                                    style={{
                                        borderRadius: "15px",
                                        boxShadow: "0 3px 12px rgba(0,0,0,.08)",
                                        position: "sticky",
                                        top: "90px"
                                    }}
                                >

                                    <div className="card-body p-4">

                                        <h4
                                            className="fw-bold mb-4"
                                            style={{ color: "#2874F0" }}
                                        >
                                            Price Details
                                        </h4>

                                        <div className="d-flex justify-content-between mb-3">

                                            <span>Total Items</span>

                                            <strong>{cart.length}</strong>

                                        </div>

                                        <div className="d-flex justify-content-between mb-3">

                                            <span>Total Price</span>

                                            <strong
                                                style={{
                                                    color: "#16a34a",
                                                    fontSize: "20px"
                                                }}
                                            >
                                                ₹ {totalPrice}
                                            </strong>

                                        </div>

                                        <hr />

                                        <button
                                            className="btn btn-warning w-100 fw-bold"
                                            style={{
                                                padding: "12px",
                                                fontSize: "17px",
                                                borderRadius: "10px"
                                            }}
                                        >
                                            Place Order
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ) : (

                        <div
                            className="text-center py-5"
                            style={{
                                background: "#fff",
                                borderRadius: "15px",
                                boxShadow: "0 3px 12px rgba(0,0,0,.08)"
                            }}
                        >

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                                alt="Empty Cart"
                                style={{
                                    width: "180px",
                                    marginBottom: "20px"
                                }}
                            />

                            <h3 className="fw-bold">
                                Your Cart is Empty
                            </h3>

                            <p className="text-muted">
                                Looks like you haven't added anything yet.
                            </p>

                            <Link
                                to="/"
                                className="btn btn-primary px-4 py-2 mt-2"
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