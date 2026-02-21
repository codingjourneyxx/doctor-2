'use client';

import { CheckVerified02, Check, Clock, Award01, Shield01, Users01, Eye, User01, AlertTriangle, Target04, Zap, Star01, Scissors01, HeartCircle, MessageCircle01, FileCheck02, Camera01, Scale01 } from '@untitledui/icons';
import { FC } from 'react';

// All modules data
const modules = [
    {
        id: 1,
        badge: 'Module 1',
        title: 'Module 1',
        highlight: ' - Scientific Foundations',
        description: 'Understanding botulinum toxin at the molecular level. This module covers the history, types, mechanism of action, and clinical properties of botulinum toxin for aesthetic applications.',
        topics: [
            { icon: Clock, title: 'History & Evolution', description: 'History and evolution of botulinum toxin from medical discovery to aesthetic applications.' },
            { icon: Award01, title: 'Types of Toxin', description: 'Types of botulinum toxin (Botox®, Dysport®, Xeomin®) and their unique characteristics.' },
            { icon: Shield01, title: 'Mechanism of Action', description: 'Understanding how botulinum toxin works at the neuromuscular junction.' },
            { icon: Users01, title: 'Diffusion & Duration', description: 'Diffusion, spread, onset, and duration of effects for optimal treatment planning.' },
        ],
    },
    {
        id: 2,
        badge: 'Module 2',
        title: 'Module 2',
        highlight: ' - Facial Anatomy for Aesthetic Injection',
        description: 'Deep dive into facial muscle anatomy. Master the intricate muscular architecture of the face and neck essential for safe and effective botulinum toxin injections.',
        topics: [
            { icon: Eye, title: 'Upper Face Anatomy', description: 'Comprehensive study of frontalis, corrugator, procerus, and orbicularis oculi muscles.' },
            { icon: User01, title: 'Lower Face Anatomy', description: 'Understanding muscles of the lower face including zygomaticus, risorius, and mentalis.' },
            { icon: Target04, title: 'Neck Anatomy', description: 'Platysma muscle anatomy and its role in neck rejuvenation procedures.' },
            { icon: AlertTriangle, title: 'Danger Zones', description: 'Critical vascular considerations and anatomical danger zones to avoid complications.' },
        ],
    },
    {
        id: 3,
        badge: 'Module 3',
        title: 'Module 3',
        highlight: ' - Injection Techniques & Indications',
        description: 'Hands-on techniques for each treatment area. Master the art of precise botulinum toxin injection with step-by-step guidance for every facial zone.',
        topics: [
            { icon: Target04, title: 'Glabellar Complex', description: 'Injection techniques for frown lines between the eyebrows.' },
            { icon: Star01, title: 'Forehead Lines', description: 'Treatment of horizontal forehead wrinkles and frontalis muscle.' },
            { icon: Scissors01, title: "Crow's Feet", description: 'Precise injection methods for periorbital wrinkles.' },
            { icon: HeartCircle, title: 'Gummy Smile', description: 'Techniques for reducing excessive gingival display.' },
        ],
        extraRow: [
            { icon: Zap, title: 'DAO & Mentalis', description: 'Lower face rejuvenation for downturned mouth corners and chin dimpling.', image: '/dao-mentalis.jpg' },
            { icon: Users01, title: 'Masseter & Platysmal Bands', description: 'Jawline slimming and neck band treatment techniques.', image: '/masseter-platysma.webp' },
        ],
    },
    {
        id: 4,
        badge: 'Module 4',
        title: 'Module 4',
        highlight: ' - Complications & Management',
        description: 'Prevention, identification, and treatment. Learn to anticipate, recognize, and effectively manage complications for optimal patient outcomes.',
        topics: [
            { icon: Eye, title: 'Ptosis & Asymmetry', description: 'Management strategies for eyelid drooping and facial asymmetry post-treatment.' },
            { icon: AlertTriangle, title: 'Over-treatment Correction', description: 'Addressing frozen face appearance and restoring natural facial expressions.' },
            { icon: MessageCircle01, title: 'Dysphagia & Speech Issues', description: 'Recognition and management of swallowing difficulties and speech complications.' },
            { icon: Users01, title: 'Patient Dissatisfaction', description: 'Professional handling of patient concerns and expectation management protocols.' },
        ],
    },
    {
        id: 5,
        badge: 'Module 5',
        title: 'Module 5',
        highlight: ' - Ethics, Consent & Practice Setup',
        description: 'Legal and ethical considerations. Build a compliant and professional aesthetic practice with proper documentation and ethical guidelines.',
        topics: [
            { icon: Users01, title: 'Patient Selection', description: 'Criteria for identifying ideal candidates and contraindications for treatment.' },
            { icon: FileCheck02, title: 'Counseling & Consent', description: 'Best practices for patient counseling and obtaining informed consent.' },
            { icon: Camera01, title: 'Photography & Documentation', description: 'Standardized protocols for clinical photography and medical record keeping.' },
            { icon: Scale01, title: 'Legal Considerations', description: 'Understanding legal requirements in India and international practice standards.' },
        ],
    },
];

