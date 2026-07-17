import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import loginImage from "../assets/login.png";

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (password !== confirmPassword) {

            alert("Password and Confirm Password do not match");
            return;

        }

        try {

            const response = await axiosInstance.post("/user/register", {
                name,
                email,
                password,
                confirmPassword
            });

            alert(response.data.message);

            navigate("/login");

        } catch (error) {

            alert(error.response?.data?.message || "Registration Failed");

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
                    width: "900px",
                    minHeight: "560px"
                }}
            >

                {/* Left Panel */}

                <div
                    className="col-md-4 text-white p-5 d-flex flex-column justify-content-between"
                    style={{
                        background: "#2874f0"
                    }}
                >

                    <div>

                        <h2 className="fw-bold">
                            Looks like you're new here!
                        </h2>

                        <p className="mt-4 fs-5">
                            Sign up with your details to get started.
                        </p>

                    </div>

                    <div className="text-center">

                        <img
                            src={loginImage}
                            alt="Register"
                            style={{
                                width: "220px"
                            }}
                        />

                    </div>

                </div>

                {/* Right Panel */}

                <div className="col-md-8 p-5">

                    <form onSubmit={handleSubmit}>

                        <div className="mb-4">

                            <input
                                type="text"
                                className="form-control border-0 border-bottom rounded-0"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                        </div>

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

                        <div className="mb-4">

                            <input
                                type="password"
                                className="form-control border-0 border-bottom rounded-0"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />

                        </div>

                        <p
                            style={{
                                fontSize: "13px",
                                color: "#878787"
                            }}
                        >
                            By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                        </p>

                        <button
                            type="submit"
                            className="btn w-100 text-white mt-3"
                            style={{
                                background: "#fb641b",
                                height: "48px",
                                fontWeight: "600"
                            }}
                        >
                            Register
                        </button>

                    </form>

                    <div className="text-center mt-5">

                        <Link
                            to="/login"
                            className="text-decoration-none fw-bold"
                        >
                            Existing User? Login
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Register;