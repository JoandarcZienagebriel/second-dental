import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export default function Footer() {
  return (
    <footer className="bg-black text-[#F5F5F4]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
          {/* Brand */}
          <div className='flex flex-col items-center mb-4 lg:flex-row items-start lg:gap-[10rem] xl:gap-[14rem]'>
         <div>
              <span className="font-heading text-4xl mb-4 font-semibold text-white">Dental Clinic</span>
           
            <p className="text-sm mb-2 text-[#F5F5F4] leading-relaxed whitespace-nowrap">
              Compassion, Expertise, and Commitment.
            </p>
            </div>
            <div className="flex flex-col max-w-7xl px-6 pt-3 pb-1 gap-4 lg:flex-row lg:gap-10">
        <a
          href="tel:09336495034"
          className="flex items-center gap-2 border border-[#fff] px-6 py-2.5 md:text-sm xl:text-[1rem] font-medium text-[#fff] hover:bg-[#132a13] hover:[#132a13] hover:text-white hover:rounded-3xl transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          0933 649 5034
        </a>
        <Link
          to="/booking"
          className="border border-[#4f772d] rounded-lg bg-[#4f772d] text-white text-center px-6 py-2.5 md:px-4 py-3 lg:px-6 py-3 md:text-sm xl:text-[1rem] font-semibold hover:bg-[#132a13] hover:border-[#132a13] hover:rounded-3xl transition-colors"
        >
          Book & Smile
        </Link>
      </div>
          </div>
          
<div className='sm:grid grid-cols-1 md:grid grid-cols-2 justify-center items-center'>
          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2.5 mb-8">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Location', path: '/location' },
                { label: 'Book Appointment', path: '/booking' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-[#F5F5F4] hover:text-[#1E3A8A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:0936495034" className="flex items-start gap-2.5 text-sm text-[#F5F5F4] hover:text-[#355097] transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                0933 649 5034
              </a>
              <div className="flex items-start gap-2.5 text-sm text-[#F5F5F4]">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                XQPF+9VH, Rwanda Street, Addis Ababa
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#F5F5F4]">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                Mon–Sat: 8:30 AM – 6:00 PM
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#F5F5F4]/20 text-center">
          <p className="text-xs text-[#F5F5F4]">
            © {new Date().getFullYear()} Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}