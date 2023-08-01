import React from 'react';

const CreateUser = () => {
    return (
        <div>
            <h1>Create User</h1>
            <nav>
        <ul>
          <li>
            <Link to ="/">List Users</Link>
          </li>
          <li>
            <Link to="user/create">Create User</Link>
          </li>
        </ul>
      </nav>
        </div>
    );
};

export default CreateUser;