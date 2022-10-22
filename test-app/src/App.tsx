import React from 'react';
import { useDispatch } from 'react-redux'
import { UserController } from './redux/features/User';


function App() {
  const dispatch = useDispatch()




  return (
    <div>App

      <button onClick={() => dispatch(UserController.actions.login({}))}>click to login</button>
    </div>
  );
}

export default App;
