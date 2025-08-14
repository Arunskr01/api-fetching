import React, { useEffect, useState } from 'react'

const Withfetch = () => {

    const [todo, setTodo] = useState([])
    const [updatedTodo, setUpdatedTodo] = useState([])

    async function getdata() {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        setTodo(data);
        setUpdatedTodo(data);
    }

    useEffect(() => {
        getdata();
    }, []);

    function filterTodoByUserId(id) {
        const updateTodo = todo.filter(t => t.userId === id);
        setUpdatedTodo(updateTodo);
    }

    return (
        <div>
            <button onClick={() => filterTodoByUserId(1)}>User 1</button>
            <button onClick={() => filterTodoByUserId(2)}>User 2</button>
            <button onClick={() => filterTodoByUserId(3)}>User 3</button>
            <button onClick={() => getdata()}>Show all</button>
            {updatedTodo.map(todo => (
                <div key={todo.id}>
                    <input type='checkbox' checked={todo.completed} />{todo.title}
                </div>
            ))}
        </div>
    )
}

export default Withfetch