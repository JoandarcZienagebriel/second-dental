 import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ABOUT_SLIDER } from '@/lib/images';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % ABOUT_SLIDER.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + ABOUT_SLIDER.length) % ABOUT_SLIDER.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = ABOUT_SLIDER[current];

  return (
    <section id='about'
      className="relative h-[40rem] w-full overflow-hidden py-24 md:py-[16rem] lg:py-[26rem] xl:py-[27rem] bg-cover bg-center bg-no-repeat object-cover transition-transform duration-500
               " 
      aria-label="Hero"
      aria-roledescription="carousel"
    >
        
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .4 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.tagline}
            className="w-full h-full object-cover"
            fetchpriority="high"
          />
      
         
        </motion.div>
      </AnimatePresence>
 <div className='lg:mx-[12rem] xl:mx-[22rem]'>
  
              <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6 }}
                      className=" "
                    >
                     
                        
                       <div className='relative z-10 bg-[#8E8358]/70 p-8 md:px-[3rem] md:py-[3rem]'>
      <h2  className="font-heading text-2xl font-semibold text-white md:text-3xl pb-4">ABOUT US</h2>
                       <p className='font-body text-[1rem] text-white'>
                         Dental Clinic was born from a simple yet profound belief: that quality dental care should be accessible and transformative. In 2018, what started as a modest practice on Rwanda Street in the heart of Addis Ababa has since grown into one of the city's most trusted dental clinics.
                       </p>
                    
                       <p className='font-body text-[1rem] text-white'>
                         Today, Dental serves hundreds of families across Addis Ababa, from children experiencing their first dental visit to adults seeking life-changing cosmetic procedures. Our growth has been organic, driven entirely by the trust our patients place in us and the referrals they share with loved ones.
                       </p>
                        
                              </div>
                          
                                  
                           </motion.div>
 </div>
             
</section>
  )}