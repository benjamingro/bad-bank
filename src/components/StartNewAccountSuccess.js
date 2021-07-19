import React from 'react';
import Button from 'react-bootstrap/Button';

function StartNewAccountSuccess({userAccount,setStartNewAccountSuccess, newAccountBalance}){
    return(
        <>
            <div className="card">
                <div className="card-header">
                    Welcome to Bad Bank {userAccount.name}
                </div>
                <div className="card-body">
                    <p className="card-text">
                        You have successfully created a new account. 
                    </p>
                    <p className="card-text">
                        All new accounts start with a <b>${newAccountBalance}</b> account balance. 
                    </p>
                    <p className="card-text d-flex justify-content-center">
                        <Button variant="primary" onClick={()=>{setStartNewAccountSuccess(false)}}>Get started</Button>
                    </p>
                </div>
            </div>
        </>
    )
}

export default StartNewAccountSuccess