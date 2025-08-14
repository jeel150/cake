import{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/central.css';
import images from '../data/images';
const { logo } = images;

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('cakes'); // Track active menu item
  const [showToast, setShowToast] = useState(false); // Toast state
  const navigate = useNavigate();

  const handleSearchClick = () => setShowSearch(true);
  const handleCloseSearch = () => setShowSearch(false);
  const handleHeartClick = () => {
    setShowToast(true);
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  const handleBagClick = () => {
    navigate('/checkout');
  };
  const handleUserClick = () => {
    navigate('/contact');
  };
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Handle menu item clicks
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setShowMobileMenu(false);
    
    // You can add navigation logic here based on the menu item
    switch(menuItem) {
      case 'cakes':
        // navigate('/cakes');
        break;
      case 'jars':
        // navigate('/jars');
        break;
      case 'chefs':
        // navigate('/chefs-special');
        break;
      case 'mini-bites':
        // navigate('/mini-bites');
        break;
      case 'customized':
        // navigate('/customized-cake');
        break;
      case 'corporate':
        // navigate('/corporate-events');
        break;
      default:
        break;
    }
  };

  // Close mobile menu when clicking outside and handle body scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMobileMenu && !event.target.closest('.navbar-rb')) {
        setShowMobileMenu(false);
      }
    };

    // Prevent body scroll when mobile menu is open
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [showMobileMenu]);

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notification">
          <div className="toast-content">
            <div className="toast-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 17s-5-3.33-7-6.5C1 8 2.5 5 5.5 5c1.54 0 2.54 1 3.5 2 0.96-1 1.96-2 3.5-2C17.5 5 19 8 17 10.5c-2 3.17-7 6.5-7 6.5z" stroke="#B89B5E" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <span className="toast-message">Nothing is in favourite</span>
            <button className="toast-close" onClick={() => setShowToast(false)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12M4 4L12 12" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <nav className="navbar-rb">
        {/* Floating Searchbar */}
        {showSearch && (
          <div className="floating-searchbar-overlay" onClick={handleCloseSearch}>
            <div className="floating-searchbar" onClick={e => e.stopPropagation()}>
              <input type="text" placeholder="Search cakes, desserts..." autoFocus />
              <button className="close-searchbar" onClick={handleCloseSearch}>&times;</button>
            </div>
          </div>
        )}
        
        {/* Left Symbol/Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Ribbons & Balloons" />
        </div>
        
        {/* Menu Items */}
        <ul className={`navbar-menu ${showMobileMenu ? 'mobile-active' : ''}`}>
          <li 
            className={`navbar-item cakes ${activeMenuItem === 'cakes' ? 'active' : ''}`} 
            onClick={() => handleMenuItemClick('cakes')}
          >
            Cakes
          </li>
          <li 
            className={`navbar-item jars ${activeMenuItem === 'jars' ? 'active' : ''}`} 
            onClick={() => handleMenuItemClick('jars')}
          >
            Jars
          </li>
          <li 
            className={`navbar-item chefs ${activeMenuItem === 'chefs' ? 'active' : ''}`} 
            onClick={() => handleMenuItemClick('chefs')}
          >
            Chef's Special
          </li>
          <li 
            className={`navbar-item mini-bites ${activeMenuItem === 'mini-bites' ? 'active' : ''}`} 
            onClick={() => handleMenuItemClick('mini-bites')}
          >
            Mini Bites
          </li>
          <li 
            className={`navbar-item customized ${activeMenuItem === 'customized' ? 'active' : ''}`} 
            onClick={() => handleMenuItemClick('customized')}
          >
            Customized Cake
          </li>
          <li 
            className={`navbar-item corporate ${activeMenuItem === 'corporate' ? 'active' : ''}`} 
            onClick={() => handleMenuItemClick('corporate')}
          >
            Corporate & events
          </li>
        </ul>
        
        {/* Right Side Icons */}
        <div className="navbar-icons">
          {/* Mobile Menu Toggle - positioned before search */}
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {!showMobileMenu ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="#2A110A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="#2A110A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </div>
          <div className="icon-circle" onClick={handleSearchClick} style={{cursor: 'pointer'}}>
            {/* Search Icon Placeholder */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="7" stroke="#2A110A" strokeWidth="2" />
              <line x1="14.2929" y1="14.7071" x2="18" y2="18.4142" stroke="#2A110A" strokeWidth="2" />
            </svg>
          </div>
          <div className="icon-circle" onClick={handleHeartClick} style={{cursor: 'pointer'}}>
            {/* Heart Icon Placeholder */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 17s-5-3.33-7-6.5C1 8 2.5 5 5.5 5c1.54 0 2.54 1 3.5 2 0.96-1 1.96-2 3.5-2C17.5 5 19 8 17 10.5c-2 3.17-7 6.5-7 6.5z" stroke="#2A110A" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="icon-circle" onClick={handleUserClick} style={{cursor: 'pointer'}}>
            {/* User Icon Placeholder */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="7" r="3" stroke="#2A110A" strokeWidth="2" />
              <path d="M3 17c0-2.21 3.13-4 7-4s7 1.79 7 4" stroke="#2A110A" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="icon-circle" onClick={handleBagClick} style={{cursor: 'pointer'}}>
            {/* Bag Icon Placeholder */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="7" width="12" height="9" rx="2" stroke="#2A110A" strokeWidth="2" />
              <path d="M7 7V5a3 3 0 1 1 6 0v2" stroke="#2A110A" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 