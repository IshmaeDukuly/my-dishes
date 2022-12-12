import React from "react"; 


export default function Navbar() {
    return(
        <React.Fragment>
            <div className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Restaurants</a></li>
                    <li><a href="/">Online Purchase</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>

        </React.Fragment>
    )
}