const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Initiatives' },
    { id: 'contact', label: 'Get Involved' }
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => handleNavClick('home')}>
        <i className="fa-solid fa-leaf"></i> NatureGuard
      </div>
      
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <li 
            key={item.id} 
            className={currentPage === item.id ? 'active' : ''}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};
