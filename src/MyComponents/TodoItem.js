import React from 'react'

export const TodoItem = ({todos}) => {
    return (
        <div>
            <h4>{todos.title}</h4>
            <p>{todos.desc}</p>
        </div>
    )
}