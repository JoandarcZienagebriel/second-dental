import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/images';
import { Link } from 'react-router-dom';
import { ArrowRight, Import } from 'lucide-react';
import { BEFORE} from '@/lib/servicesData';



export default function DentistsSection() {
  return (
    <section className="relative py-16 md:pt-0 ">
       
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 z-10"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 md:mb-2">Transformation</p>
          <h2 className="font-heading p-0 text-3xl md:text-4xl  font-semibold text-[#353238]">
            BEFORE AND AFTER PHOTOS
          </h2>
          <p className='text-[#000] text-[1rem] p-2 text-center leading-relaxed'>
                 Come and experience a life changing smile, see the transformation for yourself.
                  </p>
                 
        </motion.div>

 {/* Services grid */}
      <section className="py-4 md:py-12">
       
          <div className=''>
          <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-2 xl:gap-16">
            {BEFORE.map((service, i) => (

              <div
               
                className={`mx-auto text-[#353238] flex-shrink-0`}
              >
              
                  <div className='relative'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-[15rem] h-[15rem] md:h-[23rem] md:w-[23rem] object-cover"
                  />
                    <div className='absolute inset-0 bg-[#000]/70 hover:bg-[#000]/0'></div>
        
          
</div>
                
              </div>
             
            ))}
          </div>
        
        </div>
      </section>

      </div>
    </section>
  );
}