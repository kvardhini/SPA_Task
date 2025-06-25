import React from "react";
import './login.css'

function Login(){
    return(
        <>
            <div className="Login-page">
                
                <form className="Login-form d-flex flex-column row-gap-3 justify-content-center">
                    <h1 >Please Login</h1>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button className="btn btn-success w-50">Login </button>
                </form>
                
            </div>
        </>
    )
}
export default Login;