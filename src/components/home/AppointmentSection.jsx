import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



export default function AppointmentSection() {
  return (
  
      <section className="relative py-12 md:py-20 bg-[#1F2122] ">
         
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
           <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center z-10"
                  >
                     <h3 className="font-heading text-2xl pb-2 font-semibold text-white md:text-3xl">
             DENTAL CLINIC
                    </h3>
                    <p className="text-white text-xs font-normal tracking-widest uppercase mb-6 pl-4 pr-4">
                       Today, Dental serves hundreds of families across Addis Ababa, from children experiencing their first dental visit to adults seeking life-changing cosmetic procedures.
             
                    </p>
                    <Link
            to="/booking"
            className="border-b-2 border-white text-white py-1 pb-0 text-[1rem] font-semibold md:text-md md:px-14 hover:text-[#8E8358] hover:border-[#8E8358] transition-all"
          >
           BOOK & SMILE
          </Link>
                   
                  </motion.div>
        </div>
      </section>
      )}