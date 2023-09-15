// import React, { useState } from 'react';
// import axios from 'axios';
// import{useNavigate} from "react-router-dom"; 

// const CreateUser = () => {

//     const navigate= useNavigate();

//     //suivre l'état d'un composant
//     const [name,setName]= useState('');
//     const [mobile,setMobile]= useState('');
//     const [email,setEmail]= useState('');




//     //variable pour récuperer les valeurs insérer dans les inputs
//     const handleChange=()=>{

        
//     };

//     //constante que l'on ajoutera dans le form afin de prevenir la raffraichissement du formulaire lorsqu'on clique sur le boutton
//     const handleSubmit=()=>{
//         if(name.length===0){
//             alert('Le nom est vide. Veuillez le remplir.');
//         }
//         else if(mobile.length===0){
//             alert('Veuillez remplir le champs numéro de téléphone');
//         }
//         else if(email.length===0){
//             alert('Veuillez entrer votre adresse mail');
//         }
//         else{

//             const url='http://localhost:80/test/form.php';
//             let fData = new FormData();
//             fData.append('name',name);
//             fData.append('email',email);
//             fData.append('mobile',mobile);
//             axios.post(url,fData).then(response=> alert(response.data)).catch(error => alert(error));
//         }
//     }

//     return (
//         <div>
//             {/* prevenir le raffraichissement du formulaire */}
//            <form onSubmit={handleSubmit}>
//             <label>Nom</label>
//             {/* onChange pour récuperer le contenu des inputs */}
//             <input type="text" name="name" id="name" value={name}  onChange={(e)=>setName(e.target.value)}/>
//             <br />
            
//             <label>Email</label>
//             <input type="text" name="email" id="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
//             <br />

//             <label>Mobile</label>  
//             <input type="text" name="mobile" id="mobile" value={mobile}  onChange={(e)=>setMobile(e.target.value)}/>
//             <br />

//             <input type="button" value="Register" name='submit' id='submit' onClick={handleSubmit}/>

//             </form> 
//         </div>
//     );
// };

// export default CreateUser;

import { useState } from 'react';
import axios from 'axios';
// import './App.css';
 
function CreateUser() {
  const [name,setName] = useState('');
  const [mobile,setMobile] = useState('');
  const [email,setEmail] = useState('');
 
  const handleSubmit = () => {
    if(name.length === 0){
      alert("Name has left Blank!");
    }
    else if(mobile.length === 0){
      alert("Mobile has left Blank!");
    }
    else if(email.length === 0){
      alert("Email has left Blank!");
    }
    else{
      const url = 'http://localhost/api/index.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('mobile', mobile);
      fData.append('email', email);
      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }
  }
 
  return (
    <form>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="name">Your Name</label>
                    <input type="text" className="form-control form-control-lg" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="mobile">Your Mobile</label>
                    <input type="text" className="form-control form-control-lg" name="mobile" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" for="email">Your Email</label>
                    <input type="email" className="form-control form-control-lg" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                    <label className="form-check-label" for="form2Example3g">
                      I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center">
                  <input type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" name="submit" id="submit" value="Register" onClick={handleSubmit} />
                  </div>
 
                  <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
 
                </form>
  );
}
 
export default CreateUser;