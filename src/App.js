import logo from './logo.svg';
import './App.css';
import React from 'react';


import BadBankNavbar from './components/BadBankNavbar.js';
import WelcomeBar from './components/WelcomeBar.js';
import Home from './components/Home.js';
import Account from './components/Account.js';
import Deposit from './components/Deposit.js';
import Withdraw from './components/Withdraw.js';
import AllData from './components/AllData.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  const newAccountBalance = 20; 
  const [accountList,setAccountList] = React.useState(getInitialAccounts());
  const [userAccount,setUserAccount] = React.useState(false);

  const [startNewAccount,setStartNewAccount] = React.useState(false); 
  const [startNewAccountSuccess,setStartNewAccountSuccess] = React.useState(false); 

  const [withdrawSuccess,setWithdrawSuccess] = React.useState(false);

  const [depositSuccess,setDepositSuccess] = React.useState(false);




  
  const validateLogin = (email,password) =>{
    const account = accountList.find(account=>{
      return account.email === email && account.password ===password ;
    }) ; 

    if(account){
      setUserAccount(account);
      return true;
    }
    else{
      return false;
    }

  }

  const handleLogout = () => {
    setUserAccount(false); 
  }

  const handleNewAccount = (account)=>{
    account.accountId=accountList.length; 
    account['accountBalanceUsd'] = newAccountBalance; 
    
    setAccountList([account,...accountList]);
    // successfully set up the new account, set the state variable to false
    // to render the success card 
    setUserAccount(account); 
    setStartNewAccount(false); 
    setStartNewAccountSuccess(true);
    // alert(JSON.stringify(accountList));
  }

  const handleDeposit = (depositAmountUsd)=>{
    let myAccountList = accountList.slice(); 
    myAccountList.forEach(myAccount=>{
      if(myAccount.email===userAccount.email)
      {
        myAccount.accountBalanceUsd+=Number(depositAmountUsd); 
      }
    });
    setAccountList(myAccountList);
    setDepositSuccess(true); 
 
  };

  const handleWithdraw = (withdrawAmountUsd)=>{
    let myAccountList = accountList.slice(); 
    myAccountList.forEach(myAccount=>{
      if(myAccount.email===userAccount.email)
      {
        myAccount.accountBalanceUsd-=Number(withdrawAmountUsd); 
      }
    });
    setAccountList(myAccountList); 
    setWithdrawSuccess(true); 
  };

  function getInitialAccounts() {
    return (
      [
        { name: "Jane Doe", email: "jane@me.com", password: "Access123", accountId:"0",accountBalanceUsd:newAccountBalance },
        { name: "Peter Parker", email: "peter@mit.edu", password: "Passcode321", accountId:"1",accountBalanceUsd:newAccountBalance },
        { name: "John Smith", email: "john@msn.com", password: "Letmein33", accountId:"2",accountBalanceUsd:newAccountBalance }
      ]
    );

  }
  return (
    <>
      <Router>
        <BadBankNavbar userAccount={userAccount} handleLogout={handleLogout}/>
        {/* <WelcomeBar userAccount={userAccount}/> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/account">
            <Account 
            validateLogin={validateLogin} 
            userAccount={userAccount} 
            handleLogout={handleLogout} 
            handleNewAccount={handleNewAccount}
            startNewAccount={startNewAccount}
            setStartNewAccount={setStartNewAccount}
            startNewAccountSuccess={startNewAccountSuccess}
            setStartNewAccountSuccess={setStartNewAccountSuccess}
            newAccountBalance={newAccountBalance}
            />
          </Route>
          {/* <Route exact path="/deposit">
            <Deposit userAccount={userAccount} handleDeposit={handleDeposit}/>
          </Route> */}
          <Route exact path="/deposit">
            { userAccount && <Deposit userAccount={userAccount} handleDeposit={handleDeposit} depositSuccess={depositSuccess} setDepositSuccess={setDepositSuccess}/> }
            { !userAccount && <Redirect to={{pathname:"/account"}} /> }
          </Route>
          <Route exact path="/withdraw">
          { userAccount && <Withdraw userAccount={userAccount} handleWithdraw={handleWithdraw} withdrawSuccess={withdrawSuccess} setWithdrawSuccess={setWithdrawSuccess} /> }
          { !userAccount && <Redirect to={{pathname:"/account"}} /> } 
          </Route>
          <Route exact path="/alldata">
            <AllData accountList={accountList} />
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
