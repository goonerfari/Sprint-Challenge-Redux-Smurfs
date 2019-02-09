import React from 'react';
import { connect } from 'react-redux';
import { editForm, editSmurf } from '../actions';

class EditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smurf: {
                id: this.props.smurf.id,
                name: this.props.smurf.name, 
                age: this.props.smurf.age, 
                email: this.props.smurf.email 
            }
        }
    }

    editSmurfHandler = e => {
        e.preventDefault();
        console.log(this.props);
        this.props.editSmurf(this.state.smurf.id, this.state.smurf);
        this.setState({
            smurf: {
                name: '',
                age: '',
                email: ''
            }
        })
        console.log(this.state)
    }


    changeHandler = e => {
        // e.preventDefault();
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value,
                [e.target.age]: e.target.value,
                [e.target.email]: e.target.value
            }
        })
    }
    render() {
        return(

            <form className="editForm" onSubmit={this.editSmurfHandler}>
                <h1>Edit smurf</h1>
                <input  
                    onChange={this.changeHandler}
                    type="text"
                    name="name"
                    value={this.state.smurf.name}
                    placeholder="name"
                />
                <br></br>
                <input
                    onChange={this.changeHandler}
                    type="text"
                    name="age"
                    value={this.state.smurf.age}
                    placeholder="age"
                />
                <br></br>
                <input
                    onChange={this.changeHandler}
                    type="email"
                    name="email"
                    value={this.state.smurf.email}
                    placeholder="email"
                />
                <br></br>
                <button variant="success" type="submit">Update</button>
                
            </form>
        )
    }
}

const mstp = ({ smurfReducer: state }) => {
    return  {
        editId: state.editId,
        smurf: {
            id: state.smurf.id,
            name: state.smurf.name,
            age: state.smurf.age,
            email: state.smurf.email
        }
    }
}

export default connect(mstp, {editForm, editSmurf})(EditForm);