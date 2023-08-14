import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import EditUser from './pages/EditUser';
import ListUser from './pages/ListUser';
import Form from './pages/Form';


function App() {
  return (

    //Configuration des routes
      <BrowserRouter>   
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path="/edit" element= {<EditUser/>} /> 
        <Route path="/create" element= {<Form/>} /> 
        <Route path="/list" element ={<ListUser/>} /> 
        <Route path='*' element = {<Home/>}/>
          
        
      </Routes>
      </BrowserRouter>
  );
};

export default App;
