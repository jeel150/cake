import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Cake from './Cake.jsx';
import ProductDetails from './ProductDetails.jsx';
import Checkout from './Checkout.jsx';
import './styles/central.css';
import CartSidebar from './CartSidebar.jsx';
import { CartSidebarContext } from './CartSidebarContext';
import images from './images.js';
const { darkChocoImg } = images;
import Course from './course.jsx';
import ViewCourse from './viewcourse.jsx';
import Celebrate from './celebrate.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './SignUp.jsx';
import Login from './Login.jsx';

function MainProvider() {
  const [isCartOpen, setCartOpen] = useState(false);
  // Example cart data
  const cartItems = [
    {
      image: darkChocoImg,
      title: 'Amazing Mousse Medley',
      desc: 'With Egg, 1KG',
      qty: 1,
      price: 150,
    },
    {
      image: darkChocoImg,
      title: 'Amazing Mousse Medley',
      desc: 'With Egg, 1KG',
      qty: 1,
      price: 150,
    },
  ];
  const total = 300;
  const discount = 10;
  const subTotal = 290;
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  return (
    <CartSidebarContext.Provider value={{ openCart, closeCart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cakes" element={<Cake />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
           <Route path="/courses" element={<Course />} />
           <Route path="/viewcourse" element={<ViewCourse />} />
           <Route path="/celebrate" element={<Celebrate />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <CartSidebar
          isOpen={isCartOpen}
          onClose={closeCart}
          cartItems={cartItems}
          total={total}
          discount={discount}
          subTotal={subTotal}
        />
      </BrowserRouter>
    </CartSidebarContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainProvider />
  </React.StrictMode>
);
