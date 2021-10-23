import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {uuid} from 'uuidv4';
import api from '../api/contacts';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import EditContact from './EditContact'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'

function App() {
  // const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [PageURL, setPageURL] = useState("/");

  //Retrive Contacts
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data
  }

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(), 
      ...contact
    }
    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data]);
  }

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const {id} = response.data;

    setContacts(
      contacts.map(contact => {
        return contact.id === id ? {...response.data} : contact;
      })
    )
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  const searchHandler = (kewword) => {
    setSearchTerm(kewword);
    if(kewword !== ""){
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).slice(1).join(" ").toLowerCase().includes(kewword.toLowerCase())
      })
      setSearchResult(newContactList);
    }
    else{
      setSearchResult(contacts);
    }
  }

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retriveContacts){
    //   setContacts(retriveContacts);
    // }

    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if(allContacts){
        setContacts(allContacts);
      }
    }
    getAllContacts();
  }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts])

  const getPageURL = (url) => {
    setPageURL(url);
  }


  return (
    <div className="ui container">
      <Router>
      <Header page = {PageURL} />
      <Switch>
        <Route path="/" exact render={(props) => (<ContactList {...props} contacts={searchTerm < 1 ? contacts : searchResult} removeContactHandler={removeContactHandler} term={searchTerm} searchKeyword={searchHandler} URL={getPageURL} />)} />
        <Route path="/add" render={(props) => (<AddContact {...props} addContactHandler={addContactHandler} URL={getPageURL} />)} />
        <Route path="/edit" render={(props) => (<EditContact {...props} updateContactHandler={updateContactHandler} URL={getPageURL} />)} />
        <Route path="/contact/:id" render={(props) => (<ContactDetails {...props} URL={getPageURL} />)} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
