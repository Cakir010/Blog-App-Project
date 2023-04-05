import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import MyBlogs from "../pages/MyBlogs";
import Profile from "../pages/Profile";
import Detail from "../pages/Detail";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myblogs" element={<MyBlogs />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/" element={<Dashboard />} />
          <Route path="" element={<PrivateRouter />}>
            <Route path="detail/:id" element={<Detail />} />
            <Route path="new-blog" element={<NewBlog />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
