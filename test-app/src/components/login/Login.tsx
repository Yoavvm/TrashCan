import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import loginRequest from '../../redux/features/user/loginRequest';
import { useAppDispatch } from '../../redux/Hooks';

const Login = () => {

    const dispatch = useAppDispatch()
    const userState = useSelector(state => state);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => dispatch(loginRequest({ email, password }))


    return (
        <div>Login</div>
    )
}

export default Login