import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Exercises from './components/Exercises';
import Main from './components/Main';



function App() {


  return (
    <div className='grid grid-cols-7 top-0 left-0 h-screen w-screen bg-gray-900'>
      <Navbar />

      <Main>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='exercises' element={<Exercises />} />
          <Route path='*' element={<Login />} />

        </Routes>
      </Main>

    </div>
  );
}

export default App;
