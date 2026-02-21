"use client";

import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Lightbulb02, Trophy01, Check, Star01, Microscope, Target04, Shield01, Eye } from "@untitledui/icons";
import { cx } from "@/utils/cx";

const services = ["Facial Anatomy Training", "Injection Techniques", "Patient Assessment", "Dosing Protocols", "Complication Management", "Certification & Support"];

const features = [
    { icon: Microscope, title: "Evidence-Based Training", description: "Structured curriculum aligned with international aesthetic medicine standards" },
    { icon: Target04, title: "Precision Techniques", description: "Anatomy-driven injection methods for optimal results" },
    { icon: Shield01, title: "Safety First", description: "Comprehensive complication prevention and management protocols" },
    { icon: Eye, title: "Natural Results", description: "Focus on maintaining facial harmony and natural expressions" },
];

export function LearningObjectives() {
    return (
        <section className="bg-primary relative overflow-hidden">
            <div className="relative mx-auto max-w-7xl border-x border-secondary">
                <div className="grid lg:grid-cols-2">
                    {/* Left */}
                    <div className="border-b border-secondary p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-12">
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 sm:gap-3 sm:px-4 sm:py-2">
                            <div className="flex size-5 items-center justify-center rounded-full bg-brand-100 sm:size-6">
                                <Lightbulb02 className="size-3 text-brand-600 sm:size-3.5" />
                            </div>
                            <span className="text-xs font-semibold text-brand-700 sm:text-sm">What You&apos;ll Learn</span>
                        </div>

                        <h2 className="mt-4 text-xl font-semibold tracking-tight text-primary sm:mt-6 sm:text-2xl lg:text-3xl">
                            Master the skills that<span className="block text-brand-600">define excellence</span>
                        </h2>

                        <p className="mt-3 text-sm leading-relaxed text-tertiary sm:mt-4 sm:text-base">By the end of this course, participants will be able to</p>

                        {/* What's Included */}
                        <div className="mt-5 rounded-xl border border-secondary bg-secondary/50 p-4 backdrop-blur-sm sm:mt-8 sm:rounded-2xl sm:p-6">
                            <div className="mb-4 flex items-center justify-between sm:mb-6">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="flex size-7 items-center justify-center rounded-lg bg-brand-100 sm:size-8">
                                        <Lightbulb02 className="size-3.5 text-brand-600 sm:size-4" />
                                    </div>
                                    <h3 className="text-base font-semibold text-primary sm:text-lg">What&apos;s included</h3>
                                </div>
                                <span className="inline-flex items-center rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-medium text-brand-700 sm:px-3 sm:py-1 sm:text-xs">6 services</span>
                            </div>

                            <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                                {services.map((service, i) => (
                                    <div key={i} className="flex items-center gap-2 sm:gap-3">
                                        <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-100 sm:size-5">
                                            <Check className="size-2.5 text-brand-600 sm:size-3" />
                                        </div>
                                        <span className="text-xs text-secondary sm:text-sm">{service}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-secondary pt-3 sm:mt-6 sm:pt-4">
                                <div className="flex items-center gap-0.5 sm:gap-1">
                                    {[...Array(5)].map((_, i) => <Star01 key={i} className="size-3 fill-amber-400 text-amber-400 sm:size-4" />)}
                                    <span className="ml-1.5 text-xs text-tertiary sm:ml-2 sm:text-sm">5.0 rating</span>
                                </div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <span className="relative flex size-2">
                                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                                    </span>
                                    <span className="text-[10px] font-medium text-green-600 sm:text-xs">Available Now</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Features */}
                    <div className="p-5 sm:p-8 lg:p-12">
                        <div className="mb-5 flex items-center gap-2 sm:mb-8 sm:gap-3">
                            <div className="flex size-8 items-center justify-center rounded-xl bg-brand-100 sm:size-10">
                                <Trophy01 className="size-4 text-brand-600 sm:size-5" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-primary sm:text-lg">Course Highlights</h3>
                                <p className="text-xs text-tertiary sm:text-sm">What makes us different</p>
                            </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                            {features.map((feature, i) => (
                                <div key={i} className={cx("group relative overflow-hidden rounded-xl p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4", i === 0 ? "" : "border border-secondary bg-primary hover:border-brand-300")}>
                                    {i === 0 && (
                                        <>
                                            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 via-brand-500 to-purple-600 opacity-40 blur-md transition-all duration-300 group-hover:opacity-60 group-hover:blur-lg" />
                                            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-white/20 p-[1px]">
                                                <span className="flex h-full w-full rounded-xl bg-gradient-to-br from-purple-600 via-brand-500 to-purple-500 transition-all duration-300 group-hover:from-purple-500 group-hover:via-brand-400 group-hover:to-purple-400" />
                                            </span>
                                        </>
                                    )}
                                    <div className="relative z-10 mb-2 sm:mb-3">
                                        {i === 0 ? (
                                            <div className="flex size-8 items-center justify-center rounded-xl bg-white/20 sm:size-10">
                                                <feature.icon className="size-4 text-white sm:size-5" />
                                            </div>
                                        ) : (
                                            <FeaturedIcon icon={feature.icon} size="md" color="brand" theme="gradient" />
                                        )}
                                    </div>
                                    <h4 className={cx("relative z-10 text-sm font-semibold sm:text-base", i === 0 ? "text-white" : "text-primary")}>{feature.title}</h4>
                                    <p className={cx("relative z-10 mt-1.5 text-xs leading-relaxed sm:mt-2 sm:text-sm", i === 0 ? "text-white/80" : "text-tertiary")}>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LearningObjectives;
