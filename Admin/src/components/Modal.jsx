import React from 'react'

export default function Modal({ open, title, onClose, children, footer }){
  if(!open) return null
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="icon-btn" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div>{children}</div>
        {footer && <div style={{marginTop:12, display:'flex', gap:10, justifyContent:'flex-end'}}>{footer}</div>}
      </div>
    </div>
  )
}
