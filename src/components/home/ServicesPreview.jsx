import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={IMAGES.teethWhitening}
                alt="Professional teeth whitening treatment"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1E3A8A]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#1E3A8A] text-sm font-semibold tracking-widest uppercase mb-3">Our Services</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#0F1A20] mb-5 leading-tight">
              Comprehensive Dental Care
            </h2>
            <p className="text-[#273138] leading-relaxed mb-4">
              From routine cleanings and advanced diagnostics to cosmetic transformations and dental implants — Mira Dental Clinic offers a full spectrum of dental services under one roof.
            </p>
            <p className="text-[#273138] leading-relaxed mb-8">
              We use the latest techniques and equipment to ensure your treatment is comfortable, effective, and tailored to your unique needs.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold text-sm hover:gap-3 transition-all"
            >
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}