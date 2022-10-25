import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import loginRequest from './redux/features/user/loginRequest';
import { selectUser, UserState } from './redux/features/user/UserSlice';
import { useAppDispatch } from './redux/Hooks';


function App() {
  const dispatch = useAppDispatch()
  const userState = useSelector(state => state);
 
 
  console.log(userState)
  const handleClick = () => dispatch(loginRequest())


  return (
    <div>App
     
      <button onClick={() => {
        handleClick()
        console.log(userState)
      }}>click to login</button>
    </div>
  );
}

export default App;
