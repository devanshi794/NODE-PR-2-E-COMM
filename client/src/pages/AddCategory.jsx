import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Header from "../components/Header";

const AddCategory = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            const data = {
                name
            };

            const response = await axiosInstance.post(
                "/category",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert(response.data.message || "Category Added Successfully");

            navigate("/view-category");

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

                <div className="row justify-content-center">

                    <div className="col-lg-5 col-md-6">

                        <div
                            className="card border-0 shadow-lg"
                            style={{
                                borderRadius: "20px"
                            }}
                        >

                            <div className="card-body p-5">

                                <h2
                                    className="text-center fw-bold"
                                    style={{
                                        color: "#2874F0"
                                    }}
                                >
                                    Add Category
                                </h2>

                                <p className="text-center text-muted mb-5">
                                    Create a new category for your products
                                </p>

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-4">

                                        <label className="form-label fw-semibold">
                                            Category Name
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control py-3"
                                            placeholder="Enter Category Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />

                                    </div>                                    <button
                                        type="submit"
                                        className="btn w-100 text-white fw-bold py-3"
                                        style={{
                                            background: "#FB641B",
                                            border: "none",
                                            borderRadius: "10px",
                                            fontSize: "18px"
                                        }}
                                    >
                                        Add Category
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

export default AddCategory;