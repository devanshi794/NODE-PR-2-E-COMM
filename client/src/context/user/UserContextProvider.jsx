import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);

    const [user, setUser] = useState({});

    const [token, setToken] = useState(
        localStorage.getItem("token") || ""
    );

    const [cart, setCart] = useState([]);

    // Add To Cart
    const addToCart = (product) => {

        const exist = cart.find(
            (item) => item._id === product._id
        );

        if (exist) {

            alert("Product Already Added");

            return;

        }

        setCart([...cart, product]);

        alert("Product Added To Cart");

    };

    // Remove From Cart
    const removeFromCart = (id) => {

        const newCart = cart.filter(
            (item) => item._id !== id
        );

        setCart(newCart);

        alert("Product Removed");

    };

    return (

        <UserContext.Provider
            value={{

                isLogin,
                setIsLogin,

                user,
                setUser,

                token,
                setToken,

                cart,
                setCart,

                addToCart,
                removeFromCart

            }}
        >

            {children}

        </UserContext.Provider>

    );

};

export default UserContextProvider;
