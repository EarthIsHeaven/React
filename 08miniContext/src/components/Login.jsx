import React,{useState, useContext} from "react"
import UserContext from "../context/UserContext"

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {

    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
} 