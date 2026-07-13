import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import Header from "../components/Header";

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

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-md-6">

                        <div className="card shadow">

                            <div className="card-header bg-primary text-white">

                                <h3 className="text-center">
                                    My Profile
                                </h3>

                            </div>

                            <div className="card-body">

                                <table className="table">

                                    <tbody>

                                        <tr>

                                            <th>Name</th>

                                            <td>{user.name}</td>

                                        </tr>

                                        <tr>

                                            <th>Email</th>

                                            <td>{user.email}</td>

                                        </tr>

                                        <tr>

                                            <th>Role</th>

                                            <td>{user.role}</td>

                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

};

export default Profile;