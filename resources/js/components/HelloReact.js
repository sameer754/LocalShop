import React from 'react';
import ReactDOM from 'react-dom';

export default function HelloReact() {
    return (
        <h1>Hello React!</h1>
    );
}

if (document.getElementById('hello-react')) {
    const root =ReactDOM.createRoot(document.getElementById('hello-react'));
    root.render(<HelloReact />, document.getElementById('hello-react'));
}