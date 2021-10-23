import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import avatar from "../images/user.png";

const ContactDetails = (props) => {
    const {name, number} = props.location.state.contact;
    useEffect(() => {
        props.URL(props.location.pathname.split('/')[1] === "" ? "/" : props.location.pathname.split('/')[1]);
    }, [props]);
    return(
        <div className="mt-5 pt-3">
            <div className="card">
                <div className="text-center p-2">
                    <img src={avatar} alt={"name"} className="img-fluid" />
                </div>
                <div className="card-body border-top">
                    <h4 className="mb-0">{name}</h4>
                    <p className="mb-0">{number}</p>
                </div>
            </div>
            <div className="mt-3 d-grid gap-2"><Link to="/" className="btn btn-secondary">Back to Contact List</Link></div>
        </div>
    )
}

export default ContactDetails;