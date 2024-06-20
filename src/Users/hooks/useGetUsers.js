import { getUsers } from "../utils";
import {useState,useEffect} from "react";
export const useGetUsers = ()=>{
    const [users,setUsers] = useState([]);
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);



    useEffect(()=>{
        const fetchUsers = async()=>{
            try{
                

                const users = await getUsers();
                console.log(users);
                setUsers(users.users);
                setLoading(false);
            }
            catch(error){
                setError(error.message);
                setLoading(false);

            }
        }
        fetchUsers();
    },[])
    return {
        users,
        loading,
        error
    };
};
