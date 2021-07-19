import React from 'react';
import Login from './Login.js'
import LoginSuccess from './LoginSuccess.js'
import StartNewAccount from './StartNewAccount.js'
import StartNewAccountSuccess from './StartNewAccountSuccess.js'


function Account({validateLogin,userAccount,handleLogout,handleNewAccount,startNewAccount,setStartNewAccount,startNewAccountSuccess,setStartNewAccountSuccess,newAccountBalance}){
    // const [startNewAccount,setStartNewAccount] = React.useState(false); 
    return(
        <>
            {/* <h2>Create Account</h2> */}
            <div className="row w-100">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 pt-4">
                    {!userAccount && !startNewAccount && !startNewAccountSuccess && <Login validateLogin={validateLogin} setStartNewAccount={setStartNewAccount}/>}
                    {userAccount && !startNewAccount && !startNewAccountSuccess && <LoginSuccess userAccount={userAccount} handleLogout={handleLogout} setStartNewAccount={setStartNewAccount}/>}
                    {startNewAccount && <StartNewAccount handleNewAccount={handleNewAccount} setStartNewAccount={setStartNewAccount}/>}
                    {startNewAccountSuccess && <StartNewAccountSuccess userAccount={userAccount} setStartNewAccountSuccess={setStartNewAccountSuccess} newAccountBalance={newAccountBalance}/> }
                </div>
                <div className="col-lg-3"></div>

            </div>
        </>
    )
}

export default Account

