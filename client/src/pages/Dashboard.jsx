import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Dashboard = () => {

    return (

        <>

            <Header />

            <div className="container mt-5">

                <h2 className="text-center mb-4">
                    Admin Dashboard
                </h2>

                <div className="row">

                    <div className="col-md-3 mb-4">

                        <div className="card shadow text-center">

                            <div className="card-body">

                                <h4>Add Product</h4>

                                <Link
                                    to="/add-product"
                                    className="btn btn-primary mt-3"
                                >
                                    Open
                                </Link>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card shadow text-center">

                            <div className="card-body">

                                <h4>View Products</h4>

                                <Link
                                    to="/view-products"
                                    className="btn btn-success mt-3"
                                >
                                    Open
                                </Link>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card shadow text-center">

                            <div className="card-body">

                                <h4>Add Category</h4>

                                <Link
                                    to="/add-category"
                                    className="btn btn-warning mt-3"
                                >
                                    Open
                                </Link>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card shadow text-center">

                            <div className="card-body">

                                <h4>View Category</h4>

                                <Link
                                    to="/view-category"
                                    className="btn btn-danger mt-3"
                                >
                                    Open
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

};

export default Dashboard;