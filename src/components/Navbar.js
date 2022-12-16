import React from "react"; 
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <React.Fragment>
            <div className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/restaurant">Restaurants</Link></li>
                    <li><Link to="/online">Online Purchase</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

        </React.Fragment>
    )
}