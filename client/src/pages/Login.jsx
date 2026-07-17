import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import UserContext from "../context/user/UserContext";
import loginImage from "../assets/login.png";

const Login = () => {

    const navigate = useNavigate();

    const { setIsLogin, setUser } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axiosInstance.post("/user/login", {
                email,
                password
            });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.userId);

            setIsLogin(true);

            setUser({
                id: response.data.userId,
                name: response.data.name,
                role: response.data.role
            });

            alert(response.data.message);

            if (response.data.role === "admin") {

                navigate("/dashboard");

            } else {

                navigate("/");

            }

        } catch (error) {

            alert(error.response?.data?.message || "Login Failed");

        }

    };

    return (

        <div
            className="container-fluid d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background: "#f1f3f6"
            }}
        >

            <div
                className="row bg-white shadow"
                style={{
                    width: "850px",
                    minHeight: "520px"
                }}
            >

                <div
                    className="col-md-4 text-white p-5 d-flex flex-column justify-content-between"
                    style={{
                        background: "#2874f0"
                    }}
                >

                    <div>

                        <h2 className="fw-bold">
                            Login
                        </h2>

                        <p className="mt-4 fs-5">
                            Get access to your Orders,
                            <br />
                            Wishlist and
                            Recommendations
                        </p>

                    </div>

                    <img
                        src={loginImage}
                        alt="login"
                        className="img-fluid"
                    />

                </div>

                <div className="col-md-8 p-5">

                    <form onSubmit={handleSubmit}>

                        <div className="mb-4">

                            <input
                                type="email"
                                className="form-control border-0 border-bottom rounded-0"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                        </div>

                        <div className="mb-4">

                            <input
                                type="password"
                                className="form-control border-0 border-bottom rounded-0"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                        </div>

                        <p
                            style={{
                                fontSize: "13px",
                                color: "#878787"
                            }}
                        >
                            By continuing, you agree to Flipkart's
                            Terms of Use and Privacy Policy.
                        </p>

                        <button
                            type="submit"
                            className="btn w-100 text-white mt-3"
                            style={{
                                background: "#fb641b",
                                height: "48px"
                            }}
                        >
                            Login
                        </button>

                    </form>

                    <div className="text-center mt-5">

                        <Link
                            to="/register"
                            className="text-decoration-none fw-bold"
                        >
                            New to Flipkart? Create an account
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Login;