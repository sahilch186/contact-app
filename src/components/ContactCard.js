import React from 'react';
import avatar from "../images/user.png";

const ContactCard = (props) => {
    const {id, name, number} = props.contact;
    return(
        <div className="item">
            <img src={avatar} className="ui avatar image" alt={name} />
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{number}</div>
                </div>
                <i className="trash alternate outline icon right floated" style={{color: "red", marginTop: "7px"}} onClick={() => props.clickHandler(id)}></i>
            </div>
    )
}

export default ContactCard;