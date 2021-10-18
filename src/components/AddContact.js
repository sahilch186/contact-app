import React from 'react';


class AddContact extends React.Component {

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
            console.log(this.state);
        }
    }


    render() {
        return (
            <div className="ui main">
                <h2>Add a new contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})} placeholder="Enter Contact Name" />
                    </div>
                    <div className="field">
                        <label>Contact Number</label>
                        <input type="text" name="number" value={this.state.number} onChange={(e)=> this.setState({number: e.target.value})} placeholder="Enter Contact Number" />
                    </div>
                    <button className="ui button blue">Add Contact</button>
                </form>
            </div>
        )
    }
}

export default AddContact;