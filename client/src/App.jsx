import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import ViewProducts from "./pages/ViewProducts";
import EditProduct from "./pages/EditProduct";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import AddCategory from "./pages/AddCategory";
import ViewCategory from "./pages/ViewCategory";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>

      {/* User Routes */}

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route path="/product/:id" element={<SingleProduct />} />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/add-product"
        element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        }
      />

      <Route
        path="/view-products"
        element={
          <ProtectedRoute>
            <ViewProducts />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-product/:id"
        element={
          <ProtectedRoute>
            <EditProduct />
          </ProtectedRoute>
        }
      />

      <Route
        path="/add-category"
        element={<ProtectedRoute>
          <AddCategory />
        </ProtectedRoute>
        }
      />

      <Route
        path="/view-category"
        element={
          <ProtectedRoute>
            <ViewCategory />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default App;