import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }

    changeState = (e) => {
       this.setState({
           content: e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodoItem(this.state)
        this.setState({
            content: ''
        })
    }

    handleSave = () => {
        this.props.saveToLocalstorage();
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label>Add new todo:</label>
                    <input type="text" onChange={ this.changeState } value={ this.state.content }/>
                </form>
                <button className="waves-effect waves-light btn-small" onClick={ this.handleSave }>Save list</button>
            </div>
        )
    }
}

export default AddTodo