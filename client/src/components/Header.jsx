import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/user/UserContext";

const Header = () => {

    const { isLogin, user, setIsLogin, setUser } = useContext(UserContext);

    const handleLogOut = () => {

        localStorage.removeItem("token");

        setIsLogin(false);

        setUser({});

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    Flipkart
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

                    <form className="d-flex mx-auto" style={{ width: "40%" }}>

                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search Products"
                        />

                    </form>

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">

                            <Link className="nav-link" to="/">
                                Home
                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="/cart">
                                Cart
                            </Link>

                        </li>

                        {
                            isLogin && user?.role === "admin" && (

                                <li className="nav-item dropdown">

                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >
                                        Dashboard
                                    </a>

                                    <ul className="dropdown-menu">

                                        <li>

                                            <Link
                                                className="dropdown-item"
                                                to="/add-product"
                                            >
                                                Add Product
                                            </Link>

                                        </li>

                                        <li>

                                            <Link
                                                className="dropdown-item"
                                                to="/view-products"
                                            >
                                                View Products
                                            </Link>

                                        </li>

                                        <li>

                                            <Link
                                                className="dropdown-item"
                                                to="/add-category"
                                            >
                                                Add Category
                                            </Link>

                                        </li>

                                        <li>

                                            <Link
                                                className="dropdown-item"
                                                to="/view-category"
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
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >

                                {
                                    isLogin
                                        ? user?.name || "User"
                                        : "Account"
                                }

                            </a>

                            <ul className="dropdown-menu">

                                {
                                    !isLogin ? (

                                        <>

                                            <li>

                                                <Link
                                                    className="dropdown-item"
                                                    to="/login"
                                                >
                                                    Login
                                                </Link>

                                            </li>

                                            <li>

                                                <Link
                                                    className="dropdown-item"
                                                    to="/register"
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
                                                >
                                                    Profile
                                                </Link>

                                            </li>

                                            <li>

                                                <button
                                                    className="dropdown-item"
                                                    onClick={handleLogOut}
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