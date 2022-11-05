import React from "react";
import Home from "./pages/Home";
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import MainLayout from "./layouts/MainLayout";
import NotFoundBlock from "./components/NotFoundBlock";

const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFoundBlock />} />
        </Route>
    </Routes>
  );
}

export default App;
