import React from 'react';
import {Link} from 'react-router-dom';
import avatar from "../images/user.png";

const ContactCard = (props) => {
    const {id, name, number} = props.contact;
    return(
        <div className="card flex-row p-3 justify-content-around align-items-center mt-3">
            <img src={avatar} alt={name} width="50" height="50"/>
                <div className="content mx-3 flex-grow-1">
                    <Link to={{pathname: `/contact/${id}`, state:{contact: props.contact}}} className="text-dark h5 text-decoration-none" >{name}</Link>
                    <div>{number}</div>
                </div>
                <div className="d-flex flex-column align-content-stretch">
                    <Link to={{pathname: `/edit`, state:{contact: props.contact}}}><button className="btn btn-sm btn-info m-1 w-100"> <i className="fas fa-pencil-alt"></i></button></Link>
                    <button className="btn btn-sm btn-danger m-1 w-100" onClick={() => props.clickHandler(id)}> <i className="fas fa-trash-alt"></i></button>
                </div>
        </div>
    )
}

export default ContactCard;