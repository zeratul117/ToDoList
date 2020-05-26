import React from 'react'
import './App.css'

function listOfTodos({ todos, deleteItem }) {
    const listUI = !!todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <div className="within-text">
                    <span><i onClick={() => deleteItem(todo.id)} className="fa fa-times-circle"></i>{ todo.content }</span>
                    </div>
                </div>
            )
        })
    ) : (
        <p className="center">There are no tasks left!!</p>
    )
    return (
        <div className="todos collection">
            { listUI }
        </div>
    )
}

export default listOfTodos