import React from 'react';
import Button from 'react-bootstrap/Button';
import {
    Link
} from "react-router-dom";

function LoginSuccess({ userAccount, handleLogout, setStartNewAccount }) {

    const startNewAccount = () => {
        setStartNewAccount(true);
    }
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="row w-100">
                        <div className="col align-self-center " style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
                            Welcome {userAccount.name}
                        </div>
                        <div className="col d-flex justify-content-end align-self-center">
                            <span >Account balance:</span>&nbsp;<span style={{fontWeight:"bold"}}>${userAccount.accountBalanceUsd.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><Link to="/deposit">Deposit</Link></li>
                        <li className="list-group-item"><Link to="/withdraw">Withdraw</Link></li>
                        <li className="list-group-item"><Link to="/alldata">View all Data</Link></li>
                        <li className="list-group-item"><Link onClick={startNewAccount}>Create a new account</Link></li>
                        <li className="list-group-item"><Link onClick={handleLogout}>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default LoginSuccess
