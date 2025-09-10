import React, { useMemo, useState } from 'react'

export default function DataTable({ columns, data, onRowClick }){
  const [q, setQ] = useState('')
  const [sort, setSort] = useState({ key:null, dir:'asc' })

  const filtered = useMemo(()=>{
    const base = !q ? data : data.filter(r => JSON.stringify(r).toLowerCase().includes(q.toLowerCase()))
    if(!sort.key) return base
    return [...base].sort((a,b)=>{
      const av = a[sort.key]; const bv = b[sort.key]
      if(av===bv) return 0
      const cmp = av>bv ? 1 : -1
      return sort.dir==='asc' ? cmp : -cmp
    })
  }, [q, data, sort])

  const setSortKey = (key)=>{
    setSort(s => ({ key, dir: s.key===key && s.dir==='asc' ? 'desc':'asc' }))
  }

  return (
    <div className="card">
      <div style={{display:'flex', gap:10, marginBottom:10}}>
        <input className="input" placeholder="Search..." value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key} onClick={()=> setSortKey(col.key)} style={{cursor:'pointer'}}>
                  {col.label}{sort.key===col.key ? (sort.dir==='asc' ? ' ▲':' ▼'):''}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, idx)=> (
              <tr key={idx} onClick={()=> onRowClick && onRowClick(row)} style={{cursor: onRowClick ? 'pointer':'default'}}>
                {columns.map(col => (
                  <td key={col.key}>{col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}</td>
                ))}
              </tr>
            ))}
            {filtered.length===0 && (
              <tr><td colSpan={columns.length} style={{textAlign:'center', padding:20, color:'var(--muted)'}}>No data</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
