import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import {
    FaPlusSquare,
    FaBoxOpen,
    FaFolderPlus,
    FaFolderOpen
} from "react-icons/fa";

const Dashboard = () => {

    return (

        <>

            <Header />

            <div
                className="container py-5"
                style={{ minHeight: "90vh" }}
            >

                <div className="text-center mb-5">

                    <h2
                        className="fw-bold"
                        style={{
                            color: "#1f2937",
                            letterSpacing: "1px"
                        }}
                    >
                        Admin Dashboard
                    </h2>

                    <p className="text-muted">
                        Manage your products and categories
                    </p>

                </div>

                <div className="row g-4">

                    {/* Add Product */}

                    <div className="col-lg-3 col-md-6">

                        <div
                            className="card border-0 h-100 text-center"
                            style={{
                                borderRadius: "18px",
                                boxShadow: "0 8px 25px rgba(0,0,0,.08)",
                                transition: ".3s"
                            }}
                        >

                            <div className="card-body py-4">

                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        borderRadius: "50%",
                                        background: "#E8F1FF"
                                    }}
                                >
                                    <FaPlusSquare
                                        size={32}
                                        color="#2874F0"
                                    />
                                </div>

                                <h5 className="fw-bold">
                                    Add Product
                                </h5>

                                <p
                                    className="text-muted"
                                    style={{ fontSize: "14px" }}
                                >
                                    Add new products to your store.
                                </p>

                                <Link
                                    to="/add-product"
                                    className="btn btn-primary w-100 rounded-pill"
                                >
                                    Open
                                </Link>

                            </div>

                        </div>

                    </div>

                    {/* View Products */}

                    <div className="col-lg-3 col-md-6">

                        <div
                            className="card border-0 h-100 text-center"
                            style={{
                                borderRadius: "18px",
                                boxShadow: "0 8px 25px rgba(0,0,0,.08)"
                            }}
                        >

                            <div className="card-body py-4">

                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        borderRadius: "50%",
                                        background: "#EAFBF0"
                                    }}
                                >
                                    <FaBoxOpen
                                        size={32}
                                        color="#16A34A"
                                    />
                                </div>

                                <h5 className="fw-bold">
                                    View Products
                                </h5>

                                <p
                                    className="text-muted"
                                    style={{ fontSize: "14px" }}
                                >
                                    Manage all available products.
                                </p>

                                <Link
                                    to="/view-products"
                                    className="btn btn-success w-100 rounded-pill"
                                >
                                    Open
                                </Link>

                            </div>

                        </div>

                    </div>

                    {/* Add Category */}

                    <div className="col-lg-3 col-md-6">

                        <div
                            className="card border-0 h-100 text-center"
                            style={{
                                borderRadius: "18px",
                                boxShadow: "0 8px 25px rgba(0,0,0,.08)"
                            }}
                        >

                            <div className="card-body py-4">

                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        borderRadius: "50%",
                                        background: "#FFF8E6"
                                    }}
                                >
                                    <FaFolderPlus
                                        size={32}
                                        color="#F59E0B"
                                    />
                                </div>

                                <h5 className="fw-bold">
                                    Add Category
                                </h5>

                                <p
                                    className="text-muted"
                                    style={{ fontSize: "14px" }}
                                >
                                    Create new product categories.
                                </p>

                                <Link
                                    to="/add-category"
                                    className="btn btn-warning w-100 rounded-pill"
                                >
                                    Open
                                </Link>

                            </div>

                        </div>

                    </div>

                    {/* View Category */}

                    <div className="col-lg-3 col-md-6">

                        <div
                            className="card border-0 h-100 text-center"
                            style={{
                                borderRadius: "18px",
                                boxShadow: "0 8px 25px rgba(0,0,0,.08)"
                            }}
                        >

                            <div className="card-body py-4">

                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        borderRadius: "50%",
                                        background: "#FFEDED"
                                    }}
                                >
                                    <FaFolderOpen
                                        size={32}
                                        color="#DC2626"
                                    />
                                </div>

                                <h5 className="fw-bold">
                                    View Category
                                </h5>

                                <p
                                    className="text-muted"
                                    style={{ fontSize: "14px" }}
                                >
                                    View and manage all categories.
                                </p>

                                <Link
                                    to="/view-category"
                                    className="btn btn-danger w-100 rounded-pill"
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