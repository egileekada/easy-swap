import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import { GoogleAuthProvider } from './config/useGoogleAuth';

function App() {

  const router = createBrowserRouter(
    // I used the App as the home path to be changed when the homepage is created
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path='/signin' element={<LoginPage />} />
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
