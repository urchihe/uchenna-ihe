import React from 'react';
import './assets/sass/App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';

const profile = {
  email: 'urchihe@gmail.com',
  phone: '+2348130148615',
  location: 'Lagos, Nigeria',
};

function App() {
  return (
    <div className="app-shell">
      <Nav />
      <main>
        <Home profile={profile} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
