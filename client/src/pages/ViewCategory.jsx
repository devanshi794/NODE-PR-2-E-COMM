import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import Header from "../components/Header";

const ViewCategory = () => {

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

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm("Are you sure?");

        if (!confirmDelete) {

            return;

        }

        try {

            const token = localStorage.getItem("token");

            await axiosInstance.delete(`/category/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert("Category Deleted Successfully");

            fetchCategory();

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
                                        className="text-center fw-bold"
                                        style={{
                                            color: "#2874F0"
                                        }}
                                    >
                                        View Categories
                                    </h2>

                                    <p className="text-center text-muted mb-4">
                                        Manage all your product categories
                                    </p>

                                    <div className="table-responsive">

                                        <table className="table table-hover align-middle">

                                            <thead>

                                                <tr>

                                                    <th style={{ width: "10%" }}>
                                                        No.
                                                    </th>

                                                    <th
                                                        className="text-center"
                                                        style={{ width: "60%" }}
                                                    >
                                                        Category Name
                                                    </th>

                                                    <th
                                                        className="text-center pe-5"
                                                        style={{ width: "10%" }}
                                                    >
                                                        Action
                                                    </th>

                                                </tr>

                                            </thead>

                                            <tbody>

                                                {

                                                    categories.length > 0 ? (

                                                        categories.map((item, index) => (

                                                            <tr key={item._id}>

                                                                <td>
                                                                    {index + 1}
                                                                </td>

                                                                <td className="text-center fw-semibold">
                                                                    {item.name}
                                                                </td>

                                                                <td className="text-end pe-5">

                                                                    <button
                                                                        className="btn btn-danger px-4"
                                                                        style={{
                                                                            borderRadius: "8px"
                                                                        }}
                                                                        onClick={() => handleDelete(item._id)}
                                                                    >
                                                                        Delete
                                                                    </button>

                                                                </td>

                                                            </tr>

                                                        ))

                                                    ) : (

                                                        <tr>

                                                            <td
                                                                colSpan="3"
                                                                className="text-center py-5"
                                                            >
                                                                No Category Found
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

export default ViewCategory;