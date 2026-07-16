import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/servicesData';

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="relative py-12 md:py-20 lg:h-[50em] bg-[url('../../assets/img/us-banner.png')] bg-cover bg-no-repeat">
      <div className='absolute inset-0 bg-[#000]/20'></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='pt-16'
          >
            <p className="text-[#4f772d] text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-semibold text-[#132a13] mb-4">
              Our Dental Services
            </h1>
            <p className="space-y-5 leading-relaxed text-white text-base md:text-md xl:text-lg max-w-2xl mx-auto">
              Comprehensive dental care designed around your comfort, health, and confidence. Explore the full range of treatments we offer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-42 lg:py-48 bg-[#fff]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="space-y-[6rem] md:space-y-[7rem] lg:space-y-[8rem]">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center ${
                  i % 2 === 1 ? 'md:direction-rtl' : ''
                }`}
              >
                <div className={`overflow-hidden rounded-lg ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 rounded-tl-[16rem] rounded-br-[8rem] border-2 border-[#4f772d] lg:h-[25rem] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#4f772d] font-mono text-sm font-semibold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-[#DDD6CE]" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#353238] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[#353238] text-md leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2 text-white font-semibold text-sm p-4 border-2 border-[#4f772d] rounded-bl-[2rem] rounded-tr-[2rem] bg-[#4f772d] hover:gap-3 transition-all"
                  >
                    Book this service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}