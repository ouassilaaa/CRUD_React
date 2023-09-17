import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


const Dashboard = () => {
    
    const[users, SetUsers] = useState([]);

    useEffect(() =>{
        getUsers();
    },[]); 

    function getUsers(){

        axios.get('http://localhost/api/manager/userManager.php').then(function(response){
            console.log(response.data);
            SetUsers(response.data);

        })

    }

    const deleteUSer=(id)=>{
        axios.delete(`http://localhost/api/manager/userManager.php/${id}`).then(function(response){
            console.log(response.data);
            getUsers();
        })
    }


    return (

        <div>
        <h2>User List 📝</h2>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {Object.keys(users).map((key)=>{
                    return (
                
                        <tr key={key}>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.mobile}</td>
                    <td className='btn'>
                        <Link to='/edit'>Edit</Link>
                    
                    <button onClick={()=>deleteUSer(users.id)}>Delete</button>
                    </td>
                </tr>)
                    
                 } )}
            </tbody>
        </table>

        </div>
    );
};

export default Dashboard;