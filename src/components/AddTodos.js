import React, { Component } from 'react'
import PropTypes from 'prop-types';

class AddTodos extends Component {
    state = {
        title : ''
    }
    onChange = (e)=>{
        // component level state
        this.setState({
            // name is the name given to input field
            [e.target.name] : e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }
    render() {
        return (
            <form onSubmit = {this.onSubmit} style = {{display:'flex'}}>
                <input type = 'text' name = 'title' placeholder= 'Add Todo' style = {{flex:'10',padding:'5px'}} value = {this.state.title} onChange={this.onChange}/>
                <input type='submit' value= 'Submit' className ='btn' style = {{flex:'1'}}/>
            </form>
        )
    }
}

AddTodos.propTypes = {
    addTodo : PropTypes.func.isRequired,
}

export default AddTodos;