import React from 'react';
import WithdrawComponent from './WithdrawComponent.js';
import Button from 'react-bootstrap/Button';
import {
    Link
} from "react-router-dom";

function Withdraw({userAccount,handleWithdraw,withdrawSuccess,setWithdrawSuccess}){
    
    return(
        <>
            <div className="row w-100">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 pt-4">
                { !withdrawSuccess && ( 
                <div className="card">
                    <div className="card-header d-flex justify-content-center">
                        <b>Withdraw</b>
                    </div>
                    <div className="card-body">
                        <div className="row w-100 mb-4">
                            <div className="col d-flex justify-content-center">
                                Current account balance is&nbsp;<b>${userAccount.accountBalanceUsd.toFixed(2)}</b> 
                            </div>
                        </div>
                        <div className="row w-100 mb-4">
                            <div className="col d-flex justify-content-center">
                                {/* <DepositComponent handleDeposit={handleDeposit}/> */}
                                <WithdrawComponent handleWithdraw={handleWithdraw} accountBalance={userAccount.accountBalanceUsd} />
                            </div>
                        </div>

                    </div>
                </div>
                )}
                {withdrawSuccess && (
                    <div className="card">
                    <div className="card-header d-flex justify-content-center">
                        <b>Withdraw success</b>
                    </div>
                    <div className="card-body">
                        <div className="row w-100 mb-4">
                            <div className="col d-flex justify-content-center">
                                Current account balance is ${userAccount.accountBalanceUsd.toFixed(2)}. 
                            </div>
                        </div>
                        <div className="row w-100">
                            {/* <div className="col">
                                <Link to="/account" className="btn btn-primary">Ok</Link>
                            </div> */}
                            <div className="col d-flex justify-content-center">
                                <Button variant="primary" onClick={()=>{setWithdrawSuccess(false)}}>Ok</Button>
                            </div>
                        </div>

                    </div>
                </div>

                )}
            </div>
            <div className="col-lg-3"></div>

            </div>
        </>
    )
}

export default Withdraw

