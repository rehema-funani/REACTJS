import Login from './Login';
import Users from "./Users";
import { useState } from 'react';
import PopUp from './PopUp';
import './App.css';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [popUpIsOPen, setpopUpIsOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const handleClose =()=>{
    setOpen(false)
  }
  const handleOPen = () =>{
    setOpen(true)
  }
  const handleLogin =() =>{
    setIsLoggedIn(true)
    setOpen(false)
  };
  // const baseUrl = process.env.REACT_APP_BASE_URL;
  // console.log({baseUrl});
return(
  <div className='modal'>
    {!isLoggedIn ?(
      <>
      <h1>Lovelace React App</h1>
      <button type="button" onClick={handleOPen}>Login</button>
      <PopUp isOPen={open} onClose={handleClose}>
        <>
        <h1>Sign In</h1>
        <Login onLoginSuccess={handleLogin}/>
        </>
      </PopUp>
      </>
    ):(
     <Users/>
    )}
  </div>
);
}
export default App;