// src/components/Navbar.tsx
import React, { useState } from 'react';
import "./styles.scss"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false)
  };

  return (
    <nav className="navbar">
      <div className="navbar-hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <button onClick={() => scrollToSection('start')}>Home</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('services')}>About</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
