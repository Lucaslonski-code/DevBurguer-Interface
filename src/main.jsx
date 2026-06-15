import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { router } from './routes/index.jsx';
import { RouterProvider } from 'react-router-dom';

import GlobalStyles from './styles/globalStyles.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme='dark' />
    <RouterProvider router={router} />
  </StrictMode>,
)

