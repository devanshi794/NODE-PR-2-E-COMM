import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import Header from "../components/Header";
import { FaUserCircle, FaUser, FaEnvelope, FaUserTag } from "react-icons/fa";

const Profile = () => {

    const [user, setUser] = useState({});

    const fetchProfile = async () => {

        try {

            const id = localStorage.getItem("userId");

            const response = await axiosInstance.get(`/user/profile/${id}`);

            setUser(response.data);

        } catch (error) {

            console.log(error);

            alert(error.response?.data?.message);

        }

    };

    useEffect(() => {

        fetchProfile();

    }, []);

    return (

        <>

            <Header />

            <div
                className="container d-flex justify-content-center align-items-center"
                style={{ minHeight: "85vh" }}
            >

                <div className="col-lg-5 col-md-6">

                    <div
                        className="card border-0"
                        style={{
                            borderRadius: "18px",
                            boxShadow: "0 10px 30px rgba(0,0,0,.08)"
                        }}
                    >

                        <div
                            className="card-body p-5"
                        >

                            <div className="text-center mb-4">

                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "90px",
                                        height: "90px",
                                        borderRadius: "50%",
                                        background: "#EAF3FF"
                                    }}
                                >

                                    <FaUserCircle
                                        size={70}
                                        color="#2874F0"
                                    />

                                </div>

                                <h2
                                    className="fw-bold mb-1"
                                    style={{ color: "#2874F0" }}
                                >
                                    My Profile
                                </h2>

                                <p className="text-muted">
                                    Your Account Information
                                </p>

                            </div>

                            <div
                                className="border rounded-3 p-3 mb-3"
                            >

                                <div className="d-flex align-items-center">

                                    <FaUser
                                        color="#2874F0"
                                        size={20}
                                        className="me-3"
                                    />

                                    <div>

                                        <small className="text-muted">
                                            Full Name
                                        </small>

                                        <h6 className="mb-0 fw-bold">
                                            {user.name}
                                        </h6>

                                    </div>

                                </div>

                            </div>

                            <div
                                className="border rounded-3 p-3 mb-3"
                            >

                                <div className="d-flex align-items-center">

                                    <FaEnvelope
                                        color="#2874F0"
                                        size={20}
                                        className="me-3"
                                    />

                                    <div>

                                        <small className="text-muted">
                                            Email Address
                                        </small>

                                        <h6 className="mb-0 fw-bold">
                                            {user.email}
                                        </h6>

                                    </div>

                                </div>

                            </div>

                            <div
                                className="border rounded-3 p-3"
                            >

                                <div className="d-flex align-items-center">

                                    <FaUserTag
                                        color="#2874F0"
                                        size={20}
                                        className="me-3"
                                    />

                                    <div>

                                        <small className="text-muted">
                                            Role
                                        </small>

                                        <h6 className="mb-0 fw-bold text-capitalize">
                                            {user.role}
                                        </h6>

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

export default Profile;