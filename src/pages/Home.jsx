import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import BeforeAfterSection from '@/components/home/BASection';
import ServicePreview from '@/components/home/ServicePreview';

import ReviewsSection from '@/components/home/ReviewsSection';
import DentistSection from '@/components/home/DentistPreview';
import LocationSection from '@/components/home/LocationSection';
import Appointment from '@/components/home/AppointmentSection';
import About from '@/components/home/AboutSection';
export default function Home() {
  return (
    <div>
      <HeroSection />
       <ServicePreview />
      <BeforeAfterSection />
      <Appointment/>
      <About/>
     <DentistSection/>
     <LocationSection/>
      <ReviewsSection />
    </div>
  );
}