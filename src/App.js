import logo from './logo.svg';
import './App.css';
import React from 'react';


import BadBankNavbar from './components/BadBankNavbar.js';
import Home from './components/Home.js';
import CreateAccount from './components/CreateAccount.js';
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
  // const [userLoggedIn,setUserLoggedIn] = React.useState(false);
  const [userAccountId,setUserAccountId] = React.useState(false);
  const validateLogin = (email,password) =>{
    const account = accountList.find(account=>{
      return account.email === email && account.password ===password; 
    }) ? true : false; 

    // return true;
  }


  function getInitialAccounts() {
    return (
      [
        { name: "Jane Doe", email: "jane@me.com", password: "Access123", accountId:"0" },
        { name: "Peter Parker", email: "peter@mit.edu", password: "Passcode321", accountId:"1" },
        { name: "John Smith", email: "john@msn.com", password: "Letmein33", accountId:"2" }
      ]
    );

    
    // return (
    //   [{ account: { name: "Jane Doe", email: "jane@me.com", password: "Access123" } },
    //   { account: { name: "Peter Parker", email: "peter@mit.edu", password: "Passcode321" } },
    //   { account: { name: "John Smith", email: "john@msn.com", password: "Letmein33" } },

    //   ]
    // );
  }
  return (
    <>
      <Router>
        <BadBankNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/createaccount">
            <CreateAccount validateLogin={validateLogin}/>
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
