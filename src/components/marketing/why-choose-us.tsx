'use client';

import { CheckVerified02, Award01, Shield01, Users01, Certificate01, BookOpen01, Microscope, HeartHand, Clock } from '@untitledui/icons';

const whyUsCards = [
  { title: 'Expert Training', desc: 'Learn from Dr. Supriya Kokane-Patil with 20+ years of clinical and academic experience in facial aesthetics.', mobile: true, icon: Award01 },
  { title: 'Safety First', desc: 'Comprehensive training on complication prevention, management protocols, and patient safety standards.', mobile: true, icon: Shield01 },
  { title: 'Hands-On Practice', desc: '1:1 personalized training with live demonstrations and supervised practical sessions.', mobile: true, icon: Users01 },
  { title: 'International Certification', desc: 'Receive a globally recognized certificate upon successful completion of the course.', mobile: true, icon: Certificate01 },
  { title: '5 Comprehensive Modules', desc: 'From scientific foundations to ethics and practice setup - complete curriculum coverage.', mobile: false, icon: BookOpen01 },
  { title: 'Anatomy-Based Approach', desc: 'Deep dive into facial muscle anatomy for precise injection techniques and natural results.', mobile: false, icon: Microscope },
  { title: 'Lifetime Support', desc: 'Access to course materials, updates, and ongoing mentorship after certification.', mobile: false, icon: HeartHand },
  { title: 'Flexible Scheduling', desc: 'Convenient 3-4 hour sessions designed to fit around your professional commitments.', mobile: false, icon: Clock },
];

export function WhyChooseUs() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl border-x border-secondary">
        <div className="relative overflow-hidden bg-secondary px-4 sm:px-6 lg:px-8">
          {/* Decorative background */}
          <div
            className="absolute -left-[15%] -top-[50%] h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
            style={{ background: 'radial-gradient(circle, var(--color-brand-500) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -right-[10%] -bottom-[40%] h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
            style={{ background: 'radial-gradient(circle, var(--color-brand-400) 0%, transparent 70%)' }}
          />
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          <div className="relative pt-8 md:pt-16 ">
          <h2 className="flex items-center gap-3 text-xl sm:text-3xl md:text-4xl font-medium leading-tight mb-4">
            <CheckVerified02 className="size-6 sm:size-8 md:size-10 text-brand-500 flex-shrink-0" />
            <span>
              <span className="sm:hidden"><span className="bg-gradient-to-br from-purple-600 via-brand-500 to-purple-500 bg-clip-text text-transparent">Why Doctors</span><br /><span className="text-primary">Choose Us</span></span>
              <span className="hidden sm:inline"><span className="bg-gradient-to-br from-purple-600 via-brand-500 to-purple-500 bg-clip-text text-transparent">Why</span> <span className="text-primary font-bold">Medical Professionals</span> <span className="bg-gradient-to-br from-purple-600 via-brand-500 to-purple-500 bg-clip-text text-transparent">Choose This</span> <span className="text-primary font-bold">Certification</span></span>
            </span>
          </h2>
          <p className="text-tertiary text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl pb-6 md:pb-10">
            With 20+ years of expertise, we deliver comprehensive, safe, and practical aesthetic training for medical professionals across India.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-8 md:pb-16">
          {whyUsCards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-primary p-4 border border-secondary rounded-xl hover:border-brand-500 hover:bg-brand-500 transition-colors duration-200 cursor-pointer group ${!item.mobile ? 'hidden md:block' : ''}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-brand-50 group-hover:bg-white/20 transition-colors flex-shrink-0">
                    <Icon className="size-4 text-brand-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-primary group-hover:text-white transition-colors">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-tertiary leading-relaxed group-hover:text-white/90 transition-colors line-clamp-3">{item.desc}</p>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
