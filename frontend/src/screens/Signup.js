import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../actions/alertActions';
import { signup } from '../actions/authAction';
const Signup = () => {
  const dispatch= useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
});
const auth = useSelector((state) => state.auth)
  const { isAuthenticated  } = auth
const { name, email, password, password2 } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
    e.preventDefault();

    if (password !== password2)
        dispatch(setAlert('Passwords do not match', 'error'));
    else
        dispatch(signup({ name, email, password, password2 }));
};

if (isAuthenticated)
    return <Redirect to='/' />;
  return (
    <div className='auth'>
      <h1 className='auth__title'>Sign Up</h1>
      <p className='auth__lead'>Create your Account</p>
      <form className='auth__form' onSubmit={e => onSubmit(e)}>
        <div className='auth__form__group'>
          <input 
            className='auth__form__input'
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required 
          />
        </div>
        <div className='auth__form__group'>
          <input 
            className='auth__form__input'
            type='email'
            placeholder='Email'
            name='email'
            value={email}
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
        <div className='auth__form__group'>
          <input
            className='auth__form__input'
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
            minLength='6'
            />
        </div>
        <button className='auth__form__button'>Register</button>
      </form>
      <p className='auth__authtext'>
        Already have an account? <Link className='auth__authtext__link' to='/signin'>Sign In</Link>
      </p>
    </div>
  )
}

export default Signup
