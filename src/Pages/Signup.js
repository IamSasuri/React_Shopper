import React, { useEffect, useRef } from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

const LoginSignup = () => {

  const ref = useRef()

  useEffect(() => {
      ref.current.focus()
  },[])
  
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container w-full sm:w-2/3 md:w-1/2 xl:w-2/5'>
        <h1 className='text-xl font-bold'>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input ref={ref} type='text' placeholder='Your Name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <Link to='/login'>Login</Link></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup