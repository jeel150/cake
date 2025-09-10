import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
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
import './styles/Sidebar.css'
import './styles/Topbar.css'

export default function App(){
  const [open, setOpen] = useState(false)
  return (
    <div className="app">
      <Sidebar open={open} setOpen={setOpen} />
      <main className="main">
        <Topbar onMenu={()=> setOpen(v=>!v)} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/inventory" element={<Inventory/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/coupons" element={<Coupons/>} />
            <Route path="/reviews" element={<Reviews/>} />
            <Route path="/reports" element={<Reports/>} />
            <Route path="/cms" element={<CMS/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/audit" element={<AuditLogs/>} />
            <Route path="/courses" element={<AdminCourses/>} />
            <Route path="/categories" element={<CategoryManagement />} />
            <Route path='/theme-center' element={<ThemeCenter/>}/>

          </Routes>
        </div>
      </main>
    </div>
  )
}
