import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Header from "../components/Header";
import { FaBoxOpen } from "react-icons/fa";

const EditProduct = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState(5);

    const [categories, setCategories] = useState([]);

    const fetchProduct = async () => {

        try {

            const response = await axiosInstance.get(`/product/${id}`);

            setName(response.data.name);
            setPrice(response.data.price);
            setDescription(response.data.description);
            setCategory(response.data.category);
            setImage(response.data.image);
            setRating(response.data.rating);

        } catch (error) {

            console.log(error);

        }

    };

    const fetchCategory = async () => {

        try {

            const response = await axiosInstance.get("/category");

            setCategories(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchProduct();
        fetchCategory();

    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            const data = {
                name,
                price,
                description,
                category,
                image,
                rating
            };

            await axiosInstance.put(
                `/product/${id}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("Product Updated Successfully");

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
                className="container-fluid py-4"
                style={{
                    background: "#f1f3f6",
                    minHeight: "100vh"
                }}
            >

                <div className="row justify-content-center">

                    <div className="col-lg-7 col-md-9">

                        <div
                            className="card border-0"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "0 15px 40px rgba(0,0,0,.12)"
                            }}
                        >

                            <div className="card-body p-4">                                <div className="text-center mb-4">

                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg,#2874F0,#4F9BFF)"
                                    }}
                                >

                                    <FaBoxOpen
                                        size={32}
                                        color="white"
                                    />

                                </div>

                                <h2
                                    className="fw-bold mb-2"
                                    style={{
                                        color: "#2874F0"
                                    }}
                                >
                                    Edit Product
                                </h2>

                                <p className="text-muted">
                                    Update your product details
                                </p>

                            </div>

                                <form onSubmit={handleSubmit}>

                                    <div className="row">

                                        <div className="col-md-6 mb-3">

                                            <label className="form-label fw-semibold">
                                                Product Name
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control py-2"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />

                                        </div>

                                        <div className="col-md-3 mb-3">

                                            <label className="form-label fw-semibold">
                                                Price
                                            </label>

                                            <input
                                                type="number"
                                                className="form-control py-2"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                                required
                                            />

                                        </div>

                                        <div className="col-md-3 mb-3">

                                            <label className="form-label fw-semibold">
                                                Rating
                                            </label>

                                            <input
                                                type="number"
                                                className="form-control py-2"
                                                min="1"
                                                max="5"
                                                step="0.1"
                                                value={rating}
                                                onChange={(e) => setRating(e.target.value)}
                                                required
                                            />

                                        </div>

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label fw-semibold">
                                            Description
                                        </label>

                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                        ></textarea>

                                    </div>

                                    <div className="row">

                                        <div className="col-md-6 mb-3">

                                            <label className="form-label fw-semibold">
                                                Category
                                            </label>

                                            <select
                                                className="form-select py-2"
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

                                        </div>                                        <div className="col-md-6 mb-3">

                                            <label className="form-label fw-semibold">
                                                Image URL
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control py-2"
                                                placeholder="Enter Product Image URL"
                                                value={image}
                                                onChange={(e) => setImage(e.target.value)}
                                                required
                                            />

                                        </div>

                                    </div>

                                    {
                                        image && (

                                            <div className="text-center mb-4">

                                                <img
                                                    src={image}
                                                    alt="Preview"
                                                    className="img-fluid border rounded shadow-sm"
                                                    style={{
                                                        maxHeight: "220px",
                                                        objectFit: "contain",
                                                        borderRadius: "12px"
                                                    }}
                                                    onError={(e) => {
                                                        e.target.style.display = "none";
                                                    }}
                                                />

                                            </div>

                                        )
                                    }

                                    <button
                                        type="submit"
                                        className="btn w-100 py-2 fw-bold text-white"
                                        style={{
                                            background: "#FB641B",
                                            border: "none",
                                            borderRadius: "10px",
                                            fontSize: "17px"
                                        }}
                                    >
                                        Update Product
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

export default EditProduct;