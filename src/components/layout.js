import React from 'react';
import { Link } from 'react-router-dom';

const layout = props => {
    return (
        <div className="container">
            <header>
                <Link to={"/"}>
                    <h1>Currency React App</h1>
                </Link>
            </header>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default layout;