import React, { useState } from 'react'
import loginRequest from '../redux/features/user/loginRequest';
import { useAppDispatch } from '../redux/Hooks';

const Login = () => {

    const dispatch = useAppDispatch()
    // const userState = useAppSelector(state => state.User);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => dispatch(loginRequest({ email, password }))


    return (
        <div>
            <div>Login</div>

            <div>
                email adress:
                <input className='border-black' type="text" onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="">
                password:
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div>
                <button onClick={() => handleLoginClick()}>Login</button>
            </div>

        </div>
    )
}

export default Login