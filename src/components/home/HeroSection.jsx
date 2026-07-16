import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '@/lib/images';
import clinicVideo from '../../assets/video/clinic.mp4';


export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const images = IMAGES.hero;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full h-[110vh] bg-[#b3d89c]/60 border-b-4 border-[#b3d89c] overflow-hidden">
      {/* Background images */}
     
    <div className='' >

   <div className="relative h-screen overflow-hidden">
           <video autoPlay muted loop playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
          <source src={clinicVideo} type='video/mp4'/>
          </video>
         
       
      {/* Content overlay */}
      <div className="relative flex flex-col items-center justify-center h-full pb-16 z-10 md:pb-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:flex flex-row md:gap-5 font-heading text-center text-5xl text-[#353238]md:pt-[5rem] font-bold lg:text-6xl"
        >
          <h1 className='text-[#4f772d]'>Invest</h1> <h1 className='text-[#132a13]'> In Your Smile</h1>
        </motion.div>

          <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-xl text-black text-center p-4 pb-8 md:text-xl md:w-[35rem] lg:text-2xl xl:text-3xl font-bold"
        >
          A healthier smile today creates greater confidence and brighter tomorrows
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
      
        ></motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
      
        >
          <Link
            to="/booking"
            className="bg-[#4f772d] rounded-lg text-white px-4 py-3 text-base md:text-md font-medium hover:bg-[#4f772d] hover:rounded-full transition-all hover:shadow-lg hover:shadow-[#2CBFAE]/25"
          >
            Book an appointment
          </Link>
        </motion.div>
         </div>
      </div>

      
     
     
      </div>
    </section>
  );
}