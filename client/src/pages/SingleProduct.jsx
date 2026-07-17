import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Header from "../components/Header";
import UserContext from "../context/user/UserContext";
import { FaStar } from "react-icons/fa";

const SingleProduct = () => {

    const { id } = useParams();

    const { addToCart } = useContext(UserContext);

    const [product, setProduct] = useState({});

    const fetchProduct = async () => {

        try {

            const response = await axiosInstance.get(`/product/${id}`);

            setProduct(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchProduct();

    }, []);

    return (

        <>

            <Header />

            <div className="container py-5">

                <div
                    className="card border-0"
                    style={{
                        borderRadius: "18px",
                        boxShadow: "0 8px 25px rgba(0,0,0,.08)"
                    }}
                >

                    <div className="card-body p-4">

                        <div className="row align-items-center">

                            {/* Product Image */}

                            <div className="col-lg-5 text-center">

                                <div
                                    style={{
                                        position: "relative",
                                        background: "#fff",
                                        borderRadius: "15px",
                                        padding: "15px"
                                    }}
                                >

                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "15px",
                                            left: "15px",
                                            background: "#16A34A",
                                            color: "#fff",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            fontSize: "14px",
                                            fontWeight: "600"
                                        }}
                                    >
                                        {product.rating ?? 4.5}
                                        <FaStar
                                            className="ms-1"
                                            size={12}
                                        />
                                    </div>

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="img-fluid"
                                        style={{
                                            width: "100%",
                                            height: "380px",
                                            objectFit: "contain"
                                        }}
                                        onError={(e) => {
                                            e.target.src = "https://via.placeholder.com/400";
                                        }}
                                    />

                                </div>

                            </div>

                            {/* Product Details */}

                            <div className="col-lg-7">

                                <h2 className="fw-bold mb-3">
                                    {product.name}
                                </h2>

                                <h2
                                    className="fw-bold mb-3"
                                    style={{ color: "#212121" }}
                                >
                                    ₹ {product.price}
                                </h2>

                                <span
                                    className="badge bg-primary mb-3"
                                    style={{
                                        fontSize: "14px",
                                        padding: "8px 12px"
                                    }}
                                >
                                    {product.category?.name}
                                </span>

                                <p
                                    className="text-muted"
                                    style={{
                                        fontSize: "16px",
                                        lineHeight: "28px"
                                    }}
                                >
                                    {product.description}
                                </p>                                <div className="d-flex gap-3 mt-4">

                                    <button
                                        className="btn btn-warning fw-semibold"
                                        style={{
                                            padding: "12px 35px",
                                            fontSize: "17px",
                                            borderRadius: "10px"
                                        }}
                                        onClick={() => addToCart(product)}
                                    >
                                        Add To Cart
                                    </button>

                                    <button
                                        className="btn btn-success fw-semibold"
                                        style={{
                                            padding: "12px 35px",
                                            fontSize: "17px",
                                            borderRadius: "10px"
                                        }}
                                    >
                                        Buy Now
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

};

export default SingleProduct;