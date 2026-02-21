'use client'

import Link from 'next/link'
import { Phone01, Mail01, ArrowRight, Users01, Clock, Globe01, BookOpen01, Target04, GraduationHat01 } from '@untitledui/icons'
import { GridCanvas } from '@/components/marketing/grid-canvas'
import { Logo } from '@/components/marketing/logo'

const footerLinks = {
  course: [
    { name: 'About the Course', href: '#about' },
    { name: 'Course Modules', href: '#modules' },
    { name: 'Learning Objectives', href: '#objectives' },
    { name: 'Target Audience', href: '#audience' },
    { name: 'Hands-On Training', href: '#training' },
    { name: 'Certification', href: '#certification' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  instructor: [
    { name: 'Dr. Supriya Kokane-Patil', href: '#director' },
    { name: 'Credentials & Experience', href: '#credentials' },
    { name: 'Teaching Methodology', href: '#methodology' },
    { name: 'Publications', href: '/publications' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press & Media', href: '/press' },
    { name: 'Partnerships', href: '/partnerships' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Enrollment Process', href: '/enrollment' },
    { name: 'Payment Options', href: '/payment' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary">
      {/* Glowing top border */}
      <div className="relative h-[3px] w-full bg-brand-600">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute h-full w-[40%] animate-[glow_2s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.9), rgba(255, 255, 255, 0.8), rgba(147, 51, 234, 0.9), transparent)',
            }}
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes glow {
          0% { left: -40%; }
          100% { left: 100%; }
        }
        @keyframes borderGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <GridCanvas />

      {/* CTA Section */}
      <div className="relative px-4 py-10 sm:px-12 sm:py-14">
        <div className="relative mx-auto max-w-7xl">
          {/* Glowing border wrapper */}
          <div className="relative p-[1px] overflow-hidden">
            {/* Animated glowing border */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-400/50 via-brand-600/70 to-brand-400/50" />
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 animate-[borderGlow_3s_linear_infinite] opacity-60"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.7), rgba(255, 255, 255, 0.5), rgba(147, 51, 234, 0.7), transparent)',
                }}
              />
            </div>
            {/* Inner content */}
            <div className="relative bg-primary">
              <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left — Content */}
            <div className="relative overflow-hidden bg-primary px-6 py-10 sm:px-14 sm:py-16 lg:col-span-2">
              {/* Decorative gradient blob */}
              <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-brand-100/50 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 size-40 rounded-full bg-brand-50/40 blur-2xl" />

              {/* Title */}
              <h2 className="relative max-w-lg text-2xl font-semibold tracking-tight text-primary sm:text-3xl lg:text-4xl lg:leading-[1.15]">
                Master the Art of
                <span className="mt-1 block bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
                  Aesthetic Excellence.
                </span>
              </h2>

              {/* Description */}
              <p className="relative mt-5 max-w-md text-sm leading-relaxed text-tertiary sm:text-base">
                Join our internationally certified Botulinum Toxin course led by Dr. Supriya Kokane-Patil.
                Learn precision techniques, facial anatomy, and ethical practice.
              </p>

              {/* Stats row */}
              <div className="relative mt-6 flex flex-wrap items-center gap-6 border-y border-secondary py-5">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-brand-50">
                    <Users01 className="size-4 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">1:1 Training</p>
                    <p className="text-xs text-tertiary">Personal attention</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-brand-50">
                    <Clock className="size-4 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">3-4 Hours</p>
                    <p className="text-xs text-tertiary">Comprehensive</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 via-brand-500 to-purple-600 opacity-40 blur-md transition-all duration-300 group-hover:opacity-60 group-hover:blur-lg" />
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-white/20 p-[1px]">
                    <span className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-brand-500 to-purple-500 transition-all duration-300 group-hover:from-purple-500 group-hover:via-brand-400 group-hover:to-purple-400" />
                  </span>
                  <span className="relative z-10">Enroll Now</span>
                  <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#modules"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-secondary bg-primary px-6 py-3.5 text-sm font-semibold text-primary transition-all hover:border-brand-200 hover:bg-brand-50"
                >
                  View Curriculum
                  <ArrowRight className="size-4 text-tertiary transition-all group-hover:translate-x-0.5 group-hover:text-brand-500" />
                </Link>
              </div>
            </div>

            {/* Right — Image + Stats highlight */}
            <div className="relative flex min-h-[50vh] flex-col justify-end overflow-hidden bg-brand-600 sm:min-h-[45vh] lg:col-span-3 lg:min-h-0">
              {/* Background image */}
              <img
                src="/bg.jpg"
                alt="Dr. Supriya Kokane-Patil performing aesthetic procedure"
                className="absolute inset-0 h-full w-full object-cover object-left-bottom"
              />
              {/* Radial glow top-right */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 opacity-15"
                style={{
                  background: 'radial-gradient(circle, var(--color-brand-300), transparent 70%)',
                  filter: 'blur(60px)',
                }}
              />
              {/* Dot pattern */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              {/* Bottom content */}
              <div className="relative px-4 pt-4 sm:px-8 sm:pt-6 lg:px-10 lg:pt-8">
                <p className="text-xs font-medium text-white/80 sm:text-sm">Expert Training</p>
                <p className="mt-1 text-3xl font-bold text-white sm:mt-2 sm:text-5xl lg:text-6xl">20+</p>
                <p className="mt-0.5 text-xs text-white/70 sm:mt-1 sm:text-sm">years of clinical experience</p>
              </div>
              <div className="relative mt-3 grid grid-cols-2 gap-2 px-4 pb-4 sm:mt-4 sm:grid-cols-3 sm:gap-2.5 sm:px-8 sm:pb-6 lg:gap-3 lg:px-10 lg:pb-8">
                <div className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-2 backdrop-blur-md sm:rounded-xl sm:px-3 sm:py-3 lg:px-4 lg:py-3.5">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Users01 className="size-3.5 text-white/70 sm:size-4" />
                    <p className="text-lg font-bold text-white sm:text-xl lg:text-2xl">1:1</p>
                  </div>
                  <p className="mt-0.5 text-[10px] text-white/60 sm:mt-1 sm:text-[11px] lg:text-xs">Personal Training</p>
                </div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-2 backdrop-blur-md sm:rounded-xl sm:px-3 sm:py-3 lg:px-4 lg:py-3.5">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock className="size-3.5 text-white/70 sm:size-4" />
                    <p className="text-lg font-bold text-white sm:text-xl lg:text-2xl">3-4</p>
                  </div>
                  <p className="mt-0.5 text-[10px] text-white/60 sm:mt-1 sm:text-[11px] lg:text-xs">Hours Duration</p>
                </div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-2 backdrop-blur-md sm:rounded-xl sm:px-3 sm:py-3 lg:px-4 lg:py-3.5">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Globe01 className="size-3.5 text-white/70 sm:size-4" />
                    <p className="text-lg font-bold text-white sm:text-xl lg:text-2xl">Int&apos;l</p>
                  </div>
                  <p className="mt-0.5 text-[10px] text-white/60 sm:mt-1 sm:text-[11px] lg:text-xs">Certification</p>
                </div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-2 backdrop-blur-md sm:rounded-xl sm:px-3 sm:py-3 lg:px-4 lg:py-3.5">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <BookOpen01 className="size-3.5 text-white/70 sm:size-4" />
                    <p className="text-lg font-bold text-white sm:text-xl lg:text-2xl">5</p>
                  </div>
                  <p className="mt-0.5 text-[10px] text-white/60 sm:mt-1 sm:text-[11px] lg:text-xs">Modules</p>
                </div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-2 backdrop-blur-md sm:rounded-xl sm:px-3 sm:py-3 lg:px-4 lg:py-3.5">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Target04 className="size-3.5 text-white/70 sm:size-4" />
                    <p className="text-lg font-bold text-white sm:text-xl lg:text-2xl">100%</p>
                  </div>
                  <p className="mt-0.5 text-[10px] text-white/60 sm:mt-1 sm:text-[11px] lg:text-xs">Hands-On</p>
                </div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-2 backdrop-blur-md sm:rounded-xl sm:px-3 sm:py-3 lg:px-4 lg:py-3.5">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <GraduationHat01 className="size-3.5 text-white/70 sm:size-4" />
                    <p className="text-lg font-bold text-white sm:text-xl lg:text-2xl">Prof.</p>
                  </div>
                  <p className="mt-0.5 text-[10px] text-white/60 sm:mt-1 sm:text-[11px] lg:text-xs">Expert</p>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative px-6 pb-4 sm:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden border border-secondary bg-primary">

            {/* Top strip */}
            <div className="relative flex items-center gap-6 border-b border-secondary px-8 py-5 sm:px-12">
              <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Home">
                <Logo className="text-primary" />
              </Link>
              <span className="hidden h-5 w-px bg-tertiary sm:block" />
              <p className="hidden text-sm text-tertiary sm:block">Botulinum Toxin Certification Course</p>
            </div>

            {/* Main links grid */}
            <div className="relative grid gap-8 px-4 py-6 sm:grid-cols-2 sm:px-12 sm:py-12 lg:grid-cols-6">
              {/* Brand col */}
              <div className="sm:col-span-2 lg:col-span-2">
                <p className="max-w-xs text-sm leading-relaxed text-tertiary">
                  Certificate Course in Botulinum Toxin Injection for Cosmetic Practice.
                  Learn from an internationally recognized facial plastic surgeon with over 20 years of experience.
                </p>

                {/* Contact details */}
                <div className="mt-6 flex flex-col gap-3">
                  <a href="tel:9653641750" className="group flex items-center gap-3 rounded-xl border border-secondary bg-primary px-4 py-3 transition-all hover:border-brand-200 hover:shadow-sm">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                      <Phone01 className="size-4" />
                    </span>
                    <div>
                      <p className="text-xs text-tertiary">Call us</p>
                      <p className="text-sm font-medium text-secondary">+91 9653641750</p>
                    </div>
                  </a>
                  <a href="mailto:drcosurg@gmail.com" className="group flex items-center gap-3 rounded-xl border border-secondary bg-primary px-4 py-3 transition-all hover:border-brand-200 hover:shadow-sm">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                      <Mail01 className="size-4" />
                    </span>
                    <div>
                      <p className="text-xs text-tertiary">Email us</p>
                      <p className="text-sm font-medium text-secondary">drcosurg@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Course */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary">Course</h3>
                <p className="mt-1.5 text-[11px] text-tertiary">Explore the curriculum</p>
                <ul className="mt-5 space-y-3">
                  {footerLinks.course.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-tertiary transition-colors hover:text-brand-600">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructor */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary">Instructor</h3>
                <p className="mt-1.5 text-[11px] text-tertiary">Meet your mentor</p>
                <ul className="mt-5 space-y-3">
                  {footerLinks.instructor.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-tertiary transition-colors hover:text-brand-600">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Company */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary">Company</h3>
                <p className="mt-1.5 text-[11px] text-tertiary">Learn more about us</p>
                <ul className="mt-5 space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-tertiary transition-colors hover:text-brand-600">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary">Support</h3>
                <p className="mt-1.5 text-[11px] text-tertiary">We&apos;re here to help</p>
                <ul className="mt-5 space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-tertiary transition-colors hover:text-brand-600">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom bar — inside card */}
            <div className="relative border-t border-secondary px-4 sm:px-12">
              <div className="flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
                <div className="flex items-center gap-2">
                  <span className="flex size-2 rounded-full bg-brand-500" />
                  <p className="text-xs text-tertiary">
                    &copy; {new Date().getFullYear()} Dr. Supriya Kokane-Patil. All rights reserved.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-1 text-xs text-tertiary">
                  <Link href="/privacy" className="rounded-md px-2.5 py-1 transition-colors hover:bg-secondary hover:text-brand-primary">Privacy Policy</Link>
                  <span className="text-quaternary">&middot;</span>
                  <Link href="/terms" className="rounded-md px-2.5 py-1 transition-colors hover:bg-secondary hover:text-brand-primary">Terms of Use</Link>
                  <span className="text-quaternary">&middot;</span>
                  <Link href="/contact" className="rounded-md px-2.5 py-1 transition-colors hover:bg-secondary hover:text-brand-primary">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
