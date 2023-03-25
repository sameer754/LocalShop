import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
