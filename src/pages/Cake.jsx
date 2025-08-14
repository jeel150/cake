import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { cakeImg,biscoffImg, hazulnutImg, cookieImg, darkChocoImg, cupCakeImg, setImg, sliderImg } = images;
import '../styles/central.css';
import images from '../data/images.js';
import Navbar from '../components/Navbar.jsx';
import CakeCard from '../components/CakeCard.jsx';
import Footer from '../components/Footer.jsx';


function Cake() {
  const cakeData = [
    { id: 1, image: cakeImg, title: 'Decadent Belgian Chocolate Cake Cake', price: 300 },
    { id: 2, image: setImg, title: 'Set', price: 350 },
    { id: 3, image: biscoffImg, title: 'Biscoff', price: 400 },
    { id: 4, image: hazulnutImg, title: 'Hazulnut', price: 320 },
    { id: 5, image: cookieImg, title: 'Cookie', price: 250 },
    { id: 6, image: darkChocoImg, title: 'Dark Choco', price: 450 },
    { id: 7, image: cupCakeImg, title: 'Cup Cake', price: 200 },
    { id: 8, image: setImg, title: 'Set', price: 370 },
    { id: 9, image: sliderImg, title: 'Slider', price: 280 },
    { id: 10, image: cupCakeImg, title: 'Cup Cake', price: 210 },
    { id: 11, image: cakeImg, title: 'Decadent Belgian Chocolate Cake Cake', price: 330 },
    { id: 12, image: biscoffImg, title: 'Biscoff', price: 410 },
  ];
  const [price, setPrice] = useState(80);
  const [categories, setCategories] = useState({
    Chocolate: false,
    Vegan: false,
    Cheesecakes: false,
    'Gluten Free': false,
    'Fruit Cakes': false,
    'Not So Chocolate': false,
  });
  const [sort, setSort] = useState('Latest');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const handleBagClick = (id = 1) => {
    navigate(`/product/${id}`);
  };
  const handleCategoryChange = (cat) => {
    setCategories((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };
  const handleClear = () => {
    setPrice(80);
    setCategories({
      Chocolate: false,
      Vegan: false,
      Cheesecakes: false,
      'Gluten Free': false,
      'Fruit Cakes': false,
      'Not So Chocolate': false,
    });
  };
  const handleSort = (type) => {
    setSort(type);
    setDropdownOpen(false);
  };
  const handleHomeBreadcrumbClick = () => {
    navigate('/');
  };
  let sortedCakes = [...cakeData];
  if (sort === 'Price: Low to High') {
    sortedCakes.sort((a, b) => a.price - b.price);
  } else if (sort === 'Price: High to Low') {
    sortedCakes.sort((a, b) => b.price - a.price);
  }
  return (
    <div className="cake-page-wrapper">
      <Navbar />
      <div className="cake-divider-top"></div>
      <div className="home-breadcrumb" onClick={handleHomeBreadcrumbClick} style={{cursor: 'pointer'}}>Home</div>
      <div className="breadcrumb-arrow">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4.5L10 8.5L6 12.5" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="breadcrumb-current">Cakes</div>
      <h1 className="cakes-title">CAKES</h1>
      <div className="showing-results">Showing 60 Results</div>
      <div className="sort-by-label">Sort by :</div>
      <div className="sort-dropdown">
        <button className="sort-dropdown-btn" onClick={() => setDropdownOpen((o) => !o)}>
          {sort}
          <span className="sort-dropdown-arrow">▼</span>
        </button>
        {dropdownOpen && (
          <ul className="sort-dropdown-menu">
            <li onClick={() => handleSort('Latest')}>Latest</li>
            <li onClick={() => handleSort('Oldest')}>Oldest</li>
            <li onClick={() => handleSort('Price: Low to High')}>Price: Low to High</li>
            <li onClick={() => handleSort('Price: High to Low')}>Price: High to Low</li>
          </ul>
        )}
      </div>
      <div className="cake-divider"></div>
      <div className="cake-main-content">
        <aside className="cake-sidebar">
          <div className="cake-sidebar-header filter-header-with-line">
            <span className="cake-sidebar-title">Filter</span>
            <span className="cake-sidebar-clear" onClick={handleClear} tabIndex={0}>Clear</span>
          </div>
          <div className="cake-sidebar-section">
            <div className="cake-sidebar-label">Price</div>
            <div className="cake-sidebar-slider-row">
              <span className="cake-sidebar-slider-min">AED {price}</span>
              <input type="range" min="80" max="1000" className="cake-sidebar-slider" value={price} onChange={e => setPrice(Number(e.target.value))} />
              <span className="cake-sidebar-slider-max">AED 1000</span>
            </div>
          </div>
          <div className="cake-sidebar-section">
            <div className="cake-sidebar-label categories-label">Categories</div>
            <div className="cake-sidebar-subsection">Cakes</div>
            <div className="cake-sidebar-checkboxes">
              <label><input type="checkbox" checked={categories['Chocolate']} onChange={() => handleCategoryChange('Chocolate')} /> Chocolate</label>
              <label><input type="checkbox" checked={categories['Vegan']} onChange={() => handleCategoryChange('Vegan')} /> Vegan</label>
              <label><input type="checkbox" checked={categories['Cheesecakes']} onChange={() => handleCategoryChange('Cheesecakes')} /> Cheesecakes</label>
              <label><input type="checkbox" checked={categories['Gluten Free']} onChange={() => handleCategoryChange('Gluten Free')} /> Gluten Free</label>
              <label><input type="checkbox" checked={categories['Fruit Cakes']} onChange={() => handleCategoryChange('Fruit Cakes')} /> Fruit Cakes</label>
              <label><input type="checkbox" checked={categories['Not So Chocolate']} onChange={() => handleCategoryChange('Not So Chocolate')} /> Not So Chocolate</label>
            </div>
            <div className="cake-sidebar-option"><span>Jars</span><span className="cake-sidebar-plus">+</span></div>
            <div className="cake-sidebar-option"><span>Chef’s Special</span><span className="cake-sidebar-plus">+</span></div>
            <div className="cake-sidebar-option"><span>Mini Bites</span><span className="cake-sidebar-plus">+</span></div>
            <div className="cake-sidebar-option"><span>Customized Cake</span><span className="cake-sidebar-plus">+</span></div>
            <div className="cake-sidebar-option"><span>Gifts</span><span className="cake-sidebar-plus">+</span></div>
            <div className="cake-sidebar-option"><span>Eid Treats</span><span className="cake-sidebar-plus">+</span></div>
          </div>
        </aside>
        <div className="cake-card-grid">
          {sortedCakes.map((cake) => (
            <CakeCard
              key={cake.id}
              image={cake.image}
              title={cake.title}
              price={cake.price}
              onBagClick={() => handleBagClick(cake.id)}
            />
          ))}
        </div>
      </div>
      <Footer className="footer-cake" />
    </div>
  );
}

export default Cake; 