const packageOverview = [
    { title: 'Module 1', subtitle: 'Scientific Foundations', description: 'History, types, mechanism of action, and clinical properties of botulinum toxin at the molecular level.' },
    { title: 'Module 2', subtitle: 'Facial Anatomy', description: 'Deep dive into facial muscle anatomy - upper face, lower face, neck, and danger zones.' },
    { title: 'Module 3', subtitle: 'Injection Techniques', description: "Hands-on techniques for glabellar, forehead, crow's feet, gummy smile, and more." },
    { title: 'Module 4', subtitle: 'Complications', description: 'Prevention, identification, and treatment of ptosis, asymmetry, and other complications.' },
];

const features = ['1:1 Training', '3-4 Hours Duration', 'Live Demonstrations', 'International Certificate', 'Lifetime Support', 'Course Materials'];

// Topic card component
function TopicCard({ icon: Icon, title, description }: { icon: FC<{ className?: string }>; title: string; description: string }) {
    return (
        <div className="group px-4 py-6 transition-colors hover:bg-secondary/30 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div className="mb-3 sm:mb-4 lg:mb-6">
                <div className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 sm:size-10 sm:rounded-xl lg:size-12">
                    <Icon className="size-4 sm:size-5 lg:size-6" />
                </div>
            </div>
            <h4 className="mb-1.5 text-sm font-semibold text-primary sm:mb-2 sm:text-base">{title}</h4>
            <p className="text-xs leading-relaxed text-tertiary sm:text-sm">{description}</p>
        </div>
    );
}

// Module header component
function ModuleHeader({ badge, title, highlight, description }: { badge: string; title: string; highlight: string; description: string }) {
    return (
        <div className="relative overflow-hidden border-b border-secondary px-4 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-12 lg:px-10 lg:pt-16">
            <img src="/eligibility-bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
            <div className="relative">
                <div className="mb-4 sm:mb-6">
                    <div className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-secondary bg-primary px-2.5 py-1.5 shadow-sm sm:gap-2 sm:px-4 sm:py-2">
                        <div className="flex size-4 items-center justify-center rounded-full bg-brand-solid sm:size-5">
                            <CheckVerified02 className="size-2.5 text-white sm:size-3" />
                        </div>
                        <span className="text-[11px] font-semibold text-secondary sm:text-sm">Curriculum</span>
                        <span className="ml-1 hidden rounded-lg border-l border-secondary bg-brand-secondary px-2 py-0.5 pl-2 text-xs font-medium text-brand-secondary sm:inline">{badge}</span>
                    </div>
                </div>
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-4xl">
                    <span className="text-primary">{title}</span>
                    <span className="bg-gradient-to-br from-purple-600 via-brand-500 to-purple-500 bg-clip-text text-transparent">{highlight}</span>
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-secondary sm:mt-4 sm:text-base">{description}</p>
            </div>
        </div>
    );
}

