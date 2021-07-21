import React from 'react';
import Button from 'react-bootstrap/Button';


import DepositComponent from './DepositComponent.js';


function Deposit({ userAccount, handleDeposit, depositSuccess, setDepositSuccess }) {
    return (
        <>
            <div className="row w-100">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 pt-4">
                    {!depositSuccess && (
                        <div className="card">
                            <div className="card-header d-flex justify-content-center">
                                <b>Deposit</b>
                            </div>
                            <div className="card-body">
                                <div className="row w-100 mb-4">
                                    <div className="col d-flex justify-content-center">
                                        Current account balance is&nbsp;<b>${userAccount.accountBalanceUsd.toFixed(2)}</b>
                                    </div>
                                </div>
                                <div className="row w-100 mb-4">
                                    <div className="col d-flex justify-content-center">
                                        <DepositComponent handleDeposit={handleDeposit} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                    {depositSuccess && (
                        <div className="card">
                            <div className="card-header d-flex justify-content-center">
                                <b>Deposit success</b>
                            </div>
                            <div className="card-body">
                                <div className="row w-100 mb-4">
                                    <div className="col d-flex justify-content-center">
                                        Current account balance is&nbsp;<b>${userAccount.accountBalanceUsd.toFixed(2)}</b>
                                    </div>
                                </div>
                                <div className="row w-100 mb-4">
                                    <div className="col d-flex justify-content-center">
                                        <Button variant="primary" onClick={() => { setDepositSuccess(false) }}>Ok</Button>
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

export default Deposit

