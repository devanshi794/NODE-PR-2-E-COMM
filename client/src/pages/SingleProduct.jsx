import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Header from "../components/Header";
import UserContext from "../context/user/UserContext";

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

            <div className="container mt-5">

                <div className="row">

                    <div className="col-md-5">

                        <img
                            src={product.image}
                            className="img-fluid rounded shadow"
                            alt={product.name}
                            style={{
                                width: "100%",
                                height: "400px",
                                objectFit: "cover"
                            }}
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/400";
                            }}
                        />

                    </div>

                    <div className="col-md-7">

                        <h2>
                            {product.name}
                        </h2>

                        <h3 className="text-success mt-3">
                            ₹ {product.price}
                        </h3>

                        <p className="mt-3">
                            {product.description}
                        </p>

                        <p>
                            <strong>Category :</strong>{" "}
                            {product.category?.name}
                        </p>

                        <button
                            className="btn btn-warning me-3"
                            onClick={() => addToCart(product)}
                        >
                            Add To Cart
                        </button>

                        <button
                            className="btn btn-success"
                        >
                            Buy Now
                        </button>

                    </div>

                </div>

            </div>

        </>

    );

};

export default SingleProduct;