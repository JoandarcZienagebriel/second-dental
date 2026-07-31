import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Star, Clock } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import addis from '../../assets/img/addis.jpg'

export default function LocationSection() {
  return (
    <div className="relative bg-[#353839] ">
      {/* Header */}
      <section className="relative py-12 md:py-20 ">
         
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
           <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center z-10"
                  >
                      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
              OUR LOCATION
                    </h2>
                  </motion.div>
        </div>
      </section>

      {/* Info + Map */}
      <section id='location' className="relative py-24 md:py-[16rem] lg:py-[26rem] xl:py-[34rem] bg-cover bg-center bg-norepeat object-cover" style={{backgroundImage:`URL(${addis})`}}>
 
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {/* Clinic Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-[#000]'
            >
            
              <div className="relative space-y-5 mb-4 p-4 md:pl-[6rem] md:px-[.5rem] lg:pl-[12rem]">
      
                <div className="relative flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm">XQPF+9VH, Rwanda Street, Addis Ababa</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium ">Phone</p>
                    <a href="tel:09336495034" className="text-sm hover:text-[#8E8358] transition-colors">
                      0933 649 5034
                    </a> - <a href="tel:09336495034" className="text-sm hover:text-[#8E8358] transition-colors">
                      0933 649 5034
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                <FaTiktok className="w-5 h-5 mt-0.5 shrink-0 " />
                  <div>
                    <p className="font-medium"><a href="https://www.tiktok.com/@miradental" >TikTok </a></p>
                    
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-sm">Closed · Opens 8:30 AM Wed</p>
                    <p className="text-sm mt-1">Mon–Sat: 8:30 AM – 6:00 PM</p>
                  </div>
                </div>
                </div>
       
              {/* Buttons */}
              <div className="flex flex-col items-center text-center text-[#fff] whitespace-nowrap gap-3 md:flex-row md:gap-6 lg:pl-[6rem]
               ">
               <Link
            to="/booking"
            className="border-b-2 border-[#fff] py-1 text-[1rem] font-semibold md:text-xl md:px-14 hover:text-[#8E8358] hover:border-[#8E8358] transition-all "
          >
           BOOK & SMILE
          </Link>
          <Link
            to="/booking"
            className="border-b-2 border-[#fff] py-1 text-[1rem] font-semibold md:text-xl md:px-14 hover:text-[#8E8358] hover:border-[#8E8358] transition-all"
          >
           CONTACT US
          </Link>
              </div>
            </motion.div>

            {/* Map */}
          
          </div>
        </div>
      </section>
    </div>
  );
}