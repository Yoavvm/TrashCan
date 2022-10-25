import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import loginRequest from './redux/features/user/loginRequest';
import { selectUser, UserState } from './redux/features/user/UserSlice';
import { useAppDispatch } from './redux/Hooks';


function App() {
  const dispatch = useAppDispatch()
  const userState = useSelector(state => state);
  const [userID, setUserID] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleLoginClick = () => dispatch(loginRequest({ userID, userPassword }))


  return (
    <div>

      <div>
        <div>userid: <input onChange={(event) => setUserID(event.target.value)} type="text" /></div>
        <div>

          <div>userpassword: <input onChange={(event) => setUserPassword(event.target.value)} type="text" /></div>
        </div>
      </div>
      <div>
        <button onClick={() => {handleLoginClick()}}>click to login</button>
      </div>
    </div>
  );
}

export default App;
