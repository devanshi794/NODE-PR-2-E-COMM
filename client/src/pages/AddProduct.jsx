import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Header from "../components/Header";

const AddProduct = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState(5);

    const [categories, setCategories] = useState([]);

    const fetchCategory = async () => {

        try {

            const response = await axiosInstance.get("/category");

            setCategories(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchCategory();

    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = {
                name,
                price,
                description,
                image,
                category,
                rating
            };

            const token = localStorage.getItem("token");

            const response = await axiosInstance.post(
                "/product",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert(response.data.message || "Product Added Successfully");

            navigate("/view-products");

        } catch (error) {

            console.log(error);

            alert(error.response?.data?.message || "Something went wrong");

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

                <div className="row justify-content-center">

                    <div className="col-lg-7 col-md-9">

                        <div
                            className="card border-0 shadow-lg"
                            style={{
                                borderRadius: "20px"
                            }}
                        >

                            <div className="card-body p-5">

                                <h2
                                    className="text-center fw-bold mb-2"
                                    style={{
                                        color: "#2874F0"
                                    }}
                                >
                                    Add New Product
                                </h2>

                                <p className="text-center text-muted mb-5">
                                    Fill all product details below
                                </p>

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-4">

                                        <label className="form-label fw-semibold">
                                            Product Name
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control py-3"
                                            placeholder="Enter Product Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />

                                    </div>

                                    <div className="row">

                                        <div className="col-md-6 mb-4">

                                            <label className="form-label fw-semibold">
                                                Price
                                            </label>

                                            <input
                                                type="number"
                                                className="form-control py-3"
                                                placeholder="Enter Price"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                                required
                                            />

                                        </div>

                                        <div className="col-md-6 mb-4">

                                            <label className="form-label fw-semibold">
                                                Rating
                                            </label>

                                            <input
                                                type="number"
                                                className="form-control py-3"
                                                min="1"
                                                max="5"
                                                step="0.1"
                                                value={rating}
                                                onChange={(e) => setRating(e.target.value)}
                                                required
                                            />

                                        </div>

                                    </div>                                    <div className="mb-4">

                                        <label className="form-label fw-semibold">
                                            Description
                                        </label>

                                        <textarea
                                            className="form-control py-3"
                                            rows="4"
                                            placeholder="Enter Product Description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                        ></textarea>

                                    </div>

                                    <div className="mb-4">

                                        <label className="form-label fw-semibold">
                                            Image URL
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control py-3"
                                            placeholder="https://example.com/image.jpg"
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)}
                                            required
                                        />

                                    </div>

                                    <div className="mb-5">

                                        <label className="form-label fw-semibold">
                                            Category
                                        </label>

                                        <select
                                            className="form-select py-3"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            required
                                        >

                                            <option value="">
                                                Select Category
                                            </option>

                                            {
                                                categories.map((item) => (

                                                    <option
                                                        key={item._id}
                                                        value={item._id}
                                                    >
                                                        {item.name}
                                                    </option>

                                                ))
                                            }

                                        </select>

                                    </div>

                                    <button
                                        type="submit"
                                        className="btn w-100 py-3 fw-bold text-white"
                                        style={{
                                            background: "#FB641B",
                                            border: "none",
                                            borderRadius: "10px",
                                            fontSize: "18px",
                                            transition: "0.3s"
                                        }}
                                    >
                                        Add Product
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

};

export default AddProduct;