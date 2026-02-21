'use client';

import { MedicalSquare, Scissors01, HeartCircle, Users01, Briefcase01, GraduationHat01, CheckCircle, Award01, CheckVerified02 } from '@untitledui/icons';
import { FC, SVGProps } from 'react';

interface Professional {
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  chips: { label: string; color: string }[];
}

const professionals: Professional[] = [
  {
    icon: MedicalSquare,
    title: 'ENT Surgeons',
    description: 'Expand your practice with aesthetic procedures and offer comprehensive facial rejuvenation services.',
    chips: [
      { label: 'Facial Aesthetics', color: 'bg-brand-50 text-brand-700' },
      { label: 'MS/DNB', color: 'bg-emerald-50 text-emerald-700' },
    ],
  },
  {
    icon: Scissors01,
    title: 'Plastic & Cosmetic Surgeons',
    description: 'Enhance your non-surgical treatment options with advanced botulinum toxin techniques.',
    chips: [
      { label: 'Non-Surgical', color: 'bg-violet-50 text-violet-700' },
      { label: 'MCh/DNB', color: 'bg-blue-50 text-blue-700' },
    ],
  },
  {
    icon: HeartCircle,
    title: 'Dermatologists',
    description: 'Add advanced injectables to your services and deliver natural-looking aesthetic results.',
    chips: [
      { label: 'Injectables', color: 'bg-rose-50 text-rose-700' },
      { label: 'MD/DVD', color: 'bg-amber-50 text-amber-700' },
    ],
  },
  {
    icon: Users01,
    title: 'Maxillofacial Surgeons',
    description: 'Complement surgical procedures with Botox for comprehensive facial treatment solutions.',
    chips: [
      { label: 'Facial Surgery', color: 'bg-cyan-50 text-cyan-700' },
      { label: 'MDS/BDS', color: 'bg-indigo-50 text-indigo-700' },
    ],
  },
  {
    icon: Briefcase01,
    title: 'MBBS Doctors',
    description: 'Start your journey in aesthetic medicine with hands-on training and expert guidance.',
    chips: [
      { label: 'Beginner Friendly', color: 'bg-green-50 text-green-700' },
      { label: 'MBBS', color: 'bg-orange-50 text-orange-700' },
    ],
  },
  {
    icon: GraduationHat01,
    title: 'Medical Professionals',
    description: 'With interest in facial aesthetics looking to expand their clinical expertise.',
    chips: [
      { label: 'Career Growth', color: 'bg-pink-50 text-pink-700' },
      { label: 'All Specialties', color: 'bg-slate-100 text-slate-700' },
    ],
  },
];

export function EligibleProfessionals() {
  return (
    <section className="relative bg-primary">
      <div className="mx-auto max-w-7xl border-x border-secondary">
        {/* Header - Outside the grid */}
        <div className="relative overflow-hidden border-b border-secondary px-4 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-12 lg:px-10 lg:pt-16">
          {/* Background Image */}
          <img src="/eligibility-bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
          {/* Content */}
          <div className="relative">
            <div className="mb-4 sm:mb-6">
              <div className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-secondary bg-primary px-2.5 py-1.5 shadow-sm sm:gap-2 sm:px-4 sm:py-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-brand-solid sm:size-5">
                  <CheckVerified02 className="size-2.5 text-white sm:size-3" />
                </div>
                <span className="text-[11px] font-semibold text-secondary sm:text-sm">Eligibility Criteria</span>
                <span className="ml-1 hidden rounded-full border-l border-secondary bg-brand-secondary px-2 py-0.5 pl-3 text-xs font-medium text-brand-secondary sm:inline">Medical Professionals</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-700 sm:text-3xl lg:text-4xl">
              Who Can Enroll?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-secondary sm:mt-4 sm:text-base">
              Our internationally recognized certification program is designed for qualified medical professionals seeking to master aesthetic procedures. Learn advanced botulinum toxin injection techniques from an expert facial plastic surgeon with over 20 years of clinical experience.
            </p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 divide-y divide-secondary sm:grid-cols-2 sm:divide-x md:grid-cols-3">
          {/* Column 1 */}
          <div className="flex flex-col divide-y divide-secondary">
            <ProfessionalCard professional={professionals[0]} />
            <ProfessionalCard professional={professionals[3]} />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col divide-y divide-secondary">
            <ProfessionalCard professional={professionals[1]} />
            <ProfessionalCard professional={professionals[4]} />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col divide-y divide-secondary sm:col-span-2 sm:flex-row sm:divide-x sm:divide-y-0 md:col-span-1 md:flex-col md:divide-x-0 md:divide-y">
            <ProfessionalCard professional={professionals[2]} />
            <ProfessionalCard professional={professionals[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfessionalCard({ professional }: { professional: Professional }) {
  const Icon = professional.icon;

  return (
    <div className="group px-4 py-5 transition-colors hover:bg-secondary/50 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
      <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
        <Icon className="size-4 text-tertiary sm:size-5" />
        <span className="text-xs font-medium text-tertiary sm:text-sm">{professional.title}</span>
      </div>
      <p className="text-sm font-semibold leading-snug text-primary sm:text-base">
        {professional.description}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:mt-4 sm:gap-2">
        {professional.chips.map((chip, index) => (
          <span key={index} className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-medium sm:px-2.5 sm:py-1 sm:text-xs ${chip.color}`}>
            {chip.label}
          </span>
        ))}
      </div>
    </div>
  );
}
