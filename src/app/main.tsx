import App from './App.tsx';
import './main.scss';

import { createRoot } from 'react-dom/client';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { CartPage } from '../pages/СartPage/CartPage.tsx';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage.tsx';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage.tsx';
import { WrapperAuthPage } from '../pages/WrapperAuthPage/WrapperAuthPage.tsx';
import { AuthPage } from '../pages/AuthPage/index.ts';
import { HomePage } from '../pages/HomePage/HomePage.tsx';

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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>Not found page</p>} />
      </Route>
    </Routes>
  </Router>
);
