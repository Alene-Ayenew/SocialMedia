import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className="login">
            <div className="card">
                <div className='left'>
                    <h1>Hello</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                        alias totam numquam ipsa exercitationem dignissimos, error nam,
                        consequatur.
                    </p>
                    <span>Don't have an account ?</span>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>

                </div>
                <div className='right'>
                    <h1>Login</h1>
                    <form action="">
                        <input type="text" name="" id="" placeholder='User name' />
                        <input type="password" name="" id="" placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login