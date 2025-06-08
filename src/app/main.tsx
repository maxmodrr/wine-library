import App from './App.tsx';
import './main.scss';

import { createRoot } from 'react-dom/client';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { CartPage } from '../pages/СartPage';
import { ProfilePage } from '../pages/ProfilePage';
import { RegisterPage } from '../pages/RegisterPage';
import { WrapperAuthPage } from '../pages/WrapperAuthPage';
import { AuthPage } from '../pages/AuthPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth" element={<WrapperAuthPage />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<AuthPage />} />
        </Route>
        <Route path="/about-us" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>Not found page</p>} />
      </Route>
    </Routes>
  </Router>
);
