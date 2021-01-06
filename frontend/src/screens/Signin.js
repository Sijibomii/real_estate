import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { login } from '../actions/authAction'
const Signin = () => {
  const dispatch=useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
});
const { email, password } = formData;
const auth = useSelector((state) => state.auth)
  const { isAuthenticated  } = auth
const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
    e.preventDefault();
    dispatch(login(email, password));
};

if (isAuthenticated)
    return <Redirect to='/' />;
  return (
    <div className='auth'>
      <h1 className='auth__title'>Sign In</h1>
      <p className='auth__lead'>Sign into your Account</p>
      <form className='auth__form' onSubmit={e => onSubmit(e)}>
        <div className='auth__form__group'>
          <input 
            className='auth__form__input'
            type='email'
            placeholder='Email'
            name='email' value={email}
            onChange={e => onChange(e)}
            required
            />
        </div>
        <div className='auth__form__group'>
          <input
            className='auth__form__input'
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
          />
        </div>
        <button className='auth__form__button'>Login</button>
      </form>
      <p className='auth__authtext'>
         Don't have an account? <Link className='auth__authtext__link' to='/signup'>Sign Up</Link>
      </p>
    </div>
  )
}

export default Signin
