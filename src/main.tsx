import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './routes/index.tsx';

import './index.css';
import Footer from './components/footer/footer.tsx';
import { Navbar } from './components/navbar/navbar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Router />
    <Footer />
  </StrictMode>
);
