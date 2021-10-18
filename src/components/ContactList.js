import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.removeContactHandler(id);
    }
    const renterContacts = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} key={contact.id} clickHandler={deleteContactHandler}/>
        )
    })
    return(
        <div className="ui celled list">
            {renterContacts}
        </div>
    );
}

export default ContactList;