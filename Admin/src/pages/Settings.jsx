import React, { useState } from 'react'

export default function Settings(){
  const [store, setStore] = useState({ name:'My Store', email:'support@example.com', phone:'+91 99999 99999', currency:'INR', tax:18 })
  const [stripe, setStripe] = useState({ publishable:'pk_test_xxx', secret:'sk_test_xxx' })
  const [emailTpl, setEmailTpl] = useState({ order:'Thank you for your order!', ship:'Your order has shipped.' })
  const [push, setPush] = useState({ enabled:true })
  const [roles, setRoles] = useState({ admin:true, manager:true, support:true })

  const save = () => alert('Settings saved (simulated)')

  return (
    <div className="grid" style={{gap:16}}>
      <div className="grid cols-2">
        <div className="card">
          <h3>General Store Settings</h3>
          <div className="grid responsive">
            <div><label className="label">Store Name</label><input className="input" value={store.name} onChange={e=>setStore({...store, name:e.target.value})}/></div>
            <div><label className="label">Support Email</label><input className="input" value={store.email} onChange={e=>setStore({...store, email:e.target.value})}/></div>
            <div><label className="label">Phone</label><input className="input" value={store.phone} onChange={e=>setStore({...store, phone:e.target.value})}/></div>
            <div><label className="label">Currency</label><input className="input" value={store.currency} onChange={e=>setStore({...store, currency:e.target.value})}/></div>
            <div><label className="label">Tax Rate (%)</label><input type="number" className="input" value={store.tax} onChange={e=>setStore({...store, tax:Number(e.target.value)})}/></div>
          </div>
        </div>
        <div className="card">
          <h3>Stripe API Keys</h3>
          <div className="grid responsive">
            <div><label className="label">Publishable Key</label><input className="input" value={stripe.publishable} onChange={e=>setStripe({...stripe, publishable:e.target.value})}/></div>
            <div><label className="label">Secret Key</label><input className="input" value={stripe.secret} onChange={e=>setStripe({...stripe, secret:e.target.value})}/></div>
          </div>
          <p style={{color:'var(--muted)', marginTop:8}}>Keep keys secure. Do not expose the secret key in frontend for production.</p>
        </div>
      </div>

      <div className="grid cols-2">
        <div className="card">
          <h3>Email Templates</h3>
          <div className="grid responsive">
            <div style={{gridColumn:'1 / -1'}}><label className="label">Order Confirmation</label><textarea className="textarea" rows="4" value={emailTpl.order} onChange={e=>setEmailTpl({...emailTpl, order:e.target.value})}/></div>
            <div style={{gridColumn:'1 / -1'}}><label className="label">Shipping Update</label><textarea className="textarea" rows="4" value={emailTpl.ship} onChange={e=>setEmailTpl({...emailTpl, ship:e.target.value})}/></div>
          </div>
        </div>
        <div className="card">
          <h3>Push Notifications</h3>
          <label style={{display:'flex', alignItems:'center', gap:8}}>
            <input type="checkbox" checked={push.enabled} onChange={e=>setPush({enabled:e.target.checked})} />
            Enable push notifications
          </label>

          <h3 style={{marginTop:16}}>Role-based Access</h3>
          <div style={{display:'flex', gap:14}}>
            <label><input type="checkbox" checked={roles.admin} onChange={e=>setRoles({...roles, admin:e.target.checked})}/> Admin</label>
            <label><input type="checkbox" checked={roles.manager} onChange={e=>setRoles({...roles, manager:e.target.checked})}/> Manager</label>
            <label><input type="checkbox" checked={roles.support} onChange={e=>setRoles({...roles, support:e.target.checked})}/> Support</label>
          </div>
        </div>
      </div>

      <div style={{display:'flex', justifyContent:'flex-end'}}>
        <button className="btn" onClick={save}><i className="fa-solid fa-floppy-disk"></i> Save Settings</button>
      </div>
    </div>
  )
}
