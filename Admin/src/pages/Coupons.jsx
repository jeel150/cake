import React, { useState } from 'react'
import DataTable from '../components/DataTable.jsx'
import Modal from '../components/Modal.jsx'
import { coupons as seed } from '../data/mockData.js'

export default function Coupons(){
  const [rows, setRows] = useState(seed)
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ code:'', discount:'', usage:0, limit:0, active:true })

  const onSave = () => {
    if(!form.code) return alert('Coupon code required')
    setRows(rs => {
      const i = rs.findIndex(r => r.code===form.code)
      if(i>-1){ const copy=[...rs]; copy[i]=form; return copy }
      return [...rs, form]
    })
    setOpen(false)
  }
  const onDelete = (row) => setRows(rs => rs.filter(r => r.code!==row.code))

  return (
    <div className="grid" style={{gap:16}}>
      <div className="card" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h3>Coupons & Discounts</h3>
        <button className="btn" onClick={()=> { setForm({ code:'', discount:'', usage:0, limit:0, active:true }); setOpen(true) }}><i className="fa-solid fa-plus"></i> New Coupon</button>
      </div>
      <DataTable
        columns={[
          { key:'code', label:'Code' },
          { key:'discount', label:'Discount' },
          { key:'usage', label:'Usage' },
          { key:'limit', label:'Limit' },
          { key:'active', label:'Active', render:(v)=> v ? 'Yes':'No' },
          { key:'actions', label:'Actions', render:(_,row)=>(
            <div style={{display:'flex', gap:6}}>
              <button className="btn ghost" onClick={()=> { setForm(row); setOpen(true) }}>Edit</button>
              <button className="btn ghost" onClick={()=> onDelete(row)}><i className="fa-solid fa-trash"></i></button>
            </div>
          ) }
        ]}
        data={rows}
      />

      <Modal open={open} onClose={()=>setOpen(false)} title="Coupon"
        footer={<>
          <button className="btn ghost" onClick={()=>setOpen(false)}>Cancel</button>
          <button className="btn" onClick={onSave}>Save</button>
        </>}
      >
        <div className="grid responsive">
          <div><label className="label">Code</label><input className="input" value={form.code} onChange={e=>setForm({...form, code:e.target.value})}/></div>
          <div><label className="label">Discount</label><input className="input" value={form.discount} onChange={e=>setForm({...form, discount:e.target.value})}/></div>
          <div><label className="label">Usage Limit</label><input type="number" className="input" value={form.limit} onChange={e=>setForm({...form, limit:Number(e.target.value)})}/></div>
          <div><label className="label">Active</label><select className="select" value={form.active} onChange={e=>setForm({...form, active:e.target.value==='true'})}><option value="true">Yes</option><option value="false">No</option></select></div>
        </div>
      </Modal>
    </div>
  )
}
