import App from './App.tsx';
import './main.scss';

import { createRoot } from 'react-dom/client';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { CartPage } from '../pages/СartPage/CartPage.tsx';
import { AuthPage } from '../pages/AuthPage/AuthPage.tsx';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage.tsx';

createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth">
          <Route path=":register" element={<AuthPage />} />
          <Route path=":login" element={<AuthPage />} />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>Not found page</p>} />
      </Route>
    </Routes>
  </Router>
);
