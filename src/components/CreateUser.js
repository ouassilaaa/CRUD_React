import React, { useState } from 'react';
import axios from 'axios';
import{useNavigate} from "react-router-dom"; 

const CreateUser = () => {

    const navigate= useNavigate();

    //suivre l'état d'un composant
    const [inputs,setInputs]= useState({});

    //variable pour récuperer les valeurs insérer dans les inputs
    const handleChange=(e)=>{
        const name= e.target.name;
        const value = e.target.value;
        setInputs(values=>({values,[name]:value}));
    };

    //constante que l'on ajoutera dans le form afin de prevenir la raffraichissement du formulaire lorsqu'on clique sur le boutton
    const handleSubmit=(e)=>{
        e.preventDefault();

        axios.post('http://localhost:80/api/user/save', inputs).then(function(response){
            console.log(response.data);
        navigate('/'); 
        });
        

    };

    return (
        <div>
            {/* prevenir le raffraichissement du formulaire */}
           <form onSubmit={handleSubmit}>
            <label>Name</label>
            {/* onChange pour récuperer le contenu des inputs */}
            <input type="text" name="name" onChange={handleChange}/>
            <br />
            
            <label>Email</label>
            <input type="text" name="email" onChange={handleChange}/>
            <br />

            <label>Mobile</label>
            <input type="text" name="mobile" onChange={handleChange}/>
            <br />

            <button>Save</button>

            </form> 
        </div>
    );
};

export default CreateUser;