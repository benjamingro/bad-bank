import React from 'react';
import Button from 'react-bootstrap/Button';

function LoginSuccess({ userAccount,handleLogout,setStartNewAccount }) {

    const startNewAccount = () =>{
        setStartNewAccount(true); 
    }
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="row w-100">
                        <div className="col align-self-center">
                            Welcome {userAccount.name}
                        </div>
                        <div className="col-4">
                            <Button variant="secondary" onClick={handleLogout}>Logout</Button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Withdraw</li>
                        <li className="list-group-item">Deposit</li>
                        <li className="list-group-item">View all Data</li>
                        <li className="list-group-item"><Button variant="link" onClick={startNewAccount}>Create a new account</Button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default LoginSuccess