// Course Overview Section
export function CoursePackages() {
    return (
        <section className="bg-primary relative">
            <div className="mx-auto max-w-7xl border-x border-secondary">
                <div className="relative overflow-hidden px-4 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
                    <img src="/eligibility-bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
                    <div className="relative">
                        <div className="mb-8 sm:mb-12 lg:mb-20">
                            <div className="mb-3 inline-flex flex-wrap items-center gap-1.5 rounded-full border border-secondary bg-primary px-2.5 py-1.5 shadow-sm sm:mb-6 sm:gap-2 sm:px-4 sm:py-2">
                                <div className="flex size-4 items-center justify-center rounded-full bg-brand-solid sm:size-5">
                                    <CheckVerified02 className="size-2.5 text-white sm:size-3" />
                                </div>
                                <span className="text-[11px] font-semibold text-secondary sm:text-sm">Course Structure</span>
                                <span className="ml-1 hidden rounded-full bg-brand-secondary px-2 py-0.5 text-xs font-medium text-brand-secondary sm:inline">2025</span>
                            </div>
                            <h2 className="max-w-4xl text-lg font-medium leading-snug text-primary sm:text-xl md:text-2xl lg:text-4xl">
                                <span className="sm:hidden">Complete certification in botulinum toxin injection</span>
                                <span className="hidden sm:inline">Complete certification course in botulinum toxin injection for cosmetic practice</span>
                            </h2>
                        </div>
                        <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-6 lg:mb-16 lg:grid-cols-4 lg:gap-12">
                            {packageOverview.map((p) => (
                                <div key={p.title}>
                                    <div className="mb-3 h-[2px] bg-gradient-to-r from-brand-500 to-brand-400 sm:mb-6 lg:mb-8" />
                                    <h3 className="mb-1.5 text-[10px] font-medium text-brand-secondary sm:mb-3 sm:text-xs lg:mb-4 lg:text-sm">{p.title}<br />{p.subtitle}</h3>
                                    <p className="text-xs leading-relaxed text-secondary sm:text-sm lg:text-base">{p.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mb-4 h-[1px] bg-tertiary/50 sm:mb-6 lg:mb-8" />
                        <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3 lg:gap-x-8 lg:gap-y-4">
                            {features.map((f) => (
                                <div key={f} className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="flex size-3.5 shrink-0 items-center justify-center rounded bg-brand-solid sm:size-4 lg:size-5">
                                        <Check className="size-2 text-white sm:size-2.5 lg:size-3" />
                                    </div>
                                    <span className="text-[10px] font-medium text-primary sm:text-xs lg:text-sm">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Individual Module Sections
export function Module1() {
    const m = modules[0];
    return (
        <div className="mx-auto max-w-7xl border-x border-secondary">
            <ModuleHeader badge={m.badge} title={m.title} highlight={m.highlight} description={m.description} />
            <div className="grid grid-cols-2 divide-x divide-secondary lg:grid-cols-4">
                {m.topics.map((t, i) => <TopicCard key={i} icon={t.icon} title={t.title} description={t.description} />)}
            </div>
        </div>
    );
}

export function Module2() {
    const m = modules[1];
    return (
        <div className="mx-auto max-w-7xl border-x border-secondary">
            <ModuleHeader badge={m.badge} title={m.title} highlight={m.highlight} description={m.description} />
            <div className="grid grid-cols-2 divide-x divide-secondary lg:grid-cols-4">
                {m.topics.map((t, i) => <TopicCard key={i} icon={t.icon} title={t.title} description={t.description} />)}
            </div>
        </div>
    );
}

export function Module3() {
    const m = modules[2];
    return (
        <div className="mx-auto max-w-7xl border-x border-secondary">
            <ModuleHeader badge={m.badge} title={m.title} highlight={m.highlight} description={m.description} />
            <div className="grid grid-cols-2 divide-x divide-secondary lg:grid-cols-4">
                {m.topics.map((t, i) => <TopicCard key={i} icon={t.icon} title={t.title} description={t.description} />)}
            </div>
            {m.extraRow && (
                <div className="grid grid-cols-2 divide-x divide-secondary border-t border-secondary lg:grid-cols-4">
                    {m.extraRow.map((item, i) => (
                        <div key={i} className="contents">
                            <TopicCard icon={item.icon} title={item.title} description={item.description} />
                            <div className="relative overflow-hidden">
                                <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export function Module4() {
    const m = modules[3];
    return (
        <div className="mx-auto max-w-7xl border-x border-secondary">
            <ModuleHeader badge={m.badge} title={m.title} highlight={m.highlight} description={m.description} />
            <div className="grid grid-cols-2 divide-x divide-secondary lg:grid-cols-4">
                {m.topics.map((t, i) => <TopicCard key={i} icon={t.icon} title={t.title} description={t.description} />)}
            </div>
        </div>
    );
}

export function Module5() {
    const m = modules[4];
    return (
        <div className="mx-auto max-w-7xl border-x border-secondary">
            <ModuleHeader badge={m.badge} title={m.title} highlight={m.highlight} description={m.description} />
            <div className="grid grid-cols-2 divide-x divide-secondary lg:grid-cols-4">
                {m.topics.map((t, i) => <TopicCard key={i} icon={t.icon} title={t.title} description={t.description} />)}
            </div>
        </div>
    );
}

// All Modules Combined
export function CourseCurriculum() {
    return (
        <>
            <CoursePackages />
            <Module1 />
            <Module2 />
            <Module3 />
            <Module4 />
            <Module5 />
        </>
    );
}
