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
import TransactionPage from './pages/TransactionPage';
import BankPage from './pages/BankPage';
import Settings from './pages/Settings';
import DisputePage from './pages/DisputesPage';
import PrivacyPolicy from './pages/PrivacyPolicyPage';
import { UserContextProvider } from './context/userContext';
import { GoogleAuthProvider } from './context/useGoogleAuth';
import Verification from './pages/Verification';
import PaymentDetails from './components/SellCrytoComponent/PaymentDetails';
import LegalMatters from './pages/Legal-Matters';
import TermOfService from './pages/Legal-Matters/termsofservice';
import Policy from './pages/Legal-Matters/policy';
import KycPolicy from './pages/Legal-Matters/kyc-policy';

function App() {
  return ( 
    <UserContextProvider>
      <GoogleAuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/privacy-policy" element={<Policy />} /> 
            <Route path="/kyc-policy" element={<KycPolicy />} /> 
            <Route path="/legal-matters" element={<LegalMatters />} />
            <Route path="/termofservice" element={<TermOfService />} />
            <Route path="/signin" element={<LoginPage />} /> 
            <Route path="/signup" element={<RegisterPage />} /> 
            <Route path="/verifyemail" element={<VerifyEmail />} /> 
            <Route path="/resetpwd" element={<ResetPwdPage />} /> 
            <Route path="/dashboard" element={<DashboardLayout />} > 
              <Route path="/dashboard" element={<Dashboard />} /> 
              <Route path="/dashboard/sellcrypto" element={<SellCryptoPage />} /> 
              <Route path="/dashboard/tnxinfo" element={<PaymentDetails />} /> 
              <Route path="/dashboard/transactionshistory" element={<TransactionPage />} /> 
              <Route path="/dashboard/banks" element={<BankPage />} /> 
              <Route path="/dashboard/support" element={<DisputePage />} />
              <Route path="/dashboard/settings" element={<Settings />} />
              <Route path="/dashboard/verification" element={<Verification />} />
            </Route>
          </Routes>
        </Router>
      </GoogleAuthProvider>
    </UserContextProvider>
  );
}

export default App;
