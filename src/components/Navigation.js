import React from 'react';
import{NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
            <h5>React CRUD operations using PHP API and MySQL</h5>
            <nav>
                <ul>
                    <NavLink to = "/"><li>Home</li></NavLink>
                    <NavLink to = "/create"><li>Create User</li></NavLink>
                    <NavLink to = "/list"><li>List User</li></NavLink>

                </ul>
            </nav>



            
        </div>
    );
};

export default Navigation;