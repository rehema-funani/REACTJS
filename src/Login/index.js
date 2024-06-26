import './index.css'
import {useState} from 'react';
import {login} from "./utils";
const Login = ({onLoginSuccess}) => {
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState('');
    const [popUpIsOPen, setpopUpIsOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    console.log({username});
    const handleLogin =  async(e)=>{
        e.preventDefault();
        console.log('are we here');
        const result = await login({username: username,password});
        onLoginSuccess();
        console.log({result})
        if (result.token){
            localStorage.setItem('token', result.token)
            setIsLoggedIn(true)
            setpopUpIsOpen(false)
        }
    };
    return(
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input placeholder="Enter username" type="text" onChange={(e) =>setUsername(e.target.value)}/>
            <br/>
            <input placeholder="Enter password" type="password" onChange={e=>setPassword(e.target.value)}/>
            <br/>
            <button type="submit">Login</button>
        </form>
    );
}
export default Login;