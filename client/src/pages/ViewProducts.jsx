import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Header from "../components/Header";

const ViewProduct = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {

        try {

            const response = await axiosInstance.get("/product");

            setProducts(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchProducts();

    }, []);

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm("Are you sure?");

        if (!confirmDelete) {

            return;

        }

        try {

            const token = localStorage.getItem("token");

            await axiosInstance.delete(`/product/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert("Product Deleted Successfully");

            fetchProducts();

        } catch (error) {

            console.log(error);

            alert(error.response?.data?.message);

        }

    };

    return (

        <>

            <Header />

            <div
                className="container-fluid py-5"
                style={{
                    background: "#f1f3f6",
                    minHeight: "100vh"
                }}
            >

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-lg-11">

                            <div
                                className="card border-0 shadow-lg"
                                style={{
                                    borderRadius: "18px"
                                }}
                            >

                                <div className="card-body p-4">

                                    <h2
                                        className="text-center fw-bold mb-2"
                                        style={{
                                            color: "#2874F0"
                                        }}
                                    >
                                        View Products
                                    </h2>

                                    <p className="text-center text-muted mb-4">
                                        Manage all your products
                                    </p>

                                    <div className="table-responsive">

                                        <table className="table table-hover align-middle">

                                            <thead
                                                style={{
                                                    background: "#2874F0",
                                                    color: "#fff"
                                                }}
                                            >

                                                <tr>

                                                    <th className="py-3">No.</th>

                                                    <th>Name</th>

                                                    <th>Price</th>

                                                    <th>Category</th>

                                                    <th className="text-center">
                                                        Action
                                                    </th>

                                                </tr>

                                            </thead>

                                            <tbody>

                                                {

                                                    products.length > 0 ? (

                                                        products.map((product, index) => (

                                                            <tr key={product._id}>

                                                                <td>
                                                                    {index + 1}
                                                                </td>

                                                                <td className="fw-semibold">
                                                                    {product.name}
                                                                </td>

                                                                <td className="text-success fw-bold">
                                                                    ₹ {product.price}
                                                                </td>

                                                                <td>
                                                                    {product.category?.name}
                                                                </td>

                                                                <td className="text-center">

                                                                    <Link
                                                                        to={`/edit-product/${product._id}`}
                                                                        className="btn btn-success me-2 px-3"
                                                                        style={{
                                                                            borderRadius: "8px"
                                                                        }}
                                                                    >
                                                                        Edit
                                                                    </Link>

                                                                    <button
                                                                        className="btn btn-danger px-3"
                                                                        style={{
                                                                            borderRadius: "8px"
                                                                        }}
                                                                        onClick={() => handleDelete(product._id)}
                                                                    >
                                                                        Delete
                                                                    </button>

                                                                </td>

                                                            </tr>

                                                        ))

                                                    ) : (

                                                        <tr>

                                                            <td
                                                                colSpan="5"
                                                                className="text-center py-5"
                                                            >
                                                                No Products Found
                                                            </td>

                                                        </tr>

                                                    )

                                                }

                                            </tbody>

                                        </table>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

};

export default ViewProduct;