import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES, HERO_SLIDES } from '@/lib/images';
import clinicS from '../../assets/video/small.mp4';
import clinicB from '../../assets/video/big.mp4';

export default function HeroSection() {
 const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = HERO_SLIDES[current];


  return (
    <section id='hero' className="relative -mt-32 w-full h-[90vh] lg:h-[100vh] border-b-4 overflow-hidden">
      {/* Background images */}
     
    <div className='' >

   <div className="relative h-screen overflow-hidden">
       
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .6 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.tagline}
            className="w-full h-full object-cover"
            fetchpriority="high"
          />
         <div className="absolute inset-0 bg-obsidian/40" />
        </motion.div>
      </AnimatePresence>




      {/* Content overlay */}
      <div className="relative flex flex-col items-start justify-end h-full pb-24 z-10 text-[#fff] px-4 lg:pb-[2rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:flex flex-row p-2 text-3xl  md:text-4xl md:gap-5 font-heading md:pt-[5rem] font-bold "
        >
          <h1>INVEST IN YOUR SMILE</h1>
        </motion.div>

          <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-[1.5rem] lg:text-[1.8rem] font-bold p-2 pb-8 md:w-[35rem] "
        >
          A healthier smile today creates greater confidence and brighter tomorrows
        </motion.h1>

     
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
      className='flex flex-col gap-2 p-2 md:flex-row md:gap-6'
        >
          <Link
            to="/booking"
            className="border-b-2 border-[#fff] py-1 pb-0 text-[1rem] font-semibold md:text-xl md:px-14 hover:border-[#8E8358] hover:text-[#8E8358] transition-all "
          >
           BOOK & SMILE
          </Link>
          <Link
            to="/booking"
            className="border-b-2 border-[#fff] py-1 pb-0 text-[1rem] font-semibold hover:border-[#8E8358] hover:text-[#8E8358] md:text-xl md:px-14 transition-all"
          >
           CONTACT US
          </Link>
          
        </motion.div>
         </div>
      </div>

      
     
     
      </div>
    </section>
  );
}