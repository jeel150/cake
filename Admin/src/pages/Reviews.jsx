import React, { useState } from 'react'
import DataTable from '../components/DataTable.jsx'
import { reviews as seed } from '../data/mockData.js'

export default function Reviews(){
  const [rows, setRows] = useState(seed)

  const approve = (row, ok) => setRows(rs => rs.map(r => r.id===row.id ? { ...r, approved:ok } : r))
  const remove = (row) => setRows(rs => rs.filter(r => r.id!==row.id))

  return (
    <div className="grid" style={{gap:16}}>
      <div className="card"><h3>Reviews & Ratings</h3></div>
      <DataTable
        columns={[
          { key:'id', label:'ID' },
          { key:'product', label:'Product' },
          { key:'user', label:'User' },
          { key:'rating', label:'Rating' },
          { key:'comment', label:'Comment' },
          { key:'approved', label:'Approved', render:(v)=> v?'Yes':'No' },
          { key:'actions', label:'Actions', render:(_,row)=>(
            <div style={{display:'flex', gap:6}}>
              <button className="btn ghost" onClick={()=> approve(row, true)}>Approve</button>
              <button className="btn ghost" onClick={()=> approve(row, false)}>Reject</button>
              <button className="btn ghost" onClick={()=> remove(row)}><i className="fa-solid fa-trash"></i></button>
            </div>
          ) }
        ]}
        data={rows}
      />
    </div>
  )
}
