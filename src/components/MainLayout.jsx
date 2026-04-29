import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Globe, MessageSquare } from 'lucide-react';
import { ArenaButton } from './ArenaButton';
import './MainLayout.css';

export const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="layout-wrapper">
      <header className={`main-header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="brand-logo">
            <span className="brand-icon">CB</span>
            <span className="brand-text">ARENA</span>
          </Link>

          <nav className="desktop-nav">
            <Link to="/project-nigeria" className="nav-link">Project Nigeria</Link>
            <Link to="/volunteer" className="nav-link">Volunteer App</Link>
            <Link to="/command-centre" className="nav-link">Command Centre</Link>
            <Link to="/chapter" className="nav-link">Chapters</Link>
          </nav>

          <div className="header-actions">
            <Link to="/donate">
              <ArenaButton variant="gold" size="small">Donate</ArenaButton>
            </Link>
            <Link to="/join" className="hidden-mobile">
              <ArenaButton variant="primary" size="small">Join Arena</ArenaButton>
            </Link>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <nav className="mobile-nav-menu">
            <Link to="/" className="mobile-nav-link">Home</Link>
            <Link to="/project-nigeria" className="mobile-nav-link">Project Nigeria</Link>
            <Link to="/volunteer" className="mobile-nav-link">Volunteer App</Link>
            <Link to="/command-centre" className="mobile-nav-link">Command Centre</Link>
            <Link to="/chapter" className="mobile-nav-link">Chapters</Link>
            <Link to="/messaging" className="mobile-nav-link">Messages</Link>
            <Link to="/transparency" className="mobile-nav-link">Transparency Logs</Link>
          </nav>
        </div>
      )}

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="main-footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <h2>City Boy Digital Arena</h2>
            <p>Nigeria's Most Trusted Civic Engagement Infrastructure</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Platform</h4>
              <Link to="/project-nigeria">Project Nigeria</Link>
              <Link to="/command-centre">Intelligence</Link>
              <Link to="/transparency">Accountability</Link>
            </div>
            <div className="footer-col">
              <h4>Participate</h4>
              <Link to="/volunteer">Volunteer Corps</Link>
              <Link to="/donate">Support Movement</Link>
              <Link to="/chapter">Local Chapters</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2026 City Boy Movement. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
