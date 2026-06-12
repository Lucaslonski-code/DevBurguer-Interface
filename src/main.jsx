import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Login } from './containers/Login';
import GlobalStyles from './styles/globalStyles.js';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Login />
    <ToastContainer autoClose={2000} theme='dark' />
  </StrictMode>,
)
