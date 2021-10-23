import React, {useEffect} from "react";
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

    const getSearchTerm = (e) => {
        props.searchKeyword(e.target.value);
    }
    
    useEffect(() => {
        props.URL(props.location.pathname.split('/')[1] === "" ? "/" : props.location.pathname.split('/')[1]);
    }, [props]);
    return(
        <div className="mt-5 pt-3">
            <div className="form-floating my-3">
                <input type="search" className="form-control" id="search" placeholder="Search Contact" autoComplete="off" value={props.term} onChange={getSearchTerm} />
                <label htmlFor="search">Search Contact</label>
            </div>
            <div>
                {renterContacts.length > 0 ? renterContacts : <h3 className="text-center">No Contacts Found !!!</h3>}
            </div>
        </div>
    );
}

export default ContactList;