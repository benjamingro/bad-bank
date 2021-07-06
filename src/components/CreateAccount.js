import React from 'react';
import Login from './Login.js'


function CreateAccount({validateLogin}){
    return(
        <>
            {/* <h2>Create Account</h2> */}
            <div className="row w-100">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <Login validateLogin={validateLogin}/>
                </div>
                <div className="col-lg-3"></div>

            </div>
        </>
    )
}

export default CreateAccount

