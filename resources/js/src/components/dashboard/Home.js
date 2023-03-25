import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const toLogin = function () {
        navigate("/login");
    }

    return (
        <React.Fragment>
            <h1 style={{ textAlign: 'center', color: 'blue' }}>Welcome to Admin Dashboard</h1>
            <Button variant="outlined" onClick={toLogin}>Logout</Button>
        </React.Fragment>
    );
};

export default Home;
