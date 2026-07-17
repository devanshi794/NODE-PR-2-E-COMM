import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import UserContext from "../context/user/UserContext";
import Header from "../components/Header";
import couponBanner from "../assets/coupon-banner.webp";
import offer1 from "../assets/offer1.webp";
import offer2 from "../assets/offer2.webp";
import offer3 from "../assets/offer3.webp";
import offer4 from "../assets/offer4.webp";
import offer5 from "../assets/offer5.webp";
import offer6 from "../assets/offer6.webp";
import {
    FaHome,
    FaLaptop,
    FaTshirt,
    FaMobileAlt,
    FaTv,
    FaGamepad,
    FaSuitcaseRolling
} from "react-icons/fa";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";

const categories = [

    {
        name: "All",
        icon: <FaHome />
    },

    {
        name: "Mobiles",
        icon: <FaMobileAlt />
    },

    {
        name: "Electronics",
        icon: <FaLaptop />
    },

    {
        name: "Fashion",
        icon: <FaTshirt />
    },

    {
        name: "Home & Kitchen",
        icon: <FaHome />
    },

    {
        name: "Appliances",
        icon: <FaTv />
    },

    {
        name: "Beauty",
        icon: <MdOutlineFaceRetouchingNatural />
    },

    {
        name: "Gaming",
        icon: <FaGamepad />
    },

    {
        name: "Travel & Luggage",
        icon: <FaSuitcaseRolling />
    }

];

