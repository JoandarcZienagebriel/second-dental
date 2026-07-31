import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/images';


export default function DentistsSection() {
  return (
    <section id='dentist'>
      
 
                   <section className="relative py-12 md:py-20 bg-[#353839]">
                           
                          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
                             <motion.div
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true, margin: '-80px' }}
                                      transition={{ duration: 0.6 }}
                                      className="text-center z-10"
                                    >
                                        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
                                DENTAL CLINIC FAMILY
                                      </h2>
                                    </motion.div>
                          </div>
                        </section>
                  

      <div className='xl:h-[50rem]'>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="gap-0 w-full h-full min-h-screen grid grid-rows-[1fr_1fr] md:grid-rows-none md:grid-cols-[1fr_.5fr]"
        >
              <div className='order-2 md:order-2 bg-[#8E8358]/70 p-[1.5rem]'>
           <h2 className="font-heading text-3xl pb-3 pt-12 text-center md:text-4xl xl:pt-48 font-semibold text-black">
            Meet Dr. Mira
          </h2>
        
                 <p className='font-body text-[#fff] text-[1rem] text-center leading-relaxed lg:px-12 xl:px-28'>
                    Dr. Thomas's journey into dentistry began during his childhood in Addis Ababa, where he watched his grandmother struggle with dental pain due to limited access to care. That experience ignited a lifelong passion to make quality dentistry accessible to his community.
                  
                  </p>
                  <p className='font-body text-[#fff] text-[1rem] text-center leading-relaxed lg:px-12 xl:px-28'>
              Where he watched his grandmother struggle with dental pain due to limited access to care.
                  
                  </p>
                 
             </div>

                <img src={IMAGES.senior} className='order-1 w-full h-full object-cover md:order-1 md:w-full xl:h-[50rem]'/>
               
               
        </motion.div>

   
      </div>
 
<div className='xl:h-[50rem]'>
  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="gap-0 w-full h-full min-h-screen grid grid-rows-[1fr_1fr] md:grid-rows-none md:grid-cols-[.5fr_1fr]"
        >
              <div className='order-2 md:order-1 bg-[#8E8358]/70 p-[1.5rem]'>
          <h2 className="font-heading text-3xl pb-3 pt-12 text-center md:text-4xl xl:pt-48 font-semibold text-black">
            Meet Dr. Thomas
          </h2>
    
                  <p className='font-body text-[#fff] text-[1rem] text-center leading-relaxed lg:px-12 xl:px-28'>
                    Dr. Thomas's journey into dentistry began during his childhood in Addis Ababa, where he watched his grandmother struggle with dental pain due to limited access to care. That experience ignited a lifelong passion to make quality dentistry accessible to his community.
                  
                  </p>
                  <p className='font-body text-[#fff] text-[1rem] text-center leading-relaxed lg:px-12 xl:px-28'>
              Where he watched his grandmother struggle with dental pain due to limited access to care.
                  
                  </p>
                 
                 </div>
                 <img src={IMAGES.dentist1} className='order-1 w-full h-full object-cover md:order-2 md:w-full xl:h-[50rem]'/>
               
        </motion.div>
</div>




    <div style={{backgroundImage:`URL(${IMAGES.assistant})`}}
                      
                        className={`py-24 md:py-[16rem] lg:py-[26rem] xl:py-[27rem] bg-cover bg-center bg-no-repeat object-cover transition-transform duration-500
                    `}>
                     
     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 96 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-[8rem] md:mt-0 md:flex flex-col items-end"
        >
          <div className='relative inline-block p-8 md:p-[2rem] '>
             <div className='absolute inset-0 bg-[#8E8358]/50 ' />
           <div className='relative z-10 p-[1.5rem]'>
             <h2 className="font-heading text-3xl whitespace-nowrap pb-3 md:text-4xl font-semibold text-white lg:pr-[17rem] ">
            Meet Our Team
          </h2>
       
                 
                 <p className='font-body text-white text-[1rem] leading-relaxed md:w-[35rem]'>
                 Our founders envisioned a space where patients would feel genuinely cared for — where the latest dental technology meets a warm, human approach.
                  From our very first patient, we made a promise: to treat every smile as if it were our own.
                  </p>
               
           </div>
          </div>
               
        </motion.div>

   
    </div>
    </section>
  );
}