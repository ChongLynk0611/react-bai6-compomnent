import React from 'react';

import './App.css';
import './css/headerLogin.css'
import './css/loginForm.css'
import HeaderLogin from './components/HeaderLogin'
import LoginForm from './components/LoginForm'
function App() {
  return (
    <div className="App">
      <HeaderLogin />
      <LoginForm />
    </div>
  );
}

export default App;
