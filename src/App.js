import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import EditUser from './pages/EditUser';
import Form from './pages/Form';
import List from './pages/List';


function App() {
  return (

    //Configuration des routes
      <BrowserRouter>   
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path="/edit" element= {<EditUser/>} /> 
        <Route path="/create" element= {<Form/>} /> 
        <Route path="/list" element ={<List/>} /> 
        <Route path='*' element = {<Home/>}/>
          
        
      </Routes>
      </BrowserRouter>
  );
};

export default App;
