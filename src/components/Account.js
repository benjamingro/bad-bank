import React from 'react';
import Login from './Login.js'
import LoginSuccess from './LoginSuccess.js'
import StartNewAccount from './StartNewAccount.js'


function Account({validateLogin,userAccount,handleLogout,handleNewAccount}){
    const [startNewAccount,setStartNewAccount] = React.useState(false); 
    const [startNewAccountSuccess,setStartNewAccountSuccess] = React.useState(false); 
    return(
        <>
            {/* <h2>Create Account</h2> */}
            <div className="row w-100">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    {!userAccount && !startNewAccount && <Login validateLogin={validateLogin} setStartNewAccount={setStartNewAccount}/>}
                    {userAccount && !startNewAccount && <LoginSuccess userAccount={userAccount} handleLogout={handleLogout} setStartNewAccount={setStartNewAccount}/>}
                    {startNewAccount && <StartNewAccount handleNewAccount={handleNewAccount} setStartNewAccount={setStartNewAccount}/>}
                </div>
                <div className="col-lg-3"></div>

            </div>
        </>
    )
}

export default Account

