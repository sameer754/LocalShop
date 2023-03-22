import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

export default function Login() {
    const navigate = useNavigate();
    function loginPage() {
        navigate("/logout");
    }
    return (
        <div>
            <button onClick={() => loginPage()}>Hello World of login</button>
        </div>
    );
}
