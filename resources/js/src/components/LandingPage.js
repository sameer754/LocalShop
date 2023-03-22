import React, { useEffect } from "react";
import { Routes, useNavigate, Route, useLocation, Navigate } from "react-router-dom";
import RoutesList from "../config/Routes";
import Login from "./authentication/Login";
import Logout from "./authentication/Logout";

const Landingpage = ({ setPageError }) => {
    const navigater = useNavigate();
    let token = sessionStorage.getItem("token");
    useEffect(() => {
        if (!token || token.length <= 0) {
            navigater("login");
        }
    }, []);


    return (
        <Routes>
            <Route exact={true} path="/login" element={<Login />} />
            <Route exact={true} path="/logout" element={<Logout />} />
            <Route exact={true} path="/" element={<Logout />} />
        </Routes>
    );
};

export default Landingpage;
