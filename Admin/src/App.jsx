import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Users from './pages/Users.jsx'
import Products from './pages/Products.jsx'
import Inventory from './pages/Inventory.jsx'
import Orders from './pages/Orders.jsx'
import Coupons from './pages/Coupons.jsx'
import Reviews from './pages/Reviews.jsx'
import Reports from './pages/Reports.jsx'
import CMS from './pages/CMS.jsx'
import Settings from './pages/Settings.jsx'
import AuditLogs from './pages/AuditLogs.jsx'
import AdminCourses from './pages/AdminCourses.jsx'
import CategoryManagement from './pages/CategoryManagement.jsx' 
import ThemeCenter from './pages/themecenter.jsx'
import AdminLogin from './components/AdminLogin.jsx';
import AdminSignup from './components/AdminSignup.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import CoAdminManagement from './pages/CoAdminManagement.jsx';
import AccessChecker from './components/AccessChecker';
import './styles/Sidebar.css'
import './styles/Topbar.css'

export default function App(){
  const [open, setOpen] = useState(false)
  
  return (
    <div className="app">
      <Routes>
        {/* Public admin auth routes */}
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/signup" element={<AdminSignup />} />
        
        {/* Protected admin routes */}
        <Route path="/*" element={
          <ProtectedRoute>
            <AccessChecker /> 
            <div className="app-layout">
              <Sidebar open={open} setOpen={setOpen} />
              <main className="main">
                <Topbar onMenu={() => setOpen(v => !v)} />
                <div className="content">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/coupons" element={<Coupons />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/cms" element={<CMS />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/audit" element={<AuditLogs />} />
                    <Route path="/courses" element={<AdminCourses />} />
                    <Route path="/categories" element={<CategoryManagement />} />
                    <Route path="/theme-center" element={<ThemeCenter />} />
                    <Route path="/co-admins" element={<CoAdminManagement />} />
                   
                    <Route path="*" element={<Navigate to="/usres" replace />} />
                  </Routes>
                </div>
              </main>
            </div>
          </ProtectedRoute>
        } />
        
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Catch all route - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}