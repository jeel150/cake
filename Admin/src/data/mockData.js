export const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status:'active', orders: 12, joined: '2024-01-12' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status:'blocked', orders: 3, joined: '2024-03-02' },
  { id: 3, name: 'Mike Ross', email: 'mike@example.com', status:'active', orders: 7, joined: '2024-06-27' },
]

export const products = [
  { id: 101, name: 'Chocolate Cake', sku:'CK-001', price: 499, stock: 23, category: 'Cakes', rating: 4.5 },
  { id: 102, name: 'Vanilla Muffin', sku:'VM-002', price: 149, stock: 5, category: 'Bakery', rating: 4.2 },
  { id: 103, name: 'Strawberry Tart', sku:'ST-003', price: 299, stock: 12, category: 'Dessert', rating: 4.7 },
]

export const orders = [
  { id: 'ORD-1001', user:'John Doe', status:'Pending', total: 1200, date:'2025-08-10' },
  { id: 'ORD-1002', user:'Jane Smith', status:'Shipped', total: 2500, date:'2025-08-11' },
  { id: 'ORD-1003', user:'Mike Ross', status:'Delivered', total: 800, date:'2025-08-12' },
]

export const coupons = [
  { code:'WELCOME10', discount:'10%', usage:23, limit:100, active:true },
  { code:'FREESHIP', discount:'Free Shipping', usage:55, limit:500, active:true },
]

export const reviews = [
  { id:1, product:'Chocolate Cake', user:'John Doe', rating:5, comment:'Amazing!', approved:true },
  { id:2, product:'Vanilla Muffin', user:'Jane Smith', rating:4, comment:'Tasty', approved:false },
]

export const stockLogs = [
  { id:1, product:'Vanilla Muffin', change:-10, reason:'Sale', date:'2025-08-09' },
  { id:2, product:'Chocolate Cake', change:+15, reason:'Restock', date:'2025-08-08' },
]

export const pages = [
  { id:1, title:'About Us', slug:'about', updated:'2025-07-20' },
  { id:2, title:'Privacy Policy', slug:'privacy-policy', updated:'2025-07-18' },
  { id:3, title:'Terms & Conditions', slug:'terms', updated:'2025-07-18' },
  { id:4, title:'FAQ', slug:'faq', updated:'2025-07-15' },
]
