import React from 'react';
import {Link} from 'react-router-dom';


const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light p-3 fixed-top justify-content-between">
            {props.page === "/"  ? "" : <Link to="/" className="btn btn-secondary me-3"><i className="fa fa-arrow-left"></i></Link> }
            <div className="text-primary flex-grow-1">
                <h2 className="mb-0">Contacts App</h2>
            </div>
            <div className="w-25 text-end">
            {props.page === "add"  ? "" : <Link to="/add" className="btn btn-primary"><i className="fas fa-plus"></i></Link> }
            </div>
        </nav>
    );
}

export default Header;