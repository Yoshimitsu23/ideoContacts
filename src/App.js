import React from 'react';
import './App.css';
import Header from './comps/header';
import CreateContatct from './comps/createCont';
import ContactsCards from './comps/contactsCards';

function App() {
  return (
    <div>
      <Header />
      <CreateContatct />
      {/* <ContactsCards /> */}
    </div>
  );
}

export default App;
