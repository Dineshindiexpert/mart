import React from 'react'
import Dashboard from '../pages/dashboard'
import Sidebar from '../components/sidebar'
import { Outlet } from 'react-router-dom'; 


const Layout = () => {
  return (
    <div className="layout-container">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="main-content">
         
       <Outlet />
      </main>
    </div>
  )
}

export default Layout;
