import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../actions/authAction';
import { useSelector, useDispatch } from 'react-redux'
import Alert from './Alert';//alert html code
const Navbar = () => {
  const dispatch= useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }

  const authLinks = (
    <a className='navbar__top__auth__link' onClick={logoutHandler} href='#!'>Logout</a>
            );


  const guestLinks = (
      <>
          <Link className='navbar__top__auth__link' to='/signin'>Login</Link>
          <Link className='navbar__top__auth__link' to='/signup'>Sign Up</Link>
      </>
  );
  const auth = useSelector((state) => state.auth)
  const { isAuthenticated, loading  } = auth
  return (
    <>
       <nav className='navbar'>
          <div className='navbar__top'>
            <div className='navbar__top__logo'>
              <Link className='navbar__top__logo__link' to='/'>Realest Estate</Link>
            </div>
            <div className='navbar__top__auth'>
              { !loading && (<>{ isAuthenticated ? authLinks : guestLinks }</>) }
            </div>
          </div>
          <div className='navbar__bottom'>
            <li className='navbar__bottom__item'>
              <NavLink className='navbar__bottom__item__link' exact to='/'>Home</NavLink>
            </li>
            <li className='navbar__bottom__item'>
              <NavLink className='navbar__bottom__item__link' exact to='/listings'>Listings</NavLink>
            </li>
            <li className='navbar__bottom__item'>
                <NavLink className='navbar__bottom__item__link' exact to='/about'>About</NavLink>
            </li>
            <li className='navbar__bottom__item'>
                <NavLink className='navbar__bottom__item__link' exact to='/contact'>Contact</NavLink>
            </li>
          </div>
        </nav>
        <Alert />
    </>
  )
}

export default Navbar
