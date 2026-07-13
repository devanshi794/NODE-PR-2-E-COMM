import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import UserContext from "../context/user/UserContext";
import Header from "../components/Header";

const Home = () => {

    const { addToCart, user } = useContext(UserContext);

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

    const categoryList = [
        "All",
        ...new Set(products.map((item) => item.category?.name))
    ];

    let filterProducts = products.filter((item) => {

        const searchData =
            item.name.toLowerCase().includes(search.toLowerCase());

        const categoryData =
            category === "All" || item.category?.name === category;

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

            <Header />

            <div className="container mt-4">

                <div className="bg-primary text-white rounded p-5 text-center">

                    <h2>Welcome To Flipkart Clone</h2>

                    <p>Best Deals | Best Price | Fast Delivery</p>

                    {
                        user?.role === "admin" &&

                        <Link
                            to="/dashboard"
                            className="btn btn-light mt-2"
                        >
                            Go To Dashboard
                        </Link>

                    }

                </div>

            </div>

            <div className="container mt-4">

                <div className="row">

                    <div className="col-md-4">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Product..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="col-md-4">

                        <select
                            className="form-select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >

                            {
                                categoryList.map((item, index) => (

                                    <option
                                        key={index}
                                        value={item}
                                    >
                                        {item}
                                    </option>

                                ))
                            }

                        </select>

                    </div>

                    <div className="col-md-4">

                        <select
                            className="form-select"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >

                            <option value="Default">
                                Default
                            </option>

                            <option value="Low">
                                Price Low To High
                            </option>

                            <option value="High">
                                Price High To Low
                            </option>

                        </select>

                    </div>

                </div>

            </div>

            <div className="container mt-5">

                <h2 className="mb-4">
                    Latest Products
                </h2>

                {
                    loading ? (

                        <h3 className="text-center">
                            Loading...
                        </h3>

                    ) : (

                        <div className="row">

                            {
                                filterProducts.length > 0 ? (

                                    filterProducts.map((product) => (

                                        <div
                                            className="col-lg-3 col-md-4 col-sm-6 mb-4"
                                            key={product._id}
                                        >

                                            <div className="card h-100 shadow-sm">

                                                <img
                                                    src={product.image}
                                                    className="card-img-top"
                                                    alt={product.name}
                                                    style={{
                                                        height: "220px",
                                                        objectFit: "cover"
                                                    }}
                                                    onError={(e) => {
                                                        e.target.src = "https://via.placeholder.com/250";
                                                    }}
                                                />

                                                <div className="card-body">

                                                    <h5 className="card-title">
                                                        {product.name}
                                                    </h5>

                                                    <p className="text-success fw-bold fs-5">
                                                        ₹ {product.price}
                                                    </p>

                                                    <p className="card-text">
                                                        {product.description}
                                                    </p>

                                                    <p>

                                                        <strong>
                                                            Category :
                                                        </strong>{" "}

                                                        {product.category?.name}

                                                    </p>                                                </div>

                                                <div className="card-footer bg-white border-0">

                                                    <button
                                                        className="btn btn-warning w-100 mb-2"
                                                        onClick={() => addToCart(product)}
                                                    >
                                                        Add To Cart
                                                    </button>

                                                    <Link
                                                        to={`/product/${product._id}`}
                                                        className="btn btn-primary w-100"
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