import React from 'react';
//import logo from './logo.svg';
import './assets/sass/App.scss';
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'

const contacts = {
  email: 'urchihe@gmail.com',
  phone: '+2348130148615'
}
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home contacts={contacts}/>
      <Footer/>
    </div>
  );
}

export default App;
