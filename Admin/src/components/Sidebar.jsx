import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Sidebar.css'

const NavItem = ({ to, icon, label, onClick }) => (
  <NavLink to={to} className={({isActive}) => 'nav-item' + (isActive ? ' active' : '')} onClick={onClick}>
    <i className={`fa-solid ${icon}`}></i>
    <span>{label}</span>
  </NavLink>
)

export default function Sidebar({ open, setOpen }){
  return (
    <aside className={'sidebar' + (open ? ' open':'')}>
      <div className="brand">
        <i className="fa-solid fa-cubes"></i>
        <span>Admin Panel</span>
      </div>
      <nav className="nav">
        <NavItem to="/dashboard" icon="fa-chart-line" label="Dashboard" onClick={()=>setOpen(false)} />
        <NavItem to="/users" icon="fa-users" label="User Management" onClick={()=>setOpen(false)} />
        <NavItem to="/products" icon="fa-boxes-stacked" label="Product Management" onClick={()=>setOpen(false)} />
        <NavItem to="/inventory" icon="fa-warehouse" label="Inventory Management" onClick={()=>setOpen(false)} />
        <NavItem to="/orders" icon="fa-clipboard-list" label="Manual Orders" onClick={()=>setOpen(false)} />
        <NavItem to="/coupons" icon="fa-ticket" label="Coupons & Discounts" onClick={()=>setOpen(false)} />
        <NavItem to="/reviews" icon="fa-star" label="Reviews & Ratings" onClick={()=>setOpen(false)} />
        <NavItem to="/reports" icon="fa-chart-pie" label="Reports & Analytics" onClick={()=>setOpen(false)} />
        <NavItem to="/cms" icon="fa-feather" label="Content Management" onClick={()=>setOpen(false)} />
        <NavItem to="/settings" icon="fa-gear" label="Settings" onClick={()=>setOpen(false)} />
        <NavItem to="/audit" icon="fa-user-shield" label="Audit & Logs" onClick={()=>setOpen(false)} />
        <NavItem to="/courses" icon="fa-book" label="Courses Management" onClick={()=>setOpen(false)} />
        <NavItem to="/categories" icon="fa-list" label="Category Management" onClick={() => setOpen(false)} />
        <NavItem to="/theme-center" icon="fa-list" label="theme center" onClick={() => setOpen(false)} />
        <NavItem to="/co-admins" icon="fa-user-shield" label="Co-Admin Management" onClick={()=>setOpen(false)} />
        

      </nav>
    </aside>
  )
}
