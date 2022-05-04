import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addpost from './Components/Addpost';
import Carlist from './Components/Carlist';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Mesfavoris from './Components/Mesfavoris';
import Myinfo from './Components/Myinfo';
import MyPosts from './Components/MyPosts';
import NavUser from './Components/NavUser';
import Privateroute from './Components/Privateroute';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Services from './Components/Services';

function App() {
  return (
    <div >
      <NavUser/>
      
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Occasions' element={<Carlist/>}/>
     <Route path='/Profile' element={<Privateroute><Profile/></Privateroute>}/>
     <Route path='/Register' element={<Register/>}/>
     <Route path='ajouter-une-annonce' element={<Privateroute><Addpost/></Privateroute>}/>
     <Route path='/Services' element={<Services/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/mes-informations' element={<Privateroute><Myinfo/></Privateroute>}/>
     <Route path='/mes-favoris' element={<Privateroute><Mesfavoris/></Privateroute>}/>
     <Route path='/mes-annonces' element={<Privateroute><MyPosts/></Privateroute>}/>
  
   </Routes>
   
    </div>
  );
}

export default App;
