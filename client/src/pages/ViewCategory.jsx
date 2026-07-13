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

            <div className="container mt-5">

                <h2 className="text-center mb-4">
                    View Category
                </h2>

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>

                            <th>No.</th>

                            <th>Category Name</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>                        {

                        categories.length > 0 ? (

                            categories.map((item, index) => (

                                <tr key={item._id}>

                                    <td>{index + 1}</td>

                                    <td>{item.name}</td>

                                    <td>

                                        <button
                                            className="btn btn-danger btn-sm"
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
                                    className="text-center"
                                >
                                    No Category Found
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

export default ViewCategory;