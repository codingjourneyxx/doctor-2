"use client";

import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { CheckVerified02, Clock, Users01, Award01 } from "@untitledui/icons";

// Hoisted static SVGs for performance
const ArrowIcon = (
    <svg className="relative z-10 size-4 sm:size-5" viewBox="0 0 24 24" fill="none">
        <path d="M6 18L18 6M18 6H10M18 6V14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ShieldCheckIcon = (
    <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const CheckCircleIcon = (
    <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
        <path d="m9 11 3 3L22 4" />
    </svg>
);

const StarIcon = (
    <svg className="size-3 fill-amber-400 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
);

// Static data
const services = [
    "Wound dressing & care",
    "Injection & IV administration",
    "Vital signs monitoring",
    "Medication management",
    "Patient hygiene assistance",
    "Catheter care",
];

const stats = [
    { Icon: Clock, value: "3-4 Hours", label: "Duration" },
    { Icon: Users01, value: "1:1 Training", label: "Teaching" },
    { Icon: Award01, value: "International", label: "Certification" },
];

export function CourseHero() {
    return (
        <section className="bg-primary relative min-h-screen overflow-hidden lg:h-[750px]">
            <div className="relative mx-auto h-full max-w-7xl border-x border-white/10 bg-white/70 shadow-2xl backdrop-blur-xl">
                <div className="grid h-full lg:grid-cols-2">
                    {/* Left Column */}
                    <div className="relative flex min-h-[600px] flex-col items-start justify-center px-4 py-8 sm:min-h-[650px] sm:px-6 sm:py-12 lg:h-[750px] lg:px-8 lg:py-0">
                        {/* Dot pattern */}
                        <div className="absolute inset-0 z-0 opacity-30 sm:opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239333ea' fill-opacity='0.6'%3E%3Ccircle cx='2' cy='2' r='1.2'/%3E%3C/g%3E%3C/svg%3E")` }} />

                        <div className="relative z-20 flex w-full flex-col items-start">
                            {/* Badge */}
                            <div className="mb-4 sm:mb-6 md:mb-8">
                                <div className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-secondary bg-primary px-2.5 py-1.5 shadow-sm sm:gap-2 sm:px-4 sm:py-2">
                                    <div className="flex size-4 items-center justify-center rounded-full bg-brand-solid sm:size-5">
                                        <CheckVerified02 className="size-2.5 text-white sm:size-3" />
                                    </div>
                                    <span className="text-secondary text-[11px] font-semibold sm:text-sm">International Certification</span>
                                    <span className="bg-brand-secondary text-brand-secondary ml-1 hidden rounded-full border-l border-secondary px-2 py-0.5 pl-3 text-xs font-medium sm:inline">20+ Years</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-primary text-3xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl" style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                                Certificate Course in{" "}
                                <span className="bg-gradient-to-br from-purple-600 via-brand-500 to-purple-500 bg-clip-text text-transparent">Botulinum Toxin Injection</span>
                            </h1>

                            <p className="text-primary mt-2 text-base font-normal sm:mt-4 sm:text-lg" style={{ lineHeight: 1.6 }}>for Cosmetic Practice</p>

                            {/* Director */}
                            <div className="mt-5 flex items-center gap-3 sm:mt-8 sm:gap-4">
                                <div className="relative shrink-0">
                                    <img src="/Dr. Supriya Kokane-Patil.png" alt="Dr. Supriya Kokane-Patil" className="size-12 rounded-full object-cover shadow-lg ring-2 ring-white sm:size-16" />
                                    <div className="absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-white shadow-sm sm:size-5">
                                        <CheckVerified02 className="size-3 text-brand-500 sm:size-4" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-0.5 sm:gap-1">
                                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                        <p className="text-primary text-sm font-semibold sm:text-lg">Dr. Supriya Kokane-Patil</p>
                                        <Badge type="pill-color" size="sm" color="brand" className="hidden sm:inline-flex">MS (ENT)</Badge>
                                    </div>
                                    <p className="text-secondary text-xs sm:text-sm">Facial Plastic Surgeon | Professor</p>
                                    <p className="text-tertiary text-[11px] sm:text-xs">20+ Years Experience</p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-5 flex w-full flex-col gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:gap-4">
                                <a href="/contact" className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 sm:px-6 sm:py-3 sm:text-base">
                                    <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 via-brand-500 to-purple-600 opacity-40 blur-md transition-all duration-300 group-hover:opacity-60 group-hover:blur-lg" />
                                    <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-white/20 p-[1px]">
                                        <span className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-brand-500 to-purple-500 transition-all duration-300 group-hover:from-purple-500 group-hover:via-brand-400 group-hover:to-purple-400" />
                                    </span>
                                    <span className="relative z-10">Enroll Now</span>
                                    {ArrowIcon}
                                </a>
                                <Button href="#" size="lg" color="secondary" className="w-full justify-center sm:w-auto sm:size-xl" iconTrailing={<svg data-icon className="size-4 sm:size-5" viewBox="0 0 24 24" fill="none"><path d="M6 18L18 6M18 6H10M18 6V14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>}>
                                    Download Brochure
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="border-secondary mt-6 grid w-full grid-cols-3 gap-3 border-t pt-5 sm:mt-10 sm:flex sm:w-auto sm:flex-wrap sm:gap-6 sm:pt-8">
                                {stats.map(({ Icon, value, label }) => (
                                    <div key={label} className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-3">
                                        <Icon className="text-fg-brand-primary size-4 sm:size-5" />
                                        <div className="text-center sm:text-left">
                                            <p className="text-primary text-xs font-semibold sm:text-sm">{value}</p>
                                            <p className="text-tertiary text-[10px] sm:text-xs">{label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image (Desktop) */}
                    <div className="relative hidden h-full overflow-hidden lg:block">
                        <img src="/homerighcol.png" alt="Course" className="h-full w-full -scale-x-100 object-cover" />

                        <div className="absolute inset-x-0 bottom-0 z-20 p-6 xl:p-8">
                            {/* Qualification Badge */}
                            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-secondary bg-white/90 py-2 pl-2 pr-4 shadow-sm backdrop-blur-sm">
                                <div className="flex size-7 items-center justify-center rounded-full bg-brand-100 ring-1 ring-brand-200">
                                    {ShieldCheckIcon}
                                </div>
                                <span className="text-xs font-medium text-primary">GNM / BSc Nursing qualified</span>
                            </div>

                            {/* What's Included */}
                            <div className="overflow-hidden rounded-2xl border border-secondary bg-white/95 shadow-2xl backdrop-blur-md">
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-base font-semibold text-primary">What&apos;s included</h3>
                                        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200">6 services</span>
                                    </div>
                                    <div className="mt-5 grid grid-cols-2 gap-x-8">
                                        {services.map((service, i) => (
                                            <div key={service} className={`flex items-center gap-3 py-3 ${i < 4 ? "border-b border-secondary" : ""}`}>
                                                <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-50">{CheckCircleIcon}</div>
                                                <span className="text-sm text-secondary">{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-secondary bg-secondary/30 px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <span key={i}>{StarIcon}</span>)}</div>
                                        <span className="text-xs font-medium text-tertiary">4.8 (2K+ reviews)</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="relative flex size-2">
                                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-500 opacity-75" />
                                            <span className="relative inline-flex size-2 rounded-full bg-brand-500" />
                                        </div>
                                        <span className="text-xs font-medium text-brand-600">Available Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Image Section */}
                    <div className="relative h-[300px] overflow-hidden sm:h-[350px] lg:hidden">
                        <img src="/homerighcol.png" alt="Course" className="h-full w-full -scale-x-100 object-cover object-top" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />

                        {/* Mobile overlay content */}
                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                            <div className="flex items-center justify-between rounded-xl border border-secondary bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <span key={i}>{StarIcon}</span>)}</div>
                                    <span className="text-xs font-medium text-tertiary">4.8 (2K+ reviews)</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="relative flex size-2">
                                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-500 opacity-75" />
                                        <span className="relative inline-flex size-2 rounded-full bg-brand-500" />
                                    </div>
                                    <span className="text-xs font-medium text-brand-600">Available Now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CourseHero;
