import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../pages/Sidebar';
import '../styles/dashboard.css';

const MainLayout = () => {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="layout-content">
        <Navbar />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
