import React from 'react';
import {Link} from 'react-router-dom';

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        props.URL(props.location.pathname.split('/')[1]);

    }
    
    state = {
        name: "",
        number: "",
    }
    
    add = (e) => {
        e.preventDefault();

        if(this.state.name === "" || this.state.number === ""){
            alert("All Fields are Mandatory")
        }
        else{
            this.props.addContactHandler(this.state);
            this.setState({name: "", number: ""})
            this.props.history.push("/");
        }
    }
    
    
    render() {
        return (
            <div className="mt-5 pt-3">
                <div className="card p-3 mt-3">
                <h2>Add a new contact</h2>
                <form onSubmit={this.add}>
                    <div className="form-group mb-3">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})} placeholder="Enter Contact Name" />
                    </div>
                    <div className="form-group mb-3">
                        <label>Contact Number</label>
                        <input type="text" name="number" className="form-control" value={this.state.number} onChange={(e)=> this.setState({number: e.target.value})} placeholder="Enter Contact Number" />
                    </div>
                    <div className="d-flex justify-content-between">
                    <Link to="/" className="btn btn-secondary">Go Back</Link>
                    <button type="submit" className="btn btn-primary">Add Contact</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default AddContact;