import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Hana Girma',
    time: '2 months ago',
    rating: 5,

    text: 'Very professional and caring staff. The clinic is clean and modern. Highly recommend!',

  },
  {
    name: 'Jess',
    time: '2 months ago',
    rating: 5,

    text: "Excellent service and very friendly staff. My visit was quick and comfortable.",
  
  },
  {
    name: 'Dawit Mengistu',
    time: '1 month ago',
    rating: 5,
    text: "The dentist was professional and explained everything clearly. Highly recommend!",
   

  },
   {
    name: 'Yors',
    time: '1 month ago',
    rating: 5,
    text: "Clean clinic, welcoming team, and outstanding dental care. I'll definitely be back.",
  },
   {
    name: 'Abel Tsega',
    time: '1 month ago',
    rating: 5,
    text: "Pain-free treatment and great results. The whole experience exceeded my expectations.",
   
  },
   {
    name: 'James Fuhad',
    time: '1 month ago',
    rating: 5,
    text:"Professional, caring, and efficient. I left with a healthier smile and great confidence!"
,
  },
];

export default function ReviewsSection() {
  return (
    <section className="relative py-16 md:py-8">
        
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:pt-[4rem] lg:pb-[4rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#353238]">
            SMASHING REVIEWS FROM OUR PATIENTS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 xl:gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col items-start justify-center p-12 md:p-11 border border-b-4 border-b-[#8E8358] bg-[#353839] h-full xl:w-[23rem] xl:h-[22rem]`}
          >
         
             
             
              <p className="font-body text-[#fff] leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div>
                <p className="font-semibold text-[#000] text-sm">{review.name}</p>
                <p className="text-xs text-[#A89F97] mt-0.5">{review.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}