const Home = () => {

    const { addToCart } = useContext(UserContext);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("Default");

    const fetchProducts = async () => {

        try {

            const response = await axiosInstance.get("/product");

            setProducts(response.data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchProducts();

    }, []);

    let filterProducts = products.filter((item) => {

        const keyword = search.trim().toLowerCase();

        const searchData =
            item.name.toLowerCase().includes(keyword) ||
            item.description.toLowerCase().includes(keyword) ||
            item.category?.name.toLowerCase().includes(keyword);

        const categoryData =
            category === "All" ||
            item.category?.name === category;

        return searchData && categoryData;

    });

    if (sort === "Low") {

        filterProducts.sort((a, b) => a.price - b.price);

    }

    if (sort === "High") {

        filterProducts.sort((a, b) => b.price - a.price);

    }

    return (

        <>

            <Header
                search={search}
                setSearch={setSearch}
            />
            {/* Categories */}

            <div className="container-fluid bg-white border-top border-bottom">

                <div
                    className="container d-flex justify-content-between align-items-center"
                    style={{
                        padding: "12px 0"
                    }}
                >

                    {

                        categories.map((item, index) => (

                            <div
                                key={index}
                                onClick={() => setCategory(item.name)}
                                className="text-center"
                                style={{
                                    cursor: "pointer",
                                    width: "105px"
                                }}
                            >

                                <div
                                    style={{
                                        fontSize: "28px",
                                        color: "#FFD700",
                                        marginBottom: "3px"
                                    }}
                                >
                                    {item.icon}
                                </div>

                                <p
                                    className="mb-0 fw-semibold"
                                    style={{
                                        fontSize: "13px",
                                        color:
                                            category === item.name
                                                ? "#2874F0"
                                                : "#212121"
                                    }}
                                >
                                    {item.name}
                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

            {/* Coupon Banner */}

            <div className="container mt-3">

                <img
                    src={couponBanner}
                    alt=""
                    className="img-fluid rounded shadow-sm w-100"
                    style={{
                        height: "240px",
                        objectFit: "cover"
                    }}
                />

            </div>

            <div className="container mt-4 mb-4">

                <div
                    id="offerSlider"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="3000"
                >

                    <div className="carousel-indicators">

                        <button
                            type="button"
                            data-bs-target="#offerSlider"
                            data-bs-slide-to="0"
                            className="active"
                        ></button>

                        <button
                            type="button"
                            data-bs-target="#offerSlider"
                            data-bs-slide-to="1"
                        ></button>

                    </div>

                    <div className="carousel-inner">

                        <div className="carousel-item active">

                            <div className="row g-3">

                                <div className="col-md-4">

                                    <img
                                        src={offer1}
                                        className="img-fluid rounded"
                                        style={{
                                            width: "100%",
                                            height: "180px",
                                            objectFit: "fill"
                                        }}
                                        alt=""
                                    />

                                </div>

                                <div className="col-md-4">

                                    <img
                                        src={offer2}
                                        className="img-fluid rounded"
                                        style={{
                                            width: "100%",
                                            height: "180px",
                                            objectFit: "fill"
                                        }}
                                        alt=""
                                    />

                                </div>

                                <div className="col-md-4">

                                    <img
                                        src={offer3}
                                        className="img-fluid rounded"
                                        style={{
                                            width: "100%",
                                            height: "180px",
                                            objectFit: "fill"
                                        }}
                                        alt=""
                                    />

                                </div>

                            </div>

                        </div>                        <div className="carousel-item">

                            <div className="row g-3">

                                <div className="col-md-4">

                                    <img
                                        src={offer4}
                                        className="img-fluid rounded"
                                        style={{
                                            width: "100%",
                                            height: "180px",
                                            objectFit: "fill"
                                        }}
                                        alt=""
                                    />

                                </div>

                                <div className="col-md-4">

                                    <img
                                        src={offer5}
                                        className="img-fluid rounded"
                                        style={{
                                            width: "100%",
                                            height: "180px",
                                            objectFit: "fill"
                                        }}
                                        alt=""
                                    />

                                </div>

                                <div className="col-md-4">

                                    <img
                                        src={offer6}
                                        className="img-fluid rounded"
                                        style={{
                                            width: "100%",
                                            height: "180px",
                                            objectFit: "fill"
                                        }}
                                        alt=""
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#offerSlider"
                        data-bs-slide="prev"
                    >

                        <span className="carousel-control-prev-icon"></span>

                    </button>

                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#offerSlider"
                        data-bs-slide="next"
                    >

                        <span className="carousel-control-next-icon"></span>

                    </button>

                </div>

            </div>

            <div className="container mb-5">

                <h2 className="fw-bold mb-4">

                    Latest Products

                </h2>

                {

                    loading ? (

                        <h3 className="text-center">

                            Loading...

                        </h3>

                    ) : (

                        <div className="row g-4">

                            {

                                filterProducts.length > 0 ? (

                                    filterProducts.map((product) => (

                                        <div
                                            className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
                                            key={product._id}
                                        >

                                            <div
                                                className="card border-0 h-100"
                                                style={{
                                                    borderRadius: "10px",
                                                    overflow: "hidden",
                                                    boxShadow: "0 2px 8px rgba(0,0,0,.12)",
                                                    transition: ".3s"
                                                }}
                                            >

                                                <div
                                                    style={{
                                                        position: "relative",
                                                        height: "180px",
                                                        background: "#fff"
                                                    }}
                                                >

                                                    <span
                                                        style={{
                                                            position: "absolute",
                                                            top: "10px",
                                                            left: "10px",
                                                            background: "#388e3c",
                                                            color: "#fff",
                                                            padding: "3px 8px",
                                                            borderRadius: "5px",
                                                            fontSize: "13px",
                                                            fontWeight: "600"
                                                        }}
                                                    >

                                                        {product.rating ?? 4.5} ★

                                                    </span>

                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "contain",
                                                            padding: "8px"
                                                        }}
                                                        onError={(e) => {
                                                            e.target.src = "https://via.placeholder.com/250";
                                                        }}
                                                    />

                                                </div>                                                <div
                                                    className="card-body"
                                                    style={{
                                                        padding: "12px"
                                                    }}
                                                >

                                                    <h6
                                                        className="fw-semibold mb-1"
                                                        style={{
                                                            fontSize: "15px",
                                                            whiteSpace: "nowrap",
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis"
                                                        }}
                                                    >
                                                        {product.name}
                                                    </h6>

                                                    <h5
                                                        className="fw-bold mb-1"
                                                        style={{
                                                            color: "#212121",
                                                            fontSize: "22px"
                                                        }}
                                                    >
                                                        ₹{product.price}
                                                    </h5>

                                                    <p
                                                        className="text-muted mb-2"
                                                        style={{
                                                            fontSize: "13px",
                                                            display: "-webkit-box",
                                                            WebkitLineClamp: 2,
                                                            WebkitBoxOrient: "vertical",
                                                            overflow: "hidden",
                                                            minHeight: "34px"
                                                        }}
                                                    >
                                                        {product.description}
                                                    </p>

                                                    <small
                                                        className="text-secondary d-block mb-3"
                                                        style={{
                                                            fontSize: "13px"
                                                        }}
                                                    >
                                                        Category : {product.category?.name}
                                                    </small>

                                                </div>

                                                <div className="card-footer border-0 bg-white pt-0 pb-3 px-3">

                                                    <button
                                                        className="btn btn-warning w-100 fw-semibold mb-2"
                                                        style={{
                                                            borderRadius: "8px",
                                                            fontSize: "14px"
                                                        }}
                                                        onClick={() => addToCart(product)}
                                                    >
                                                        Add To Cart
                                                    </button>

                                                    <Link
                                                        to={`/product/${product._id}`}
                                                        className="btn btn-primary w-100 fw-semibold"
                                                        style={{
                                                            borderRadius: "8px",
                                                            fontSize: "14px"
                                                        }}
                                                    >
                                                        View Product
                                                    </Link>

                                                </div>

                                            </div>

                                        </div>

                                    ))

                                ) : (

                                    <h4 className="text-center">

                                        No Products Found

                                    </h4>

                                )

                            }

                        </div>

                    )

                }

            </div>

        </>

    );

};

export default Home;