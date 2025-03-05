import React from 'react';
import './assets/sass/App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';

const contacts = {
    email: 'urchihe@gmail.com',
    phone: '+2348130148615'
};
const appName = 'UCHENNA IHE';
const d = new Date();
const year = d.getFullYear();

function App() {
    return (
        <div className="App" style={{ padding: '10px' }}>
            <Nav appName={appName} />
            <main style={{ padding: '80px 0' }}>
                <Home contacts={contacts} />
            </main>
            <Footer year={year} />
        </div>
    );
}

export default App;
