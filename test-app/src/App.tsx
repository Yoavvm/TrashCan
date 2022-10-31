import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Exercises from './components/Exercises';



function App() {


  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='exercises' element={<Exercises/>}/>
        <Route path='*' element={<Login/>}/>

      </Routes>


    </div>
  );
}

export default App;
