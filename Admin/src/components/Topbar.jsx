import React from 'react'
import '../styles/Topbar.css'

export default function Topbar({ onMenu }){
  return (
    <header className="topbar">
      <button className="icon-btn" onClick={onMenu} aria-label="Toggle menu">
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className="spacer"></div>
      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search anything..." />
      </div>
      <div className="actions">
        <button className="icon-btn"><i className="fa-regular fa-bell"></i></button>
        <button className="icon-btn"><i className="fa-solid fa-gear"></i></button>
        <div className="avatar">A</div>
      </div>
    </header>
  )
}
