import logo from './logo.svg';
import './App.css';

import BadBankApp from './components/BadBankApp.js';
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
  return (
    <>
      <Router>
        <BadBankNavbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/createaccount">
              <CreateAccount />
            </Route>
            <Route exact path="/deposit">
              <Deposit />
            </Route>
            <Route exact path="/withdraw">
              <Withdraw />
            </Route>
            <Route exact path="/alldata">
              <AllData />
            </Route>
          </Switch>
      </Router>
    </>

  );
}

export default App;
