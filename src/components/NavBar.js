import React from "react";



function NavBar () {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a  href= "#"  className="navbar-brand text-dark">NASA APPLICATION</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button type="button" className="btn btn-dark">Search</button>
                </form>
            </div>
        </nav>
    )
}export default NavBar;