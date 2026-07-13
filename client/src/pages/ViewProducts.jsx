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

            <div className="container mt-5">

                <h2 className="mb-4 text-center">
                    View Products
                </h2>

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>

                            <th>No.</th>

                            <th>Name</th>

                            <th>Price</th>

                            <th>Category</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>
                        {

                            products.length > 0 ? (

                                products.map((product, index) => (

                                    <tr key={product._id}>

                                        <td>{index + 1}</td>

                                        <td>{product.name}</td>

                                        <td>₹ {product.price}</td>

                                        <td>{product.category?.name}</td>

                                        <td>

                                            <Link
                                                to={`/edit-product/${product._id}`}
                                                className="btn btn-success btn-sm me-2"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                className="btn btn-danger btn-sm"
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
                                        className="text-center"
                                    >
                                        No Products Found
                                    </td>

                                </tr>

                            )

                        }

                    </tbody>

                </table>

            </div>

        </>

    );

};

export default ViewProduct;
