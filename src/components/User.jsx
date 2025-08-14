import axios from 'axios';
import React, { useEffect, useState } from 'react'

const User = () => {

    const [users, setUsers] = useState([])

    async function getData() {
        const response = await axios.get("https://dummyjson.com/users");
        setUsers(response.data.users);
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div>
            {users.map((user) => {
                return (
                    <div style={{display:'flex'}}>
                        <h1>{user.firstName}</h1>
                        <h1>{user.lastName}</h1>
                    </div>
                )
            })}
        </div>
    )
}


export default User