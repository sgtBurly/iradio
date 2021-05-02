import Home from './pages/home';
import Register from './components/register';
import Login from './components/login';
import Navbar from './components/Navbar';
import React from 'react';
import IradioProvider from './contexts/IradioContext';
import { BrowserRouter, Route }from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IradioProvider>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route> 
          <Route exact path="/register">
            <Register/>
          </Route>
          <Login />
        </IradioProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
