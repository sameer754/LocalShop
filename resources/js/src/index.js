import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App'

if (document.getElementById('hello-react')) {
    const root = ReactDOM.createRoot(document.getElementById('hello-react'));
    root.render(<App />);
}