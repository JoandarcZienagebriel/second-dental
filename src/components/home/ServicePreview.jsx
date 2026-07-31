import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { IMAGES } from '@/lib/images';



export default function AboutPreview() {
 const [lightbox, setLightbox] = useState(null);
  return (
    <section id='service' className="py-15 md:pt-20 lg:py-24">
      <h2  className="font-heading text-2xl text-center font-semibold text-black pt-8 md:text-3xl md:pt-0">Our Dental Services</h2>
                       <p className='text-sm p-6 text-center md:pt-4'>
                         Comprehensive dental care designed around your comfort, health, and confidence. </p>
      <div className="max-w-7xl mx-auto p-2 ">
      
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 xl:gap-16">
                  {IMAGES.gallery.map((img, i) => (
                    <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: '-80px' }}
                              transition={{ duration: 0.6 }}
                              className={`mb-12 p-2 z-10 overflow-hidden cursor-pointer group`}
                            >
              
                      <div
                     
                        className={` object-cover `}
                      >
                        <img
            src={img.image}
            alt={img.tagline}
            className="w-full h-[15rem] object-cover"
            
          />
        
                        
                         <h2 className='font-heading hidden text-[#000] group-hover:block md:inline-block pb-2 pt-4 text-2xl md:text-left md:text-2xl xl:whitespace-nowrap'>{img.title}</h2>
                           <ul className='font-body hidden group-hover:flex flex-col md:inline-block md:pt-4 whitespace-nowrap text-[#000] text-sm lg:text-[1rem]'>
                        {img.subcategories.map((subcategory, index) => (
                              <li key={index} className='flex items-center gap-2 mb-2'> 
                   <Check strokeWidth={5} className="w-4 h-4 text-[#8E8358] shrink-0" />
                  <span>{subcategory}</span>
                  </li>
                  
                            ))}

              </ul>        </div>
                 </motion.div>
                  ))}
                  
                </div>
      </div>
    </section>
  );
}