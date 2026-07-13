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
                category
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

            <div className="container mt-5">

                <div className="row">
                    <div className="col-md-6">

                        <div className="card shadow">

                            <div className="card-body">

                                <h2 className="text-center mb-4">
                                    Add Product
                                </h2>

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Product Name
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Price
                                        </label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Description
                                        </label>

                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Image URL
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="https://example.com/image.jpg"
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Category
                                        </label>

                                        <select
                                            className="form-select"
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
                                        className="btn btn-primary w-100"
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
