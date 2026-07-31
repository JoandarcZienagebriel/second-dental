import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { IMAGES } from '@/lib/images';
const NAV_ITEMS = [
   { label: 'Home', path: '#hero' },
  { label: 'About', path: '#about' },
  { label: 'Services', path: '#service' },
  { label: 'Location', path: '#location' },
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
    <header className="lg:fixed top-0 left-0 right-0 z-50 bg-[#F5F5F5] lg:backdrop-blur-md border-b border-[#DDD6CE]/40 ">
      {/* Desktop top bar */}
      <div className="hidden lg:flex items-center justify-end max-w-7xl mx-auto md:pr-4 gap-4 lg:pr-8">
         <Link
          to="/booking"
          className="flex items-center px-6 py-2.5 md:px-4 lg:px-6"
        >
           <MapPin className="w-3 h-3 text-[#010B13] mt-0.5 shrink-0" />
           <p className="text-[#010B13] text-sm ">XQPF+9VH, Rwanda Street, Addis Ababa</p>
                 
        </Link>
        <a
          href="tel:09336495034"
          className="flex items-center  text-sm gap-2px-6 py-2.5 text-[#010B13] transition-colors"
        >
          <Phone className="w-3 h-3" />
          0933 649 5034
        </a>
       
      </div>
       

      {/* Main navbar */}
      <nav className="h-16 w-auto mx-0 flex items-center justify-between p-4">
       
         

          <Link to="/" className="">
           
            <span className="font-logo text-base text-center md:text-2xl lg:text-4xl font-semibold text-[#353839]">
              <a href='/'>Dental Clinic</a>
            </span>
          </Link>
          <div className="fixed top-0 right-0 z-50 lg:hidden">
         {/* Mobile hamburger */}
          <button
            ref={btnRef}
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#0F1A20] bg-white p-5"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
         
        </div>
      

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 md:pr-4 lg:pr-8 xl:pr-[9rem]">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[1rem] text-[#010B13] transition-colors font-medium lg:text-[1rem] hover:font-bold ${
                location.pathname === item.path ? 'text-[#010B13]' : 'text-[#010B13]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile phone + book */}
       
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          ref={menuRef}
          className="lg:hidden fixed z-50 left-0 right-0 bg-[#FAF9F7] border-b border-[#DDD6CE] shadow-lg"
        >
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 border-b-2 text-base font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-[#4f772d]/10 text-[#010B13]'
                    : 'text-[#010B13] hover:bg-[#F5F5F4]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:36495034"
              className="flex items-center border-b-2 gap-2 px-4 py-3 text-base font-medium text-[#010B13] rounded-md"
            >
              <Phone className="w-4 h-4" />
             09336495034
            </a>
              <Link
          to="/booking"
          className="flex items-start border-b-2 gap-2 px-4 py-3"
        >
           <MapPin className="w-4 h-4 text-[#010B13]" />
           <p className="text-[#010B13] text-base font-medium">XQPF+9VH, Rwanda Street, Addis Ababa</p>
                 
        </Link>
          </div>
        </div>
      )}
    </header>
  );
}