import doc1 from '../assets/img/doc1.jpg';
import veneer from '../assets/img/veneer.jpg';
import general from '../assets/img/general.avif';
import restore from '../assets/img/restorative.jpg';
import assistant from '../assets/img/assistant.jpg';
import otto from '../assets/img/otto.jpg';
import chair from '../assets/img/chair.jpg'
import senior from '../assets/img/senior.jpg';
import braces from '../assets/img/braces.jpg';
import retainer from '../assets/img/retainer.jpg';
import checkup from '../assets/img/checkup.jpg';
import chair2 from '../assets/img/aboutbg.avif';
import check from '../assets/img/check.jpg';
import { VenetianMask } from 'lucide-react';

export const HERO_SLIDES = [
  
 
  {
    image: braces,
     tagline: 'Freshly crafted and professionally trusted',
  },
  {
    image: check,
     tagline: 'Freshly crafted and professionally trusted',
  },
   {
    image: checkup,
    tagline: 'Freshly crafted and professionally trusted',
  },
   {
    image: retainer,
    tagline: 'Freshly crafted and professionally trusted',
  },

];
export const IMAGES = {
  
  hero: {

  },
   dentist1: doc1,
  assistant: assistant,
  senior: senior,
  gallery: [
    {image: general,
    title: 'Preventive Dentistry',
    subcategories:['Oral Examination & Diagnosis', 'Professional Cleaning', 'Fluoride Treatments', 'Oral Hygiene Education'], 
  },
   {image: veneer,
    title: 'Cosmetic Dentistry',
    subcategories:['Veneers', 'Cosmetic Bonding', 'Smile Makeovers', 'Orthodontics', 'Full Mouth Rehabilitation '],
  },
   {
    image: restore,
    title: 'Restorative Dentistry',
    subcategories:['Root Canal Treatment', 'Tooth Extractions', 'Dentures', 'Dental Implants', 'Periodontal Treatment'],
  },
    
  ],
};
export const ABOUT_SLIDER =[
  {image: chair,
     },
      {image: otto,
     },
       {image: chair2,
     },
   
]