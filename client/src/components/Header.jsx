import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/user/UserContext";
import flipkartLogo from "../assets/flipkart-logo.jpeg";

import {
    FaHome,
    FaShoppingCart,
    FaUserCircle,
    FaTachometerAlt,
    FaSearch
} from "react-icons/fa";

const Header = ({ search, setSearch }) => {

    const { isLogin, user, setIsLogin, setUser } = useContext(UserContext);

    const handleLogOut = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("userId");

        setIsLogin(false);

        setUser({});

    };

    return (

        <nav className="navbar navbar-expand-lg bg-white sticky-top">

            <div className="container">

                <Link
                    className="navbar-brand me-4"
                    to="/"
                >

                    <img
                        src={flipkartLogo}
                        alt="Flipkart"
                        style={{
                            height: "40px",
                            width: "auto"
                        }}
                    />

                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >

                    {/* Search */}

                    <form
                        className="mx-lg-5 my-3 my-lg-0"
                        style={{
                            width: "45%"
                        }}
                    >

                        <div className="input-group">

                            <span
                                className="input-group-text bg-light border-0"
                            >

                                <FaSearch color="#2874F0" />

                            </span>

                            <input
                                className="form-control border-0 bg-light"
                                type="text"
                                placeholder="Search Products"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                style={{
                                    height: "45px",
                                    boxShadow: "none"
                                }}
                            />

                        </div>

                    </form>

                    <ul className="navbar-nav ms-auto align-items-center">

                        <li className="nav-item me-3">

                            <Link
                                className="nav-link fw-semibold d-flex align-items-center"
                                to="/"
                                style={{
                                    color: "#2874F0",
                                    fontWeight: "500",
                                    fontSize: "18px"
                                }}
                            >

                                <FaHome
                                    className="me-2"
                                    size={18}
                                />

                                Home

                            </Link>

                        </li>

                        <li className="nav-item me-3">

                            <Link
                                className="nav-link fw-semibold d-flex align-items-center"
                                to="/cart"
                                style={{
                                    color: "#2874F0",
                                    fontWeight: "500",
                                    fontSize: "18px"
                                }}
                            >

                                <FaShoppingCart
                                    className="me-2"
                                    size={18}
                                />

                                Cart

                            </Link>

                        </li>                        {

                            isLogin &&
                            user?.role === "admin" && (

                                <li className="nav-item dropdown me-3">

                                    <a
                                        className="nav-link dropdown-toggle fw-semibold d-flex align-items-center"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        style={{
                                            color: "#2874F0",
                                            fontWeight: "500",
                                            fontSize: "18px"
                                        }}
                                    >

                                        <FaTachometerAlt
                                            className="me-2"
                                            size={18}
                                        />

                                        Dashboard

                                    </a>

                                    <ul className="dropdown-menu">

                                        <li>

                                            <Link
                                                className="dropdown-item"
                                                to="/add-product"
                                                style={{ color: "#2874F0" }}
                                            >
                                                Add Product
                                            </Link>

                                        </li>

                                        <li>

                                            <Link
                                                className="dropdown-item"
                                                to="/view-products"
                                                style={{ color: "#2874F0" }}
                                            >
                                                View Products
                                            </Link>

                                        </li>

                                        <li>

                                            <Link
                                                className="dropdown-item"
                                                to="/add-category"
                                                style={{ color: "#2874F0" }}
                                            >
                                                Add Category
                                            </Link>

                                        </li>

                                        <li>

                                            <Link
                                                className="dropdown-item"
                                                to="/view-category"
                                                style={{ color: "#2874F0" }}
                                            >
                                                View Category
                                            </Link>

                                        </li>

                                    </ul>

                                </li>

                            )

                        }

                        <li className="nav-item dropdown">

                            <a
                                className="nav-link dropdown-toggle fw-semibold d-flex align-items-center"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                style={{
                                    color: "#2874F0",
                                    fontWeight: "500",
                                    fontSize: "18px"
                                }}
                            >

                                <FaUserCircle
                                    className="me-2"
                                    size={18}
                                />

                                {
                                    isLogin
                                        ? user?.name || "User"
                                        : "Account"
                                }

                            </a>

                            <ul className="dropdown-menu dropdown-menu-end">                                {

                                !isLogin ? (

                                    <>

                                        <li>

                                            <Link
                                                className="dropdown-item"
                                                to="/login"
                                                style={{ color: "#2874F0" }}
                                            >
                                                Login
                                            </Link>

                                        </li>

                                        <li>

                                            <Link
                                                className="dropdown-item"
                                                to="/register"
                                                style={{ color: "#2874F0" }}
                                            >
                                                Register
                                            </Link>

                                        </li>

                                    </>

                                ) : (

                                    <>

                                        <li>

                                            <Link
                                                className="dropdown-item"
                                                to="/profile"
                                                style={{ color: "#2874F0" }}
                                            >
                                                Profile
                                            </Link>

                                        </li>

                                        <li>

                                            <button
                                                className="dropdown-item"
                                                onClick={handleLogOut}
                                                style={{
                                                    color: "#2874F0",
                                                    background: "transparent",
                                                    border: "none"
                                                }}
                                            >
                                                Logout
                                            </button>

                                        </li>

                                    </>

                                )

                            }

                            </ul>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );

};

export default Header;