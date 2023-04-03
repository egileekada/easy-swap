import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import VerifyEmail from './pages/VerifyEmail';
import LoginPage from './pages/LoginPage';
import ResetPwdPage from './pages/ResetPwdPage';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './components/DashboardLayout';
import SellCryptoPage from './pages/SellCryptoPage';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/signin" element={<LoginPage />} /> 
        <Route path="/signup" element={<RegisterPage />} /> 
        <Route path="/verifyemail" element={<VerifyEmail />} /> 
        <Route path="/resetpwd" element={<ResetPwdPage />} /> 
        <Route path="/dashboard" element={<DashboardLayout />} > 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/dashboard/sellcrypto" element={<SellCryptoPage />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
