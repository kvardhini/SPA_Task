import React from "react";
import './Registration.css'

function RegistrationPage(){
    return(
        <>
        <div className="Register-page">    
            <form className="Register-form d-flex flex-column row-gap-2 justify-content-center">
                <h1 >Please Register</h1>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput"  />
                        <label for="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="tel" className="form-control" id="floatingPassword" placeholder="Phone number" />
                        <label for="floatingPassword">Phone Number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                <button className="btn btn-success w-50">Registration </button>
            </form>
                
        </div>
        </>
    )

}
export default RegistrationPage;