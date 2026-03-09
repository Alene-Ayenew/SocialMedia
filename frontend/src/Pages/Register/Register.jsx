import React from 'react'
import './Register.scss'
import { Link } from 'react-router-dom'
function Register() {
    return (
        <div className="register">
            <div className="card">
                <div className='left'>
                    <h1>Social.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                        alias totam numquam ipsa exercitationem dignissimos, error nam,
                        consequatur.
                    </p>
                    <span>Do you have an account ?</span>
                     <Link to='/login'>
                        <button>Register</button>
                    </Link>
                </div>
                <div className='right'>
                    <h1>Register</h1>
                    <form action="">
                        <input type="text" name="" id="" placeholder='User name' />
                        <input type="email" name="" id="" placeholder='email ' />
                        <input type="password" name="" id="" placeholder='Password' />
                        <input type="text" name="" id="" placeholder='Name' />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register