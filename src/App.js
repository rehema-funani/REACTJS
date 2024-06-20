import Login from "./Login";
import Users from "./Users";

const App = () =>{
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log({baseUrl})
  return(
    <div>
     {/* <Login/> */}
     <Users/>
    </div>
  )

}
export default App;