import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import { GoogleAuthProvider } from './config/useGoogleAuth';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './page/Dashboard';
import SellCryptoPage from './page/SellCryptoPage';
import PaymentDetails from './page/PaymentDetails';
import DisputePage from './page/DisputesPage';
import Settings from './page/Settings';
import Verification from './page/Verification';
import BankPage from './page/BankPage';
import About from './page/About';
import LegalMatters from './page/Legal-Matters';
import KycPolicy from './page/Legal-Matters/kyc-policy';
import Policy from './page/Legal-Matters/policy';
import TermOfService from './page/Legal-Matters/termsofservice';
import RegisterPage from './page/RegisterPage';
import ResetPwdPage from './page/ResetPwdPage';
import VerifyEmail from './page/VerifyEmail'; 

function App() { 
  

  const router = createBrowserRouter(
    // I used the App as the home path to be changed when the homepage is created
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path='/signin' element={<LoginPage />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/kyc-policy" element={<KycPolicy />} />
        <Route path="/legal-matters" element={<LegalMatters />} />
        <Route path="/about" element={<About />} />
        <Route path="/termofservice" element={<TermOfService />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/resetpwd" element={<ResetPwdPage />} />
        <Route path="/dashboard" element={<DashboardLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/sellcrypto" element={<SellCryptoPage />} />
          <Route path="/dashboard/banks" element={<BankPage />} />
          <Route path="/dashboard/transactionshistory" element={<Dashboard />} />
          <Route path="/dashboard/support" element={<DisputePage />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/verification" element={<Verification />} />
        </Route>
        <Route path="/tnxinfo" element={<DashboardLayout />} >
          <Route index element={<PaymentDetails />} />
        </Route>
      </Route>
    )
  );

  return (
    <GoogleAuthProvider> 
      <RouterProvider router={router} />
    </GoogleAuthProvider>
  )
}

export default App
