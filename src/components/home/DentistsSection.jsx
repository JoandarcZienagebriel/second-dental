import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/images';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/servicesData';
import land from '../../assets/img/landbg.jpg';


export default function DentistsSection() {
  return (
    <section className="relative py-16 bg-cover bg-no-repeat md:py-24 " style={{backgroundImage:`url(${land})`}}>
       <div className='absolute inset-0 bg-[#fff]/90'></div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 z-10"
        >
          <p className="text-[#4f772d] text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-[#353238]">
            Our Dental Services
          </h2>
        </motion.div>

 {/* Services grid */}
      <section className="py-8 md:py-12">
       
          <div className='lg:overflow-x-auto hide-scrollbar'>
          <div className="mx-auto lg:flex gap-8">
            {SERVICES.map((service, i) => (

              <div
               
                className={`grid grid-cols-1 items-center text-[#353238] mb-8 lg:w-[25rem] flex-shrink-0 bg-[#fefae0] border-2 border-[#4f772d] rounded-br-[8rem] p-6 `}
              >
              
                  <h2 className="font-heading text-2xl md:text-xl font-semibold mb-4">
                    {service.title}
                  </h2>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[16rem] md:h-[20rem] object-cover"
                  />
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2 mt-4 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Book this service
                    <ArrowRight className="w-4 h-4 text-[#4f772d]" />
                  </Link>
       
                
              </div>
             
            ))}
          </div>
        
        </div>
      </section>

      </div>
    </section>
  );
}