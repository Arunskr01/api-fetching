import React from 'react'

const APIfetch = () => {

    const data = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": true
        }
    ]

    return (
        <div>
            {data.map(todo => (
                <div key = {todo.id}>
                    <input type="checkbox" checked={todo.completed} value={todo.id} />{todo.title}
                </div>
            ))}
        </div>
    )
}

export default APIfetch