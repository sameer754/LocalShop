import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./authentication/Login";
import Logout from "./authentication/Logout";
import PageNotFound from "./dashboard/PageNotFound";
import Landingpage from "./LandingPage";

const WrapperComponent = () => {
    const [pageError, setPageError] = useState(false);
    return (
        <div className="WrapperComponent">
            <Router>
                <Landingpage />
            </Router>
        </div>
    );
};
export default WrapperComponent;
