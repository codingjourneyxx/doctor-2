'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Star01 } from '@untitledui/icons';

const testimonials = [
  {
    quote: 'Her approach to facial aesthetics is grounded in deep anatomical knowledge and surgical precision.',
    name: 'Dr. Rahul Mehta',
    role: 'MBBS, MD Dermatology',
    category: 'DERMATOLOGY',
    image: '/testimonial-1.jpg',
    company: 'Mumbai',
    badgeColor: 'bg-brand-100 text-brand-700',
  },
  {
    quote: 'The hands-on training was exceptional. Complex injection techniques made easy to understand.',
    name: 'Dr. Priya Sharma',
    role: 'BDS, Cosmetic Dentist',
    category: 'COSMETIC DENTISTRY',
    image: '/testimonial-2.jpg',
    company: 'Pune',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    quote: 'This course transformed my practice. The anatomical insights are invaluable.',
    name: 'Dr. Amit Desai',
    role: 'MS ENT, Facial Plastic Surgeon',
    category: 'PLASTIC SURGERY',
    image: '/testimonial-3.jpg',
    company: 'Delhi',
    badgeColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    quote: 'One-on-one training gave me confidence to start offering Botox treatments immediately.',
    name: 'Dr. Sneha Kulkarni',
    role: 'MBBS, Aesthetic Medicine',
    category: 'AESTHETIC MEDICINE',
    image: '/testimonial-4.jpg',
    company: 'Bangalore',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    quote: 'Covers everything from basic science to advanced techniques. Highly recommended.',
    name: 'Dr. Vikram Joshi',
    role: 'MS General Surgery',
    category: 'GENERAL SURGERY',
    image: '/testimonial-5.jpg',
    company: 'Chennai',
    badgeColor: 'bg-rose-100 text-rose-700',
  },
];

// Duplicate for seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-primary">
      <div className="mx-auto max-w-7xl border-x border-secondary">
        <div className="pb-12 pt-8 sm:pb-20 sm:pt-12 lg:pb-28 lg:pt-16">
          {/* Section Header */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="pb-6 sm:pb-8">
              <span className="text-sm font-medium text-brand-600 sm:text-base lg:text-lg">What our students say</span>
              <h2 className="mt-2 max-w-2xl text-xl font-bold tracking-tight text-primary text-balance sm:mt-4 sm:text-3xl lg:text-5xl">
                Trusted by medical professionals worldwide.
              </h2>
              <p className="mt-3 max-w-4xl text-xs leading-relaxed text-secondary sm:mt-4 sm:text-sm lg:mt-6 lg:text-base">
                Join the community of certified aesthetic practitioners who transformed their careers with our internationally recognized training program led by Dr. Supriya Kokane-Patil.
              </p>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          </div>

          <div className="relative mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              {/* Left Fade */}
              <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-gradient-to-r from-primary/60 to-transparent sm:w-16" />

              {/* Right Fade */}
              <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-primary/60 to-transparent sm:w-16" />

              {/* Infinite Scroll Container */}
              <div ref={containerRef} className="flex gap-3 py-2 animate-scroll hover:[animation-play-state:paused] sm:gap-6 sm:py-4" style={{ width: 'fit-content' }}>
                {duplicatedTestimonials.map((testimonial, index) => (
                  <div key={index} className="group relative h-[320px] w-[240px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] sm:h-[400px] sm:w-[300px] sm:rounded-2xl lg:h-[460px] lg:w-[340px]">
                    {/* Background Image */}
                    <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />

                    {/* Main Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-85" />

                    {/* Card Border */}
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 transition-all duration-300 group-hover:ring-brand-500/30 sm:rounded-2xl" />

                    {/* Category Badge */}
                    <div className="absolute left-3 top-3 sm:left-5 sm:top-5">
                      <span className={`inline-flex items-center gap-1 rounded-full ${testimonial.badgeColor} px-2 py-1 text-[8px] font-bold uppercase tracking-wider shadow-lg sm:gap-1.5 sm:px-3.5 sm:py-1.5 sm:text-[11px]`}>
                        <svg className="h-2 w-2 sm:h-3 sm:w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <span className="hidden sm:inline">{testimonial.category}</span>
                        <span className="sm:hidden">{testimonial.category.split(' ')[0]}</span>
                      </span>
                    </div>

                    {/* Company Name */}
                    <div className="absolute right-3 top-3 sm:right-5 sm:top-5">
                      <span className="rounded-md bg-white/10 px-2 py-1 text-xs font-bold tracking-wider text-white/90 drop-shadow-lg backdrop-blur-sm sm:rounded-lg sm:px-3 sm:py-1.5 sm:text-base">
                        {testimonial.company}
                      </span>
                    </div>

                    {/* Quote & Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-7">
                      {/* Star Rating */}
                      <div className="mb-2 flex gap-0.5 sm:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star01 key={i} className="size-3 fill-amber-400 text-amber-400 sm:size-4" />
                        ))}
                      </div>

                      <p className="mb-3 text-xs font-medium leading-relaxed text-white drop-shadow-lg sm:mb-4 sm:text-sm lg:mb-5 lg:text-base">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      <div className="flex items-center gap-2 border-t border-white/10 pt-2 sm:pt-3">
                        <div className="h-6 w-6 overflow-hidden rounded-full ring-2 ring-white/20 sm:h-8 sm:w-8">
                          <Image src={testimonial.image} alt={testimonial.name} width={32} height={32} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <p className="text-[10px] font-medium text-white sm:text-xs">{testimonial.name}</p>
                          <p className="mt-0.5 text-[8px] text-white/60 sm:text-[10px]">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 120s linear infinite;
        }
      `}</style>
    </section>
  );
}
