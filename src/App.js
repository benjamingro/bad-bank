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
  Link
} from "react-router-dom";

function App() {
  const [accountList,setAccountList] = React.useState(getInitialAccounts());
  const [userAccount,setUserAccount] = React.useState(false);

  const [startNewAccount,setStartNewAccount] = React.useState(false); 
  const [startNewAccountSuccess,setStartNewAccountSuccess] = React.useState(false); 

  
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

    setAccountList([account,...accountList]);
    // successfully set up the new account, set the state variable to false
    // to render the success card 
    setUserAccount(account); 
    setStartNewAccount(false); 
    setStartNewAccountSuccess(true);
  }

  function getInitialAccounts() {
    return (
      [
        { name: "Jane Doe", email: "jane@me.com", password: "Access123", accountId:"0" },
        { name: "Peter Parker", email: "peter@mit.edu", password: "Passcode321", accountId:"1" },
        { name: "John Smith", email: "john@msn.com", password: "Letmein33", accountId:"2" }
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

            />
          </Route>
          <Route exact path="/deposit">
            <Deposit />
          </Route>
          <Route exact path="/withdraw">
            <Withdraw />
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
