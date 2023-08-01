import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import Home from './pages/Home';
import EditUser from './pages/editUser';
import ListUser from './pages/listUser';



function App() {
  return (

    //Configuration des routes
      <BrowserRouter>   
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/create' element = {<CreateUser/>}/>
        <Route path="/edit" element= {<EditUser/>} /> 
        <Route path="/list" element ={<ListUser/>} /> 
        <Route path='*' element = {<Home/>}/>
          
        
      </Routes>
      </BrowserRouter>
  );
};

export default App;
