import React from 'react';
import './App.css';
import Header from './comps/header';
import CreateContatct from './comps/createCont';
import ContactsCards from './comps/contactsCards';
import EditContatct from './comps/editContact';
import CountContacts from './comps/countContacts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ContactsCards} />
          <Route exact path="/add" component={CreateContatct} />
          <Route exact path="/edit" component={EditContatct} />
          <Route exact path="/count" component={CountContacts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
