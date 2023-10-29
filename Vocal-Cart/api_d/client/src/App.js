import React from 'react';
import { BrowserRouter as BrowserRouterRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import AboutPage from './About';
import ContactPage from './Contact';
import SignIn from './SignIn';
import SignUp from './SignUp';

const App = () => {

  

  return (

    
    <BrowserRouterRouter>
      <div className="App">


        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouterRouter>
  );
};

export default App;
