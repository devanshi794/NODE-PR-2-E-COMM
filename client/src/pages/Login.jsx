import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import UserContext from "../context/user/UserContext";

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

            console.log(response.data);

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

            console.log(error);

            alert(error.response?.data?.message || "Login Failed");

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="text-center mb-4">
                                Login
                            </h2>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />

                                </div>

                                <button
                                    className="btn btn-primary w-100"
                                    type="submit"
                                >
                                    Login
                                </button>

                            </form>

                            <p className="text-center mt-3">

                                Don't have an account?

                                <Link to="/register" className="ms-2">
                                    Register
                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Login;