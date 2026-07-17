import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { IMAGES } from '@/lib/images';
const NAV_ITEMS = [
   { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Location', path: '/location' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (menuRef.current?.contains(e.target)) return;
      if (btnRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#132a13]/90 backdrop-blur-md border-b border-[#DDD6CE]/40">
      {/* Desktop top bar */}
      <div className="hidden md:flex items-center justify-end max-w-7xl mx-auto px-6 pt-3 pb-1 gap-4">
        <a
          href="tel:09336495034"
          className="flex items-center gap-2 border border-white px-6 py-2.5 md:text-sm xl:text-[1rem] font-medium text-white hover:bg-[z] hover:text-white hover:rounded-3xl transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          0933 649 5034
        </a>
        <Link
          to="/booking"
          className="border border-[#4f772d] rounded-lg bg-[#4f772d] text-white px-6 py-2.5 md:px-4 py-3 lg:px-6 py-3 md:text-sm xl:text-[1rem] font-semibold hover:bg-[#4f772d] hover:rounded-3xl transition-colors"
        >
          Book & Smile
        </Link>
      </div>

      {/* Main navbar */}
      <nav className="max-w-7xl mx-auto px-6 md:px-1 md:mx-[10px] h-16 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {/* Mobile hamburger */}
          <button
            ref={btnRef}
            onClick={() => setOpen(!open)}
            className="md:hidden p-0 -ml-2 text-[#0F1A20]"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link to="/" className="flex items-center gap-1">
           
            <span className="font-logo text-base whitespace-nowrap pr-4 md:text-2xl lg:text-4xl font-semibold text-[white]">
              <a href='/'>Dental Clinic</a>
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[1rem] text-white transition-colors font-medium lg:text-[1rem] hover:text-[#4f772d] ${
                location.pathname === item.path ? 'text-[#1E3A8A]' : 'text-[#0F1A20]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile phone + book */}
        <div className="flex md:hidden items-center gap-1">
          <a
            href="tel:09336495034"
            className="border border-white p-2 text-white"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" />
          </a>
          <Link
            to="/booking"
            className="border border-[#4f772d] whitespace-nowrap rounded-md bg-[#4f772d] text-white px-2 py-2 text-xs font-semibold"
          >
            Book & Smile
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-full left-0 right-0 bg-[#FAF9F7] border-b border-[#DDD6CE] shadow-lg"
        >
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-[#4f772d]/10 text-[#4f772d]'
                    : 'text-[#0F1A20] hover:bg-[#F5F5F4]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:36495034"
              className="flex items-center gap-2 px-4 py-3 text-base font-medium text-[#0F1A20] hover:bg-[#1E3A8A] rounded-md"
            >
              <Phone className="w-4 h-4" />
             09336495034
            </a>
          </div>
        </div>
      )}
    </header>
  );
}