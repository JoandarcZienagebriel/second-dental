import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import us from '../../assets/img/us.png';


export default function AboutPreview() {

  return (
    <section className="py-0 lg:py-24">
      <div className="max-w-7xl mx-auto lg:pt-[4rem] lg:pb-[4rem]">
        <div className="flex flex-col items-center gap-0 md:min-h-screen md:border-4 border-[#4f772d] md:bg-[url('../../../assets/img/us.jpg')] bg-cover bg-no-repeat " >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="order-2 p-4 md:order-1 text-lg bg-[#000] md:w-1/2 md:bg-[#353238]/70 md:p-10 lg:p-14 md:m-auto md:rounded-tr-[10rem] "
          >
         
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-[#4f772d] mb-4 leading-tight">
              We Care 
            </h2>
            <p className="text-[#fff] text-md leading-relaxed">
              At Mira Dental Clinic, we believe every patient deserves personalized, gentle dental care in a warm and welcoming environment. 
            </p>
           
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-semibold text-sm text-[#fff] border border-[#4f772d] p-2 mt-6 hover:gap-3 transition-all"
            >
              LEARN MORE ABOUT OUR TEAM
              <ArrowRight className="w-4 h-4 text-[#4f772d]" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative md:hidden">
              <img
                src={us}
                alt="Mira Dental Clinic interior"
                className="w-full block object-cover m-0"
              />
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}