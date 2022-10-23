import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import loginRequest from './redux/features/user/loginRequest';
import { selectUser, UserState } from './redux/features/user/UserSlice';


function App() {
  const dispatch = useDispatch<any>()
  const userState = useSelector(state => state);

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
